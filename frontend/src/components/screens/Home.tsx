// src/components/screens/Home.tsx
import React from 'react';
import { logoutFromGame } from '../../utils/firebase';
import { User } from 'lucide-react';

interface HomeProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  setGameMode: (mode: 'cpu' | 'online' | null) => void;
  setScreen: (screen: 'home' | 'lobby' | 'waitingRoom' | 'deckBuilder' | 'battle') => void;
  user: any;
}

export const Home: React.FC<HomeProps> = ({ 
  playerName, 
  setPlayerName, 
  setGameMode, 
  setScreen,
  user
}) => {
  return (
    <div className="home-screen">
      
      {/* 画面左上のユーザー情報（ノッチを避けるために絶対配置） */}
      <div style={{ position: 'absolute', top: 'max(12px, env(safe-area-inset-top))', left: 'max(12px, env(safe-area-inset-left))', color: '#9ca3af', fontSize: '0.875rem', background: 'rgba(0,0,0,0.5)', padding: '6px 12px', borderRadius: '20px', border: '1px solid #374151', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <User size={14} /> 
        {user?.isAnonymous ? 'ゲストとしてプレイ中' : user?.email}
      </div>

      {/* 中央のコンテンツ（85%縮小で綺麗に収める） */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
        
        <div className="title-logo" style={{ textAlign: 'center', marginBottom: '-0.5rem' }}>
          <span className="title-link">Link!</span><span className="title-like">Like!</span><span className="title-battle">Battle!</span>
        </div>
        
        <p className="title-subtitle" style={{ margin: 0 }}>究極のスクールアイドルバトル</p>
        
        <input 
          className="name-input" 
          maxLength={6} 
          value={playerName} 
          onChange={e => setPlayerName(e.target.value)} 
          placeholder="プレイヤー名 (最大6文字)" 
          style={{ margin: '0' }}
        />
        
        <div className="mode-buttons" style={{ display: 'flex', gap: '1rem' }}>
          <button className="title-start-btn" onClick={() => { setGameMode('cpu'); setScreen('deckBuilder'); }}>
            CPU戦で遊ぶ
          </button>
          <button className="title-start-btn" style={{ background: 'var(--secondary)' }} onClick={() => { setGameMode('online'); setScreen('deckBuilder'); }}>
            通信対戦で遊ぶ
          </button>
        </div>

        {/* 移動させたログイン/切替ボタン */}
        <button
          onClick={async () => {
            if (window.confirm('ログイン画面に戻りますか？\n（※ゲストで作成したデータから離れます）')) {
              await logoutFromGame();
            }
          }}
          style={{
            marginTop: '0.5rem',
            padding: '8px 24px', 
            backgroundColor: 'transparent',
            color: '#9ca3af', 
            border: '1px solid #4b5563', 
            borderRadius: '50px', 
            cursor: 'pointer', 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#4b5563'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9ca3af'; }}
        >
          ログイン / アカウント切替
        </button>
      </div>
      
    </div>
  );
};