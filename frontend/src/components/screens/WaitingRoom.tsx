// src/components/screens/WaitingRoom.tsx
import React from 'react';
import { setClientReady } from '../../utils/firebase';

interface WaitingRoomProps {
  isHost: boolean;
  playerName: string;
  roomData: any;
  roomId: string;
  handleHostStartGame: () => void;
}

export const WaitingRoom: React.FC<WaitingRoomProps> = ({ isHost, playerName, roomData, roomId, handleHostStartGame }) => (
  <div className="waiting-screen">
    <div className="waiting-box">
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
        {isHost ? 'あなたの部屋' : '通信待機室'}
      </h2>
      <div className="vs-text">{isHost ? playerName || 'YOU' : roomData?.hostName}</div>
      <div style={{ fontWeight: 'bold', color: '#666' }}>VS</div>
      <div className="vs-text">{isHost ? (roomData?.clientName || '待機中...') : playerName || 'YOU'}</div>
      
      <div style={{ marginTop: '2rem' }}>
        {isHost ? (
          roomData?.status === 'ready' 
            ? <button className="title-start-btn" onClick={handleHostStartGame}>バトル開始</button>
            : <p style={{ color: '#666' }}>相手の準備を待っています...</p>
        ) : (
          roomData?.status === 'waiting'
            ? <button className="title-start-btn" style={{ background: '#10b981' }} onClick={() => setClientReady(roomId)}>準備OK</button>
            : <p style={{ color: '#666' }}>ホストの開始を待っています...</p>
        )}
      </div>
    </div>
  </div>
);