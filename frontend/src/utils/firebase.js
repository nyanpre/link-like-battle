import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get, update, remove } from 'firebase/database';

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

// 部屋を作成する（ホスト）
export const createRoom = async (hostDeckData, hostName) => {
  const roomId = Math.random().toString(36).substring(2, 6).toUpperCase();
  const roomRef = ref(db, `rooms/${roomId}`);
  
  await set(roomRef, {
    status: 'waiting',
    hostName: hostName || 'YOU',
    roomName: `${hostName || '名無し'}の部屋`,
    hostDeck: hostDeckData,
    clientName: null,
    clientDeck: null,
    gameState: null
  });
  return roomId;
};

// 待機中の部屋一覧をリアルタイム取得
export const watchRoomsList = (callback) => {
  const roomsRef = ref(db, 'rooms');
  return onValue(roomsRef, (snapshot) => {
    const data = snapshot.val();
    const rooms = [];
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

// 部屋に参加する（クライアント）
export const joinRoom = async (roomId, clientDeckData, clientName) => {
  const roomRef = ref(db, `rooms/${roomId}`);
  const snapshot = await get(roomRef);
  
  if (!snapshot.exists()) throw new Error('部屋が見つかりません');
  if (snapshot.val().status !== 'waiting') throw new Error('募集を終了しています');
  if (snapshot.val().clientName) throw new Error('すでに満員です');

  await update(roomRef, {
    clientName: clientName || 'YOU',
    clientDeck: clientDeckData
  });
};

// クライアントが準備OKを押した時
export const setClientReady = async (roomId) => {
  await update(ref(db, `rooms/${roomId}`), { status: 'ready' });
};

// ホストがバトル開始を押した時
export const startGameInDB = async (roomId, initialState) => {
  await update(ref(db, `rooms/${roomId}`), {
    status: 'playing',
    gameState: initialState
  });
};

// 特定の部屋の状態を監視（ホスト・クライアント共通）
export const watchRoom = (roomId, callback) => {
  return onValue(ref(db, `rooms/${roomId}`), (snapshot) => {
    callback(snapshot.val());
  });
};

export const updateGameStateToDB = async (roomId, newGameState) => {
  await update(ref(db, `rooms/${roomId}`), { gameState: newGameState });
};

export const deleteRoom = async (roomId) => {
  await remove(ref(db, `rooms/${roomId}`));
};
