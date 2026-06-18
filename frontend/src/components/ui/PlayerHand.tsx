// src/components/ui/PlayerHand.tsx
import React from 'react';
import { Shield, Zap, HeartPulse, Swords } from 'lucide-react';
import { getCalculatedCost } from '../../utils/battleEngine';
import { getCardBackground } from './Card';
import { GameState, CardData } from '../../types';

interface PlayerHandProps {
  gameState: GameState;
  setSelectedCard: (card: CardData | null) => void;
}

export const PlayerHand: React.FC<PlayerHandProps> = ({ gameState, setSelectedCard }) => {
  const { player, isPlayerTurn, turnBanner, isCoinFlipPhase, isAnimating } = gameState;

  return (
    <div className="hand-container">
      {/* ★ 修正：CardData型への厳密化をやめ、元の any に戻してエラーを解消します */}
      {player.hand.map((card: any, idx: number) => {
        const calcCost = getCalculatedCost(card, player);
        const canPlay = isPlayerTurn && player.currentVoltage >= (calcCost as number) && !turnBanner && !isCoinFlipPhase && !isAnimating;

        return (
          <div 
              key={card.id || card.曲名 + idx} 
              className="card" 
              style={{ 
                  background: getCardBackground(card.歌唱),
                  opacity: canPlay ? 1 : 0.4,
                  cursor: 'pointer',
                  filter: canPlay ? 'none' : 'grayscale(30%)'
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