// src/components/ui/DiscardModal.tsx
import React from 'react';
import { Trash2 } from 'lucide-react';
import { StandardCard } from './Card';
import { GameState, CardData } from '../../types'; // ★追加

interface DiscardModalProps {
  showDiscard: { show: boolean; owner: 'player' | 'enemy' | null }; // ★厳密化
  setShowDiscard: (state: { show: boolean; owner: 'player' | 'enemy' | null }) => void;
  gameState: GameState; // ★ any を変更
}

export const DiscardModal: React.FC<DiscardModalProps> = ({ showDiscard, setShowDiscard, gameState }) => {
  if (!showDiscard.show || !showDiscard.owner) return null;

  // owner に応じて捨て札配列を取得
  const discardPile = showDiscard.owner === 'player' ? gameState.player.discard : gameState.enemy.discard;

  return (
    <div className="modal-overlay" onClick={() => setShowDiscard({ show: false, owner: null })}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{fontFamily:'Outfit', margin: 0}}>{showDiscard.owner === 'player' ? 'YOUR' : 'ENEMY'} DISCARD PILE</h2>
          <button className="modal-close" onClick={() => setShowDiscard({ show: false, owner: null })}><Trash2 size={20}/></button>
        </div>
        <div className="modal-grid">
          {discardPile.map((card: CardData, i: number) => (
            <StandardCard key={i} card={card} />
          ))}
          {discardPile.length === 0 && <div style={{color:'#666'}}>No cards in discard pile.</div>}
        </div>
      </div>
    </div>
  );
};