// src/components/ui/PlayerStatus.tsx
import React from 'react';
import { Shield, Zap, Layers, Trash2, Play } from 'lucide-react';
import { PlayerState } from '../../types';

interface PlayerStatusProps {
  data: PlayerState;
  isEnemy?: boolean;
  isShaking?: boolean;
  onDiscardClick: (owner: string) => void;
}

export const PlayerStatus: React.FC<PlayerStatusProps> = ({ data, isEnemy, isShaking, onDiscardClick }) => {
  const statusClass = isEnemy ? 'enemy-status' : 'self-status';
  const ownerStr = isEnemy ? 'enemy' : 'player';
  const displayName = data.name || (isEnemy ? '相手' : 'YOU');

  return (
    <div className={`player-status ${statusClass} ${isShaking ? 'shake' : ''}`}>
      
      <div className="player-info" style={{ alignItems: 'flex-start', marginBottom: '4px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, marginRight: '6px', lineHeight: 1.2 }}>
          <span className="player-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {displayName}
          </span>
          {data.baseUnit && (
            <span style={{ fontSize: '0.6rem', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>
              {data.baseUnit}
            </span>
          )}
        </div>
        <span className="hp-text" style={{ flexShrink: 0, lineHeight: 1.2 }}>{data.hp} / {data.maxHp}</span>
      </div>

      <div className="hp-bar-container">
        <div className={`hp-bar ${data.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (data.hp / data.maxHp) * 100)}%` }}></div>
      </div>

      <div className="deck-info" style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
           <span className="deck-stat" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Layers size={14}/> {data.deck?.length || 0}</span>
           <span className="deck-stat" onClick={() => onDiscardClick(ownerStr)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}><Trash2 size={14}/> {data.discard?.length || 0}</span>
           {data.shield > 0 && <span className="shield-badge" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2px' }}><Shield size={14}/> {data.shield}</span>}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
           {/* ★修正: data.buffs.turnCardsPlayed?.length || 0 とすることでundefinedエラーを回避します */}
           <span className="deck-stat" title="Played this turn" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
             <Play size={14}/> {data.buffs?.turnCardsPlayed?.length || 0}
           </span>
           <span className="deck-stat" title="Took damage count" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
             <Zap size={14} color="#a855f7"/> {data.buffs?.tookDamageCount || 0}
           </span>
        </div>
      </div>
      
    </div>
  );
};