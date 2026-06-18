// src/components/ui/CardPreviewModal.tsx
import React from 'react';
import { Shield, Zap, HeartPulse, Swords } from 'lucide-react';
import { getCalculatedCost } from '../../utils/battleEngine';
import { getCardBackground } from './Card';
import { GameState, CardData } from '../../types';

interface CardPreviewModalProps {
  selectedCard: CardData | null;
  gameState: GameState;
  playCard: (card: CardData, isPlayer: boolean) => void;
  setSelectedCard: (card: CardData | null) => void;
}

export const CardPreviewModal: React.FC<CardPreviewModalProps> = ({ selectedCard, gameState, playCard, setSelectedCard }) => {
  if (!selectedCard) return null;

  const calcCost = getCalculatedCost(selectedCard, gameState.player);
  
  // ★ 修正: !(selectedCard as any)._isPreviewOnly を追加。
  // プレビュー専用フラグがない（＝手札からのクリック）時のみ canPlay が true になります。
  const canPlay = !(selectedCard as any)._isPreviewOnly && gameState.isPlayerTurn && gameState.player.currentVoltage >= (calcCost as number) && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating;

  return (
    <div className="card-preview-overlay" onClick={() => setSelectedCard(null)}>
      <div className="card-preview" style={{ background: getCardBackground(selectedCard.歌唱) }} onClick={e => e.stopPropagation()}>
        <div className="card-cost" style={{top:'-12px', left:'-12px', width:'44px', height:'44px', fontSize:'1.4rem'}}>{calcCost}</div>
        <div className="card-title" style={{fontSize:'1.4rem'}}>{selectedCard.曲名}</div>
        <div className="card-tags" style={{fontSize:'0.85rem'}}>
          <span>{selectedCard.歌唱}</span>
          <span>{selectedCard.センター}</span>
        </div>
        <div className="card-stats" style={{fontSize:'0.95rem', padding:'8px'}}>
          {/* ★ 絵文字を白抜きアイコン（Lucide-react）に変更 */}
          {selectedCard.パワー && <span className="stat-item stat-power"><Swords size={16}/> {selectedCard.パワー}</span>}
          {selectedCard.シールド && <span className="stat-item stat-shield"><Shield size={16}/> {selectedCard.シールド}</span>}
          {selectedCard.ヒール && <span className="stat-item stat-heal"><HeartPulse size={16}/> {selectedCard.ヒール}</span>}
          {selectedCard.ダメージ && <span className="stat-item stat-damage"><Zap size={16}/> {selectedCard.ダメージ}</span>}
        </div>
        <div className="card-effect" style={{fontSize:'1.15rem', padding:'12px'}}>
          {selectedCard.効果1 && <div style={{marginBottom:'6px'}}>{selectedCard.効果1}</div>}
          {selectedCard.効果2 && <div>{selectedCard.効果2}</div>}
        </div>
        <div style={{display:'flex', gap:'8px', marginTop:'10px'}}>
          {canPlay && (
            <button className="preview-play-btn" onClick={() => { playCard(selectedCard, true); setSelectedCard(null); }}>使用する</button>
          )}
          <button className="preview-close-btn" onClick={() => setSelectedCard(null)}>閉じる</button>
        </div>
      </div>
    </div>
  );
};