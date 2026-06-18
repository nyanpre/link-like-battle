// src/components/ui/SetlistBoard.tsx
import React from 'react';
import { GameState } from '../../types';
import { StandardCard } from './Card'; // ★ getCardBackground等は削除し、StandardCardのみ使用

interface SetlistBoardProps {
  gameState: GameState;
  setSelectedCard?: (card: any) => void;
}

export const SetlistBoard: React.FC<SetlistBoardProps> = ({ gameState, setSelectedCard }) => {
  const { setlist } = gameState;

  return (
    <div className="setlist-container">
      {setlist.map((card: any, idx: number) => {
        const isLatest = idx === setlist.length - 1;
        const offset = (setlist.length - 1 - idx) * 10;
        
        return (
          <div 
            key={idx}
            className={`setlist-card ${isLatest ? 'latest' : ''}`}
            style={{
              transform: `translate(${offset}px, ${-offset}px) ${isLatest ? 'scale(1.2)' : 'scale(0.8)'}`,
              zIndex: idx,
              cursor: isLatest && setSelectedCard ? 'pointer' : 'default'
            }}
            onClick={() => {
              if (isLatest && setSelectedCard) {
                // ★ セットリストからは「プレビュー専用」として渡す
                setSelectedCard({ ...card, _isPreviewOnly: true });
              }
            }}
          >
            {isLatest ? (
              // ★ 中身を手札と完全に同じコンポーネントにする
              <div style={{ pointerEvents: 'none' }}>
                <StandardCard card={card} />
              </div>
            ) : (
              <StandardCard card={card} />
            )}
          </div>
        );
      })}
    </div>
  );
};