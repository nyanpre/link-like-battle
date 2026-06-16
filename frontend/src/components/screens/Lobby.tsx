// src/components/screens/Lobby.tsx
import React from 'react';

interface LobbyProps {
  roomsList: any[];
  handleCreateRoom: () => void;
  handleJoinRoom: (id: string) => void;
  setScreen: (screen: string) => void;
}

export const Lobby: React.FC<LobbyProps> = ({ roomsList, handleCreateRoom, handleJoinRoom, setScreen }) => (
  <div className="lobby-screen">
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>ROOMLIST</h2>
    <button className="title-start-btn" style={{ marginBottom: '1rem' }} onClick={handleCreateRoom}>
      部屋を作る
    </button>
    <div className="room-list">
      {roomsList.length === 0 ? <p style={{ textAlign: 'center', color: '#666' }}>現在、待機中の部屋はありません。</p> : roomsList.map(r => (
        <div key={r.id} className="room-item">
          <span>{r.roomName}</span>
          <button className="room-join-btn" onClick={() => handleJoinRoom(r.id)}>入る</button>
        </div>
      ))}
    </div>
    <button style={{ marginTop: '2rem', padding: '10px', background: 'none', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }} 
      onClick={() => setScreen('deckBuilder')} // ★ 'home' から 'deckBuilder' に変更！
    >
      戻る
    </button>
  </div>
);