// src/utils/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get, update, remove } from 'firebase/database';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInAnonymously, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth'; // ★ auth関連のインポートを上部にまとめました
import { GameState, CardData } from '../types';

const firebaseConfig = {
  apiKey: "AIzaSyAb1mwHVwbxJbbf2WAFlqclFPGRUid4Oeg",
  authDomain: "link-like-battle.firebaseapp.com",
  databaseURL: "https://link-like-battle-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "link-like-battle",
  storageBucket: "link-like-battle.firebasestorage.app",
  messagingSenderId: "452412670826",
  appId: "1:452412670826:web:3bcee6fa21c456202a5b13"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app); // ★ authの初期化もここに移動

export interface DeckData {
  deck: CardData[];
  unit: string;
}

export interface RoomData {
  id?: string;
  status: 'waiting' | 'ready' | 'playing';
  hostName: string;
  roomName: string;
  hostDeck: DeckData;
  clientName: string | null;
  clientDeck: DeckData | null;
  gameState: GameState | null;
}

export const createRoom = async (hostDeckData: DeckData, hostName: string): Promise<string> => {
  const roomId = Math.random().toString(36).substring(2, 6).toUpperCase();
  const roomRef = ref(db, `rooms/${roomId}`);
  
  const initialRoomData: RoomData = {
    status: 'waiting',
    hostName: hostName || 'YOU',
    roomName: `${hostName || '名無し'}の部屋`,
    hostDeck: hostDeckData,
    clientName: null,
    clientDeck: null,
    gameState: null
  };

  await set(roomRef, initialRoomData);
  return roomId;
};

export const watchRoomsList = (callback: (rooms: RoomData[]) => void) => {
  const roomsRef = ref(db, 'rooms');
  return onValue(roomsRef, (snapshot) => {
    const data = snapshot.val();
    const rooms: RoomData[] = [];
    if (data) {
      Object.keys(data).forEach(key => {
        if (data[key].status === 'waiting') {
          rooms.push({ id: key, ...data[key] });
        }
      });
    }
    callback(rooms);
  });
};

export const joinRoom = async (roomId: string, clientDeckData: DeckData, clientName: string): Promise<void> => {
  const roomRef = ref(db, `rooms/${roomId}`);
  const snapshot = await get(roomRef);
  
  if (!snapshot.exists()) throw new Error('部屋が見つかりません');
  
  const roomData = snapshot.val() as RoomData;
  if (roomData.status !== 'waiting') throw new Error('募集を終了しています');
  if (roomData.clientName) throw new Error('すでに満員です');

  await update(roomRef, {
    clientName: clientName || 'YOU',
    clientDeck: clientDeckData
  });
};

export const setClientReady = async (roomId: string): Promise<void> => {
  await update(ref(db, `rooms/${roomId}`), { status: 'ready' });
};

export const startGameInDB = async (roomId: string, initialState: GameState): Promise<void> => {
  await update(ref(db, `rooms/${roomId}`), {
    status: 'playing',
    gameState: initialState
  });
};

export const watchRoom = (roomId: string, callback: (data: RoomData | null) => void) => {
  return onValue(ref(db, `rooms/${roomId}`), (snapshot) => {
    callback(snapshot.val());
  });
};

export const updateGameStateToDB = async (roomId: string, newGameState: GameState): Promise<void> => {
  await update(ref(db, `rooms/${roomId}`), { gameState: newGameState });
};

export const deleteRoom = async (roomId: string): Promise<void> => {
  await remove(ref(db, `rooms/${roomId}`));
};

// ==========================================
// 認証・アカウント関連の関数群
// ==========================================

export const signUpWithEmail = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const loginWithEmail = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const loginAsGuest = async (): Promise<User> => {
  const userCredential = await signInAnonymously(auth);
  return userCredential.user;
};

export const logoutFromGame = async (): Promise<void> => {
  await signOut(auth);
};

export const watchAuthState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const saveDecksToDB = async (uid: string, decks: any[]): Promise<void> => {
  const userDecksRef = ref(db, `users/${uid}/decks`);
  const safeDecks = JSON.parse(JSON.stringify(decks, (_, value) => value === undefined ? null : value));
  await set(userDecksRef, safeDecks);
};

export const loadDecksFromDB = async (uid: string): Promise<any[]> => {
  const userDecksRef = ref(db, `users/${uid}/decks`);
  const snapshot = await get(userDecksRef);
  if (snapshot.exists()) {
    return snapshot.val() || [];
  }
  return [];
};