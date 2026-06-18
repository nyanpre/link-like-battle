// src/components/screens/Auth.tsx
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
    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg-dark, #111827)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* ★ ここから中身を80%に縮小して中央に寄せるラッパー */}
      <div style={{ transform: 'scale(0.8)', transformOrigin: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: 'Outfit', color: 'var(--primary, #60a5fa)', textShadow: '0 0 10px rgba(96, 165, 250, 0.5)', textAlign: 'center' }}>
          LINK LIKE BATTLE
        </h1>
        
        <div style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)', padding: '2.5rem', borderRadius: '12px', width: '320px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>{isSignUp ? '新規アカウント登録' : 'ログイン'}</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <input 
              type="email" 
              placeholder="メールアドレス" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ padding: '0.75rem', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#374151', color: 'white', fontSize: '1rem' }} 
            />
            <input 
              type="password" 
              placeholder="パスワード (6文字以上)" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength={6}
              style={{ padding: '0.75rem', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#374151', color: 'white', fontSize: '1rem' }} 
            />
            
            {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: '0', textAlign: 'center' }}>{error}</p>}
            
            <button type="submit" disabled={loading} style={{ padding: '0.75rem', backgroundColor: 'var(--primary, #3b82f6)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', transition: 'background-color 0.2s' }}>
              {loading ? '通信中...' : (isSignUp ? '登録してはじめる' : 'ログイン')}
            </button>
          </form>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button 
              type="button" 
              onClick={() => { setIsSignUp(!isSignUp); setError(''); }} 
              style={{ background: 'none', border: 'none', color: '#9ca3af', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              {isSignUp ? 'すでにアカウントをお持ちの方はこちら' : '新しくアカウントを作る方はこちら'}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4b5563' }}></div>
            <span style={{ padding: '0 10px', color: '#9ca3af', fontSize: '0.875rem' }}>または</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4b5563' }}></div>
          </div>

          <button 
            onClick={handleGuest} 
            disabled={loading}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: 'transparent', color: 'white', border: '1px solid #6b7280', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background-color 0.2s' }}
          >
            ログインせずに遊ぶ (ゲスト)
          </button>
        </div>
        
      </div>
      {/* ★ ラッパーここまで */}
    </div>
  );
};