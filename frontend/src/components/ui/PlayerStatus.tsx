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
      <div className="player-info">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="player-name">{displayName}</span>
          <span style={{ fontSize: '0.6rem', color: '#666' }}>{data.baseUnit}</span>
        </div>
        <span className="hp-text">{data.hp} / {data.maxHp}</span>
      </div>
      <div className="hp-bar-container">
        <div className={`hp-bar ${data.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (data.hp / data.maxHp) * 100)}%` }}></div>
      </div>
      <div className="deck-info" style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
           <span className="deck-stat"><Layers size={14}/> {data.deck.length}</span>
           <span className="deck-stat" onClick={() => onDiscardClick(ownerStr)} style={{ cursor: 'pointer' }}><Trash2 size={14}/> {data.discard.length}</span>
           {data.shield > 0 && <span className="shield-badge" style={{marginLeft:'auto'}}><Shield size={14}/> {data.shield}</span>}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
           <span className="deck-stat" title="Played this turn"><Play size={14}/> {data.buffs.turnCardsPlayed.length}</span>
           {/* ★ color を #ef4444 (赤) から #a855f7 (紫) に変更しました */}
           <span className="deck-stat" title="Took damage count"><Zap size={14} color="#a855f7"/> {data.buffs.tookDamageCount || 0}</span>
        </div>
      </div>
    </div>
  );
};