// src/components/screens/Home.tsx
import React from 'react';

// 親（App.tsx）から受け取るデータの「型」を定義します
interface HomeProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  setGameMode: (mode: 'cpu' | 'online' | null) => void;
  setScreen: (screen: 'home' | 'lobby' | 'waitingRoom' | 'deckBuilder' | 'battle') => void;
}

export const Home: React.FC<HomeProps> = ({ 
  playerName, 
  setPlayerName, 
  setGameMode, 
  setScreen 
}) => {
  return (
    <div className="home-screen">
      <div className="title-logo" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <span className="title-link">Link!</span><span className="title-like">Like!</span><span className="title-battle">Battle!</span>
      </div>
      <p className="title-subtitle">究極のスクールアイドルバトル</p>
      <input 
        className="name-input" 
        maxLength={6} 
        value={playerName} 
        onChange={e => setPlayerName(e.target.value)} 
        placeholder="プレイヤー名 (最大6文字)" 
      />
      <div className="mode-buttons">
        <button className="title-start-btn" onClick={() => { setGameMode('cpu'); setScreen('deckBuilder'); }}>
          CPU戦で遊ぶ
        </button>
        <button className="title-start-btn" style={{ background: 'var(--secondary)' }} onClick={() => { setGameMode('online'); setScreen('deckBuilder'); }}>
          通信対戦で遊ぶ
        </button>
      </div>
    </div>
  );
};