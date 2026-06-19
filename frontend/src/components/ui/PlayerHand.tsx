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
  const handCount = player.hand.length;
  
  // アーチ計算用の中心インデックス
  const centerIdx = (handCount - 1) / 2;

  return (
    <>
      {/* ★ はみ出し防止用：パディング(余白20px)を正確に考慮した重なり幅の自動計算 */}
      <style>{`
        .hand-container {
          --hand-count: ${handCount};
        }
        .hand-container .card {
          /* PC版: 幅160px。基本-60pxで、枚数が多い場合は自動で圧縮して枠内に収める */
          margin-left: calc(min(-60px, (100% - 20px - (var(--hand-count) * 160px)) / max(1, var(--hand-count) - 1))) !important;
        }
        .hand-container .card:first-child {
          margin-left: 0 !important;
        }
        @media (max-width: 768px), (max-height: 480px) {
          .hand-container .card {
            /* スマホ版: 幅78px。基本-32pxで、枚数が多い場合は自動で圧縮して枠内に収める */
            margin-left: calc(min(-32px, (100% - 120px - (var(--hand-count) * 78px)) / max(1, var(--hand-count) - 1))) !important;
          }
        }
      `}</style>

      <div className="hand-container">
        {player.hand.map((card: any, idx: number) => {
          const calcCost = getCalculatedCost(card, player);
          const canPlay = isPlayerTurn && player.currentVoltage >= (calcCost as number) && !turnBanner && !isCoinFlipPhase && !isAnimating;

          // ★ アーチ状の計算（ほんの少しだけ）
          const relativePos = idx - centerIdx;
          const rotation = relativePos * 2.5; // 1枚あたり約2.5度だけ傾ける
          const translateY = Math.pow(relativePos, 2) * 1.2; // 中心から離れるほど少しだけ下げる(放物線)

          return (
            <div 
                key={card.id || card.曲名 + idx} 
                className="card" 
                style={{ 
                    background: getCardBackground(card.歌唱),
                    opacity: canPlay ? 1 : 0.4,
                    cursor: 'pointer',
                    filter: canPlay ? 'none' : 'grayscale(30%)',
                    // ★ アーチの適用と重なり順の指定
                    transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
                    zIndex: idx,
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
    </>
  );
};