// src/components/ui/PlayerHand.tsx
import React from 'react';
import { Shield, Zap, HeartPulse, Swords } from 'lucide-react';
import { getCalculatedCost } from '../../utils/battleEngine';
import { getCardBackground } from './Card';
import { GameState, CardData } from '../../types'; // ★追加

interface PlayerHandProps {
  gameState: GameState; // ★ any を変更
  setSelectedCard: (card: CardData | null) => void; // ★ any を変更
}

export const PlayerHand: React.FC<PlayerHandProps> = ({ gameState, setSelectedCard }) => {
  const { player, isPlayerTurn, turnBanner, isCoinFlipPhase, isAnimating } = gameState;

  return (
    <div className="hand-container" style={{ maxWidth: `${Math.max(200, window.innerWidth - (window.innerHeight <= 480 ? 160 : 220))}px` }}>
      {/* ★引数の型を CardData に変更 */}
      {player.hand.map((card: CardData, idx: number, arr: CardData[]) => {
        const calcCost = getCalculatedCost(card, player);
        const canPlay = isPlayerTurn && player.currentVoltage >= (calcCost as number) && !turnBanner && !isCoinFlipPhase && !isAnimating;
        
        const isMobile = window.innerHeight <= 480;
        const cardWidth = isMobile ? 85 : 130;
        const actualMaxWidth = Math.max(200, window.innerWidth - (isMobile ? 160 : 220));
        const minVisible = cardWidth * 0.35;
        let marginLeft;
        if (idx === 0) {
          marginLeft = 0;
        } else if (arr.length > 1) {
          const availableWidth = actualMaxWidth - cardWidth;
          const neededMargin = availableWidth / (arr.length - 1);
          const idealMargin = Math.min(neededMargin, cardWidth * 0.7);
          const clampedMargin = Math.max(idealMargin, minVisible);
          marginLeft = `${-(cardWidth - clampedMargin)}px`;
        }

        return (
          <div 
              key={card.id || card.曲名 + idx} 
              className="card" 
              style={{ 
                  background: getCardBackground(card.歌唱),
                  opacity: canPlay ? 1 : 0.4,
                  cursor: 'pointer',
                  filter: canPlay ? 'none' : 'grayscale(30%)',
                  marginLeft: marginLeft
              }}
              onClick={() => setSelectedCard(card)}
          >
            <div className="card-cost">{calcCost}</div>
            <div className="card-title">{card.曲名}</div>
            <div className="card-tags">
              <span>{card.歌唱}</span>
              <span>{card.センター}</span>
            </div>
            <div className="card-stats">
              {card.パワー && <span className="stat-item stat-power"><Swords size={12}/>{card.パワー}</span>}
              {card.シールド && <span className="stat-item stat-shield"><Shield size={12}/>{card.シールド}</span>}
              {card.ヒール && <span className="stat-item stat-heal"><HeartPulse size={12}/>{card.ヒール}</span>}
              {card.ダメージ && <span className="stat-item stat-damage"><Zap size={12}/>{card.ダメージ}</span>}
            </div>
            <div className="card-effect">
              {card.効果1 && <div style={{marginBottom:'4px'}}>{card.効果1}</div>}
              {card.効果2 && <div>{card.効果2}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};