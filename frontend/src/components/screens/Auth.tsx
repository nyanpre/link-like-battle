import React, { useState } from 'react';
import { loginWithEmail, signUpWithEmail, loginAsGuest } from '../../utils/firebase';

export const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') setError('メールアドレスかパスワードが間違っています。');
      else if (err.code === 'auth/email-already-in-use') setError('このメールアドレスは既に登録されています。');
      else setError(err.message || '認証に失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    setError('');
    setLoading(true);
    try {
      await loginAsGuest();
    } catch (err: any) {
      setError(err.message || 'ゲストログインに失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg-dark, #111827)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        
        <h1 style={{ fontSize: 'min(2.5rem, 8vh)', marginBottom: 'min(1rem, 2vh)', fontFamily: 'Outfit', color: 'var(--primary, #60a5fa)', textShadow: '0 0 10px rgba(96, 165, 250, 0.5)', textAlign: 'center' }}>
          LINK LIKE BATTLE
        </h1>
        
        <div style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', padding: 'min(2.5rem, 3vh) min(2.5rem, 5vw)', borderRadius: '12px', width: 'min(320px, 85vw)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)', boxSizing: 'border-box' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'min(1.5rem, 3vh)', fontSize: 'min(1.5rem, 4.5vh)', marginTop: -3 }}>{isSignUp ? '【新規アカウント登録】' : '【ログイン】'}</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'min(1.25rem, 2vh)' }}>
            <input 
              type="email" 
              placeholder="メールアドレス" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ padding: 'min(0.75rem, 2vh)', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#374151', color: 'white', fontSize: 'min(1rem, 4vh)' }} 
            />
            <input 
              type="password" 
              placeholder="パスワード (6文字以上)" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength={6}
              style={{ padding: 'min(0.75rem, 2vh)', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#374151', color: 'white', fontSize: 'min(1rem, 4vh)' }} 
            />
            
            {error && <p style={{ color: '#ef4444', fontSize: 'min(0.875rem, 3vh)', margin: '0', textAlign: 'center' }}>{error}</p>}
            
            <button type="submit" disabled={loading} style={{ padding: 'min(0.75rem, 2vh)', backgroundColor: 'var(--primary, #3b82f6)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: 'min(1.1rem, 4.5vh)', transition: 'background-color 0.2s' }}>
              {loading ? '通信中...' : (isSignUp ? '登録してはじめる' : 'ログイン')}
            </button>
          </form>

          <div style={{ marginTop: 'min(1rem, 2vh)', textAlign: 'center' }}>
            <button 
              type="button" 
              onClick={() => { setIsSignUp(!isSignUp); setError(''); }} 
              style={{ background: 'none', border: 'none', color: '#e6e6e6', textDecoration: 'underline', cursor: 'pointer', fontSize: 'min(0.9rem, 3.5vh)' }}
            >
              {isSignUp ? 'すでにアカウントをお持ちの方はこちら' : '新しくアカウントを作る方はこちら'}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', margin: 'min(1.5rem, 1vh) 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4b5563' }}></div>
            <span style={{ padding: '0 10px', color: '#9ca3af', fontSize: 'min(0.875rem, 3vh)' }}>または</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4b5563' }}></div>
          </div>

          <button 
            onClick={handleGuest} 
            disabled={loading}
            style={{ width: '100%', padding: 'min(0.75rem, 2vh)', backgroundColor: 'transparent', color: 'white', border: '1px solid #6b7280', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: 'min(1rem, 4vh)', transition: 'background-color 0.2s' }}
          >
            ログインせずに遊ぶ (ゲスト)
          </button>
        </div>
        
      </div>
    </div>
  );
};