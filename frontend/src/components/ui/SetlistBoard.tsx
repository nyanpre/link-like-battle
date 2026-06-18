import React, { useState } from 'react';
import { GameState } from '../../types';
import { StandardCard } from './Card'; // これが最強の解決策です

interface SetlistBoardProps {
  gameState: GameState;
  setSelectedCard?: (card: any) => void;
}

export const SetlistBoard: React.FC<SetlistBoardProps> = ({ gameState, setSelectedCard }) => {
  const { setlist } = gameState;
  const [showModal, setShowModal] = useState(false);

  if (!setlist || setlist.length === 0) return null;

  return (
    <>
      {/* 盤面中央のスタック */}
      <div 
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130px', height: '182px', cursor: 'pointer', zIndex: 100 }}
        onClick={() => setShowModal(true)}
      >
        {setlist.map((card: any, idx: number) => {
          const offset = Math.min(idx * 3, 12);
          const isLatest = idx === setlist.length - 1;
          return (
            <div key={idx} style={{ position: 'absolute', top: `${offset}px`, left: `${offset}px`, zIndex: idx, filter: isLatest ? 'none' : 'brightness(0.85)' }}>
              <StandardCard card={card} />
            </div>
          );
        })}
      </div>

      {/* 一覧モーダル */}
      {showModal && (
        <div className="modal-overlay" style={{ zIndex: 3000 }} onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>使用したカード ({setlist.length}枚)</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>閉じる</button>
            </div>
            <div className="modal-grid">
              {[...setlist].reverse().map((card: any, idx: number) => (
                <div key={idx} onClick={() => { if (setSelectedCard) setSelectedCard({ ...card, _isPreviewOnly: true }); }}>
                  <StandardCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};