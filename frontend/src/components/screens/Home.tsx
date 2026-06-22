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
    <div className="home-screen" style={{ padding: 0, overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
      
      {/* 画面左上のユーザー情報 */}
      <div style={{ position: 'absolute', top: 'max(2vh, env(safe-area-inset-top))', left: 'max(2vw, env(safe-area-inset-left))', color: '#9ca3af', fontSize: 'min(0.875rem, 3.5vh)', background: 'rgba(0,0,0,0.5)', padding: 'min(6px, 1.5vh) min(12px, 2vw)', borderRadius: '20px', border: '1px solid #374151', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 10 }}>
        <User size={14} /> 
        {user?.isAnonymous ? 'ゲストとしてプレイ中' : user?.email}
      </div>

      {/* 画面右上のログイン / アカウント切替ボタン */}
      <button
        onClick={async () => {
          if (window.confirm('ログイン画面に戻りますか？\n（※ゲストで作成したデータから離れます）')) {
            await logoutFromGame();
          }
        }}
        style={{
          position: 'absolute',
          top: 'max(2vh, env(safe-area-inset-top))',
          right: 'max(2vw, env(safe-area-inset-right))',
          color: '#9ca3af',
          fontSize: 'min(0.875rem, 3.5vh)',
          background: 'rgba(0,0,0,0.5)',
          padding: 'min(6px, 1.5vh) min(12px, 2vw)',
          borderRadius: '20px',
          border: '1px solid #374151',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s',
          zIndex: 10
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#ffffff'; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#9ca3af'; }}
      >
        ログイン / アカウント切替
      </button>

      {/* ★ 修正: タイトルからボタンまでの要素を、画面のど真ん中に絶対配置で固定する */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 'min(1.5rem, 3vh)', 
        width: '100%',
        zIndex: 5
      }}>
        
        <div className="title-logo" style={{ textAlign: 'center', marginBottom: 0, lineHeight: '1.1' }}>
          <div>
            <span className="title-link" style={{ fontSize: 'min(4rem, 14vh)' }}>Link!</span>
            <span className="title-like" style={{ fontSize: 'min(4rem, 14vh)' }}>Like!</span>
          </div>
          <div className="title-battle" style={{ fontSize: 'min(5rem, 18vh)' }}>Battle!</div>
        </div>
        
        <p className="title-subtitle" style={{ margin: 0, fontSize: 'min(1.2rem, 4.5vh)' }}>究極のスクールアイドルバトル</p>
        
        <input 
          className="name-input" 
          maxLength={6} 
          value={playerName} 
          onChange={e => setPlayerName(e.target.value)} 
          placeholder="プレイヤー名 (最大6文字)" 
          style={{ margin: 0, padding: 'min(15px, 2.5vh)', fontSize: 'min(1.5rem, 5vh)', width: 'min(250px, 40vw)', height: 'min(60px, 9vh)', boxSizing: 'border-box' }}
        />
        
        <div className="mode-buttons" style={{ display: 'flex', gap: 'min(1rem, 3vw)' }}>
          <button className="title-start-btn" onClick={() => { setGameMode('cpu'); setScreen('deckBuilder'); }} style={{ padding: 'min(1rem, 1.5vh) min(2.5rem, 3vw)', fontSize: 'min(1.5rem, 5.5vh)' }}>
            CPU戦で遊ぶ
          </button>
          <button className="title-start-btn" style={{ background: 'var(--secondary)', padding: 'min(1rem, 1.5vh) min(2.5rem, 3vw)', fontSize: 'min(1.5rem, 5.5vh)' }} onClick={() => { setGameMode('online'); setScreen('deckBuilder'); }}>
            通信対戦で遊ぶ
          </button>
        </div>

      </div>
      
    </div>
  );
};