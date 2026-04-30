// frontend/src/utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';

// 画像に表示されていたあなたのプロジェクト専用の設定です
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
export const createRoom = async (hostDeckData) => {
  const roomId = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4桁のランダムな文字列
  const roomRef = ref(db, `rooms/${roomId}`);
  
  await set(roomRef, {
    status: 'waiting',
    hostDeck: hostDeckData,
    clientDeck: null,
    gameState: null,
    action: null
  });
  
  return roomId;
};

// 部屋に参加する（クライアント）
export const joinRoom = async (roomId, clientDeckData) => {
  const roomRef = ref(db, `rooms/${roomId}`);
  const snapshot = await get(roomRef);
  
  if (!snapshot.exists()) {
    throw new Error('部屋が見つかりません');
  }
  if (snapshot.val().status !== 'waiting') {
    throw new Error('既に対戦が始まっています');
  }

  // 自分のデッキ情報を書き込み、状態をplayingに変更
  await set(ref(db, `rooms/${roomId}/clientDeck`), clientDeckData);
  await set(ref(db, `rooms/${roomId}/status`), 'playing');
  
  return snapshot.val().hostDeck;
};

// 部屋の状態を監視する（共通）
export const watchRoom = (roomId, callback) => {
  const roomRef = ref(db, `rooms/${roomId}`);
  const unsubscribe = onValue(roomRef, (snapshot) => {
    callback(snapshot.val());
  });
  return unsubscribe;
};

// 状態(gameState)を更新する（ホスト専用）
export const updateGameStateToDB = async (roomId, newGameState) => {
  await set(ref(db, `rooms/${roomId}/gameState`), newGameState);
};

// クライアントのアクションを送信する（クライアント専用）
export const sendActionToHost = async (roomId, actionType, payload) => {
  await set(ref(db, `rooms/${roomId}/action`), {
    type: actionType,
    payload: payload,
    timestamp: Date.now() // 変更を検知させるため
  });
};
