// src/components/ui/ActionControls.tsx
import React from 'react';
import { GameState } from '../../types'; // ★追加

interface ActionControlsProps {
  gameState: GameState; // ★ any を変更
  handleSpSkill: () => void;
  endTurnPlayer: () => void;
}

export const ActionControls: React.FC<ActionControlsProps> = ({ gameState, handleSpSkill, endTurnPlayer }) => {
  const { player, isPlayerTurn, turnBanner, isCoinFlipPhase } = gameState;
  const isSpDisabled = player.specialUsed || !isPlayerTurn || !!turnBanner || isCoinFlipPhase;
  const canEndTurn = isPlayerTurn && !turnBanner && !isCoinFlipPhase;

  return (
    <div className="action-container">
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
        <button 
          className="btn-special" 
          onClick={handleSpSkill} 
          disabled={isSpDisabled}
        >
          SP
        </button>
        <span style={{fontSize:'0.6rem', color:'#666', textAlign:'center', lineHeight:1.1, maxWidth:'65px', fontWeight:'700'}}>
          SPスキル<br/>ボルテージ+4
        </span>
      </div>
      
      {canEndTurn && (
         <button className="end-turn-btn" onClick={endTurnPlayer}>END TURN</button>
      )}
    </div>
  );
};