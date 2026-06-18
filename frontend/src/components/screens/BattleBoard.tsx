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
import { ActionControls } from '../ui/ActionControls';

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

  return (
    <>
      <div className="orientation-warning">
        <Smartphone size={64} />
        <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
        <p>このゲームは横画面専用です</p>
      </div>

      <div className="game-container">
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          {!gameState.battleResult && (
            <button
              onClick={handleSurrender}
              style={{
                position: 'absolute', top: '0px', right: '0px', display: 'flex', alignItems: 'center', gap: '4px',
                padding: '6px 14px', backgroundColor: 'rgba(220, 38, 38, 0.85)', color: 'white', fontSize: '0.85rem',
                fontWeight: 'bold', borderRadius: '9999px', border: 'none', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer', zIndex: 50, backdropFilter: 'blur(4px)', transition: 'all 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.85)'}
            >
              <Flag size={14} /><span>降参</span>
            </button>
          )}

          {gameState.turnBanner && <div className="turn-banner">{gameState.turnBanner}</div>}
          
          {gameState.enemyPlayedCard && !gameState.turnBanner && (
            <div className="enemy-played-popup">
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

          <VoltageSidebar player={gameState.player} enemy={gameState.enemy} />

          <div className="board-area">
            <PlayerStatus 
              data={gameState.enemy} isEnemy={true} isShaking={gameState.animations?.enemyShake} 
              onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
            />

            {/* ★修正：プレビュー表示のために setSelectedCard を渡す */}
            <SetlistBoard gameState={gameState} setSelectedCard={setSelectedCard} />

            <PlayerStatus 
              data={gameState.player} isEnemy={false} isShaking={gameState.animations?.playerShake} 
              onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
            />
          </div>

          <ActionControls gameState={gameState} handleSpSkill={handleSpSkill} endTurnPlayer={endTurnPlayer} />

          <PlayerHand gameState={gameState} setSelectedCard={setSelectedCard} />

          {selectFromDiscard && (
            <div className="modal-overlay" style={{ zIndex: 3000 }}>
              <div className="modal-content discard-modal">
                <h2 className="discard-title">コスト{selectFromDiscard.maxCost}以下のカードを選んで使用</h2>
                <button className="close-btn" onClick={() => setSelectFromDiscard(null)}>×</button>
                <div className="discard-grid">
                  {gameState.player.discard
                    .filter((c: any) => (Number(c.コスト) || 0) <= selectFromDiscard.maxCost && c.id !== selectFromDiscard.excludeId)
                    .map((card: any, idx: number) => (
                      <div key={idx} onClick={() => playCardFromDiscard(card)}>
                        <StandardCard card={card} />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <CardPreviewModal selectedCard={selectedCard} gameState={gameState} playCard={playCard} setSelectedCard={setSelectedCard} />
          
          {/* ★修正：プレビュー表示のために setSelectedCard を渡す */}
          <DiscardModal showDiscard={showDiscard} setShowDiscard={setShowDiscard} gameState={gameState} setSelectedCard={setSelectedCard} />
          <BattleResultOverlay gameState={gameState} gameMode={gameMode} isHost={isHost} roomId={roomId} handleRematch={handleRematch} setScreen={setScreen} />
        </div>
      </div>
    </>
  );
};