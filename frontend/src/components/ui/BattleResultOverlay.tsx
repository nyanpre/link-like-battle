// src/components/ui/BattleResultOverlay.tsx
import React from 'react';
import { deleteRoom } from '../../utils/firebase';
import { GameState } from '../../types'; // ★追加

interface BattleResultOverlayProps {
  gameState: GameState; // ★ any を変更
  gameMode: string | null;
  isHost: boolean;
  roomId: string;
  handleRematch: () => void;
  setScreen: (screen: string) => void;
}

export const BattleResultOverlay: React.FC<BattleResultOverlayProps> = ({ gameState, gameMode, isHost, roomId, handleRematch, setScreen }) => {
  if (!gameState.battleResult) return null;

  return (
    <div className="battle-end-overlay">
      <div className="battle-end-content">
        <div className="battle-result-text" style={{ color: gameState.battleResult === 'WIN' ? '#FFD700' : gameState.battleResult === 'LOSE' ? '#FF4500' : '#FFFFFF' }}>
          {gameState.battleResult === 'WIN' ? 'Victory!' : gameState.battleResult === 'LOSE' ? 'Defeat...' : 'Draw'}
        </div>
        <div className="battle-end-actions">
          {gameMode === 'cpu' && <button className="end-action-btn btn-rematch" onClick={handleRematch}>もう一度戦う</button>}
          <button className="end-action-btn btn-menu" onClick={() => {
            if (gameMode === 'online' && isHost && roomId) deleteRoom(roomId);
            setScreen('home');
          }}>
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
};