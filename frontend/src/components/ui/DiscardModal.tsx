// src/components/ui/DiscardModal.tsx
import React from 'react';
import { GameState } from '../../types';
import { StandardCard } from './Card'; // ★ 修正

interface DiscardModalProps {
  showDiscard: { show: boolean, owner: 'player' | 'enemy' | null };
  setShowDiscard: (show: { show: boolean, owner: 'player' | 'enemy' | null }) => void;
  gameState: GameState;
  setSelectedCard?: (card: any) => void;
}

export const DiscardModal: React.FC<DiscardModalProps> = ({ showDiscard, setShowDiscard, gameState, setSelectedCard }) => {
  if (!showDiscard.show) return null;

  const discardPile = showDiscard.owner === 'player' ? gameState.player.discard : gameState.enemy.discard;

  return (
    <div className="modal-overlay" onClick={() => setShowDiscard({ show: false, owner: null })}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{margin:0}}>{showDiscard.owner === 'player' ? 'あなたの捨て札' : '相手の捨て札'} ({discardPile.length}枚)</h2>
          <button className="modal-close" onClick={() => setShowDiscard({ show: false, owner: null })}>閉じる</button>
        </div>
        <div className="modal-grid">
          {discardPile.map((card: any, idx: number) => (
            <div 
                key={idx} 
                onClick={() => {
                  // ★ 捨て札からも「プレビュー専用」として渡す
                  if (setSelectedCard) setSelectedCard({ ...card, _isPreviewOnly: true });
                }} 
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            >
              {/* ★ 中身を手札と完全に同じコンポーネントにする */}
              <div style={{ pointerEvents: 'none' }}>
                <StandardCard card={card} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};