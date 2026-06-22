// src/components/ui/HowToPlayModal.tsx
import React from 'react';
import { X, BookOpen, Layers, Swords, Zap, Heart, Shield, Star } from 'lucide-react';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 全体的にサイズダウンし、ライトテーマに合わせたスタイル定義
  const sectionStyle: React.CSSProperties = { 
    marginBottom: '1.2rem', 
    backgroundColor: '#f8fafc', // 明るいグレー
    padding: '16px', 
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  };
  const titleStyle: React.CSSProperties = { 
    display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', 
    color: '#1e293b', borderBottom: '2px solid #e2e8f0', 
    paddingBottom: '8px', marginBottom: '12px', marginTop: 0, fontWeight: 'bold'
  };
  const textStyle: React.CSSProperties = { fontSize: '0.85rem', lineHeight: '1.6', color: '#475569', margin: '0 0 8px 0' };
  const highlight: React.CSSProperties = { color: '#ef4444', fontWeight: 'bold' };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, padding: '16px'
    }} onClick={onClose}>
      
      {/* モーダル本体（ライトテーマ化・コンパクト化） */}
      <div style={{
        backgroundColor: '#ffffff', width: '100%', maxWidth: '850px', maxHeight: '90vh',
        borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'
      }} onClick={e => e.stopPropagation()}>

        {/* ヘッダー固定 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} color="#6366f1" /> 遊び方ガイド
          </h2>
          <button onClick={onClose} style={{ background: '#e2e8f0', border: 'none', color: '#475569', cursor: 'pointer', padding: '6px', borderRadius: '50%', display: 'flex', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#cbd5e1'} onMouseOut={e => e.currentTarget.style.background = '#e2e8f0'}>
            <X size={18} />
          </button>
        </div>

        {/* スクロール可能なコンテンツエリア */}
        <div style={{ padding: '20px', overflowY: 'auto' }}>
          
          {/* セクション1・2：概要とデッキ作成 */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            
            <section style={{ ...sectionStyle, flex: '1 1 300px' }}>
              <h3 style={titleStyle}>1. バトルの目的と流れ</h3>
              <p style={textStyle}>30枚のデッキを使い、先に相手のメンタルを <span style={highlight}>0</span> にした方の勝利です。<br/>毎ターンカードを引き、準備ができたら<strong>「END TURN」</strong>を押して相手のターンへ移ります。</p>
            </section>

            {/* 新規追加：デッキ作成とユニット */}
            <section style={{ ...sectionStyle, flex: '1.5 1 350px' }}>
              <h3 style={titleStyle}>2. デッキ作成とユニットの特長</h3>
              <p style={textStyle}>
                自分が使う<strong>「ユニット」</strong>を選び、<br/>
                <strong>全体曲</strong>と<strong>指定したユニット曲</strong>のカードで<span style={highlight}>30枚</span>のデッキを組みます。<br/>
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>※同名カードは基本的に3枚まで編成可能です。</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                <div style={{ background: '#fff', padding: '6px 10px', borderRadius: '4px', border: '1px solid #e2e8f0', borderLeft: '4px solid #d8289d' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#d8289d' }}>スリーズブーケ</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>手札コントロールや回復・シールドを駆使した戦いが得意</div>
                </div>
                <div style={{ background: '#fff', padding: '6px 10px', borderRadius: '4px', border: '1px solid #e2e8f0', borderLeft: '4px solid #3b82f6' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1d4ed8' }}>DOLLCHESTRA</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>自傷ダメージによる大ダメージやコンボによるスリルのある戦いが得意</div>
                </div>
                <div style={{ background: '#fff', padding: '6px 10px', borderRadius: '4px', border: '1px solid #e2e8f0', borderLeft: '4px solid #eab308' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a16207' }}>みらくらぱーく！</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>ボルテージ回復や連続ダメージによる楽しく激しい戦いが得意</div>
                </div>
              </div>
            </section>

          </div>

          {/* セクション3：システム要素のまとめ */}
          <section style={sectionStyle}>
            <h3 style={titleStyle}>3. バトルの重要システム</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Layers size={18} color="#eab308" style={{ marginTop: '2px' }}/>
                <div><strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>ボルテージ</strong><p style={textStyle}>毎ターン最大値が増加（最大10）。1ターンに使えるカードのコスト上限です。</p></div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Star size={18} color="#a855f7" style={{ marginTop: '2px' }}/>
                <div><strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>SPスキル</strong><p style={textStyle}>バトル中1回だけ、ボルテージを4回復できます</p></div>
              </div>
            </div>
          </section>

          {/* セクション4：カードの見方と基本効果 */}
          <section style={sectionStyle}>
            <h3 style={titleStyle}> 4. カードの見方と4つの基本効果</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
              {/* 疑似カードUI */}
              <div style={{ width: '150px', height: '210px', background: '#fff', borderRadius: '8px', padding: '8px', position: 'relative', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '2px solid #cbd5e1' }}>
                <div style={{ position: 'absolute', top: '-8px', left: '-8px', background: '#3b82f6', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem', border: '2px solid white' }}>3</div>
                <div style={{ marginTop: '16px', fontSize: '0.7rem', color: '#881337', fontWeight: 'bold' }}>スリーズブーケ</div>
                <div style={{ marginTop: '4px', fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a' }}>カードの名前</div>
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', right: '8px', background: '#f1f5f9', padding: '8px', borderRadius: '6px', fontSize: '0.7rem', color: '#334155' }}>
                  左上が消費コストです。下部にカードの能力が書かれています。
                </div>
              </div>
              
              {/* 基本効果の説明 */}
              <div style={{ flex: 1, minWidth: '250px' }}>
                <p style={textStyle}>カードを使うことで、以下の4つの基本的な効果が発生します。</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
                  <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: '#ef4444', fontSize: '0.9rem' }}><Swords size={16} /> 攻撃</div>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>相手のメンタルにダメージを与えて減らします。</div>
                  </div>
                  <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: '#10b981', fontSize: '0.9rem' }}><Heart size={16} /> 回復</div>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>減ってしまった自分のメンタルを回復します。</div>
                  </div>
                  <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: '#3b82f6', fontSize: '0.9rem' }}><Shield size={16} /> シールド</div>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>相手からの攻撃ダメージを代わりに受けて防ぐシールドを付与します。</div>
                  </div>
                  <div style={{ background: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: '#9333ea', fontSize: '0.9rem' }}><Zap size={16} /> 自傷</div>
                    <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>強力な効果の代償として、自身のメンタルが減ります。</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* セクション5：トリガー効果 */}
          <section style={sectionStyle}>
            <h3 style={titleStyle}>5. 条件で発動する「トリガー効果」</h3>
            <p style={textStyle}>特定の条件を満たした時だけ、通常よりも強力な追加効果を発揮するカードが存在します。</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              <div style={{ background: '#fff', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #eab308', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>ボルテージ数 トリガー</div>
                <div style={{ fontSize: '0.8rem', color: '#475569' }}>現在のボルテージが指定の数値以上溜まっていると効果が発動します。</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', backgroundColor: '#f8fafc', padding: '4px 8px', borderRadius: '4px' }}>
                  <strong>例：</strong>「ボルテージが5以上の時、相手に2ダメージ与える」
                </div>
              </div>

              <div style={{ background: '#fff', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #0ea5e9', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>行動回数 トリガー</div>
                <div style={{ fontSize: '0.8rem', color: '#475569' }}>そのターンにカードを使った回数が指定の回数以上だと効果が発動します。</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', backgroundColor: '#f8fafc', padding: '4px 8px', borderRadius: '4px' }}>
                  <strong>例：</strong>「このカードのコストは、ターン中に使用したカードの枚数分小さくなる」
                </div>
              </div>

              <div style={{ background: '#fff', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #9333ea', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>自傷ダメージ トリガー</div>
                <div style={{ fontSize: '0.8rem', color: '#475569' }}>そのターン中に、自分のカードの効果でダメージ（自傷）を受けていると発動します。</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px', backgroundColor: '#f8fafc', padding: '4px 8px', borderRadius: '4px' }}>
                  <strong>例：</strong>「このターン中、既にダメージを受けている場合、カードを1枚引く」
                </div>
              </div>

            </div>
          </section>

          <div style={{ textAlign: 'center', marginTop: '24px', padding: '12px' }}>
            <button onClick={onClose} style={{ padding: '10px 32px', fontSize: '0.95rem', fontWeight: 'bold', color: '#ffffff', background: '#6366f1', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              閉じてゲームに戻る
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};