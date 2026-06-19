// src/components/ui/SetlistBoard.tsx
import React, { useState } from 'react';
import { GameState } from '../../types';
import { StandardCard } from './Card';

interface SetlistBoardProps {
  gameState: GameState;
  setSelectedCard?: (card: any) => void;
}

export const SetlistBoard: React.FC<SetlistBoardProps> = ({ gameState, setSelectedCard }) => {
  const { setlist } = gameState;
  const [showModal, setShowModal] = useState(false);

  if (!setlist || setlist.length === 0) return null;

  // 使用カードを開くときの処理（貫通防止）
  const handleStackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* 盤面中央のスタック */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          // ★ 修正: 前回の -3px からさらに 8px 上へ (-11px)
          transform: 'translateY(-45px)', 
          zIndex: 40 
        }}
      >
        {setlist.map((item: any, idx: number) => {
          const actualCard = item.card ? item.card : item;
          const offset = Math.min(idx * 4, 16);
          const isLatest = idx === setlist.length - 1;
          
          return (
            <div 
              key={idx} 
              style={{ 
                position: 'absolute', 
                // カードの中心を基準に、重ねる分のoffsetを加えて配置
                transform: `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))`, 
                zIndex: idx, 
                filter: isLatest ? 'none' : 'brightness(0.85)',
                pointerEvents: isLatest ? 'auto' : 'none',
                cursor: isLatest ? 'pointer' : 'default'
              }}
              onClick={isLatest ? handleStackClick : undefined}
            >
              <StandardCard card={actualCard} />
            </div>
          );
        })}
      </div>

      {/* 一覧モーダル */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 style={{ margin: 0 }}>使用したカード ({setlist.length}枚)</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>閉じる</button>
            </div>
            <div className="modal-grid">
              {[...setlist].reverse().map((item: any, idx: number) => {
                const actualCard = item.card ? item.card : item;
                return (
                  <div key={idx} onClick={() => { 
                    if (setSelectedCard) setSelectedCard({ ...actualCard, _isPreviewOnly: true }); 
                  }}>
                    <StandardCard card={actualCard} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};