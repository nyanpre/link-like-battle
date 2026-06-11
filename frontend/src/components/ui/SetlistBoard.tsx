// src/components/ui/SetlistBoard.tsx
import React from 'react';
import { MiniCard } from './Card';
import { GameState } from '../../types'; // ★追加

interface SetlistBoardProps {
  gameState: GameState; // ★ any を変更
}

export const SetlistBoard: React.FC<SetlistBoardProps> = ({ gameState }) => {
  if (gameState.enemyPlayedCard) return null;

  return (
    <div className="setlist-container">
      {gameState.setlist.slice(-5).map((log, index: number, arr: any[]) => (
        <div key={index} className={`setlist-card ${index === arr.length - 1 ? 'latest' : ''}`} style={{
          transform: `translate(${(index - arr.length + 1) * 30}px, 0) scale(${index === arr.length - 1 ? 1.2 : 0.8 + (index * 0.05)})`,
          zIndex: index
        }}>
          <MiniCard card={log.card} owner={log.owner} />
        </div>
      ))}
    </div>
  );
};