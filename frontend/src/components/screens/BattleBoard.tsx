// src/components/screens/BattleBoard.tsx
import React from 'react';
import { Smartphone, Flag } from 'lucide-react';
import { GameState, CardData } from '../../types';
import { StandardCard } from '../ui/Card';
import { PlayerStatus } from '../ui/PlayerStatus';
import { PlayerHand } from '../ui/PlayerHand';
import { CardPreviewModal } from '../ui/CardPreviewModal';
import { DiscardModal } from '../ui/DiscardModal';
import { BattleResultOverlay } from '../ui/BattleResultOverlay';
import { VoltageSidebar } from '../ui/VoltageSidebar';
import { SetlistBoard } from '../ui/SetlistBoard';

interface BattleBoardProps {
  gameState: GameState;
  gameMode: string | null;
  roomId: string;
  isHost: boolean;
  setScreen: (screen: string) => void;
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
  
  damageTexts: any[];
  showDiscard: { show: boolean, owner: 'player' | 'enemy' | null };
  setShowDiscard: any;
  overdrawnCards: any[];
  selectFromDiscard: any;
  setSelectFromDiscard: any;
  endTurnPlayer: () => void;
  playCard: (card: CardData, isPlayer: boolean, ignoreCost?: boolean) => void;
  playCardFromDiscard: (card: CardData) => void;
  handleRematch: () => void;
  handleSpSkill: () => void;
  handleSurrender: () => void;
}

export const BattleBoard: React.FC<BattleBoardProps> = ({
  gameState, gameMode, roomId, isHost, setScreen, selectedCard, setSelectedCard,
  damageTexts, showDiscard, setShowDiscard, overdrawnCards, selectFromDiscard, setSelectFromDiscard,
  endTurnPlayer, playCard, playCardFromDiscard, handleRematch, handleSpSkill, handleSurrender
}) => {

  const isEndTurnDisabled = !(gameState.isPlayerTurn && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating);

  return (
    <>
      <div className="orientation-warning">
        <Smartphone size={64} />
        <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
        <p>このゲームは横画面専用です</p>
      </div>

      <div className="game-container">
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          
          {!gameState.battleResult && (
            <button
              onClick={handleSurrender}
              style={{
                position: 'absolute', top: 'max(0.5rem, env(safe-area-inset-top))', right: 'max(1.0rem, env(safe-area-inset-right))', 
                display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 14px', backgroundColor: '#ffffff', color: '#000000', fontSize: '0.85rem',
                fontWeight: 'bold', borderRadius: '9999px', border: '1px solid #000000', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer', zIndex: 50, backdropFilter: 'blur(4px)', transition: 'all 0.2s ease-in-out'
              }}
            >
              <Flag size={14} /><span>降参</span>
            </button>
          )}

          {gameState.turnBanner && <div className="turn-banner">{gameState.turnBanner}</div>}
          
          {/* ★ 修正: 相手がプレイしたカードに、白く発光するエフェクトを付与 */}
          {gameState.enemyPlayedCard && !gameState.turnBanner && (
            <div className="enemy-played-popup card-play-effect">
                <StandardCard card={gameState.enemyPlayedCard} />
            </div>
          )}

          {overdrawnCards.map(od => (
            <div key={od.id} className={`overdraw-container ${od.isPlayer ? 'player' : 'enemy'}`}>
              <StandardCard card={od.card} />
            </div>
          ))}

          {damageTexts.map(dt => (
            <div key={dt.id} className={dt.cssClass || 'damage-text'} style={{ left: `${dt.x}px`, top: `${dt.y}px`, color: dt.color }}>
              {dt.text}
            </div>
          ))}

          <div className="enemy-hand-container" style={{ top: '-40px' }}>
            {gameState.enemy.hand.map((_: any, i: number) => (
              <div key={i} className="enemy-card-back"></div>
            ))}
          </div>

          <div className="board-area">
            {/* ★ 修正: 敵ステータスの周りに光る枠を追加 */}
            <div className={`status-effect-wrapper ${
              gameState.animations?.enemyDamage ? 'glow-damage' :
              gameState.animations?.enemyHeal ? 'glow-heal' :
              gameState.animations?.enemyShield ? 'glow-shield' : ''
            }`}>
              <PlayerStatus 
                data={gameState.enemy} isEnemy={true} isShaking={gameState.animations?.enemyShake} 
                onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
              />
            </div>

            <SetlistBoard gameState={gameState} setSelectedCard={setSelectedCard} />

            {/* ★ 修正: プレイヤー自身のステータスの周りに光る枠を追加 */}
            <div className={`status-effect-wrapper ${
              gameState.animations?.playerDamage ? 'glow-damage' :
              gameState.animations?.playerHeal ? 'glow-heal' :
              gameState.animations?.playerShield ? 'glow-shield' : ''
            }`}>
              <PlayerStatus 
                data={gameState.player} isEnemy={false} isShaking={gameState.animations?.playerShake} 
                onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
              />
            </div>
          </div>

          <div style={{
            position: 'absolute', right: 'max(0.1rem)', bottom: '4%', display: 'flex', flexDirection: 'column',
            alignItems: 'flex-end', width: '13vw', minWidth: '100px', maxWidth: '120px', gap: '3.0vh', 
            zIndex: 100, pointerEvents: 'none'
          }}>
            {/* ★ 修正: ボルテージコンテナ全体が、ボルテージ獲得時に黄色く光るように変更 */}
            <div 
              className={`voltage-effect-wrapper ${gameState.animations?.playerVoltage || gameState.animations?.enemyVoltage ? 'glow-voltage' : ''}`}
              style={{ pointerEvents: 'auto', width: '100%' }}
            >
              <VoltageSidebar player={gameState.player} enemy={gameState.enemy} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.0vh', pointerEvents: 'none', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', pointerEvents: 'auto' }}>
                <button className="btn-special" onClick={handleSpSkill} disabled={!(gameState.isPlayerTurn && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating && !gameState.player.specialUsed)}>SP</button>
                <span style={{ fontSize: '0.75rem', color: '#000000', fontWeight: 'bold', textShadow: '0 1px 3px rgba(255, 255, 255, 0.9)', whiteSpace: 'nowrap', letterSpacing: '-0.5px' }}>ボルテージ＋４</span>
              </div>
              <div style={{ pointerEvents: 'auto', width: '100%' }}>
                <button 
                  className="end-turn-btn" onClick={endTurnPlayer} disabled={isEndTurnDisabled}
                  style={{ 
                    width: '100%', boxSizing: 'border-box', fontSize: '0.9rem', whiteSpace: 'nowrap', padding: '10px 0px', letterSpacing: '0px',
                    backgroundColor: isEndTurnDisabled ? '#9ca3af' : '#ef4444', color: isEndTurnDisabled ? '#f3f4f6' : '#ffffff',
                    cursor: isEndTurnDisabled ? 'not-allowed' : 'pointer', opacity: isEndTurnDisabled ? 0.7 : 1, transition: 'all 0.2s ease-in-out'
                  }}
                >END TURN</button>
              </div>
            </div>
          </div>

          <PlayerHand gameState={gameState} setSelectedCard={setSelectedCard} />
          {/* ... (残りのモーダル等はそのまま) ... */}
          {selectFromDiscard && (
            <div className="modal-overlay" style={{ zIndex: 3000 }}>
              <div className="modal-content discard-modal">
                <h2 className="discard-title">コスト{selectFromDiscard.maxCost}以下のカードを選んで使用</h2>
                <button className="close-btn" onClick={() => setSelectFromDiscard(null)}>×</button>
                <div className="discard-grid">
                  {gameState.player.discard.filter((c: any) => (Number(c.コスト) || 0) <= selectFromDiscard.maxCost && c.id !== selectFromDiscard.excludeId).map((card: any, idx: number) => (
                      <div key={idx} onClick={() => playCardFromDiscard(card)}><StandardCard card={card} /></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <CardPreviewModal selectedCard={selectedCard} gameState={gameState} playCard={playCard} setSelectedCard={setSelectedCard} />
          <DiscardModal showDiscard={showDiscard} setShowDiscard={setShowDiscard} gameState={gameState} setSelectedCard={setSelectedCard} />
          <BattleResultOverlay gameState={gameState} gameMode={gameMode} isHost={isHost} roomId={roomId} handleRematch={handleRematch} setScreen={setScreen} />
        </div>
      </div>
    </>
  );
};