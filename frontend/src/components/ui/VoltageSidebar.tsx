// src/components/ui/VoltageSidebar.tsx
import React from 'react';
import { PlayerState } from '../../types'; // ★型をインポート

interface VoltageSidebarProps {
  player: PlayerState; // ★ any を PlayerState に変更
  enemy: PlayerState;  // ★ any を PlayerState に変更
}

export const VoltageSidebar: React.FC<VoltageSidebarProps> = ({ player, enemy }) => {
  const drawVoltage = (max: number, current: number) => {
    const points = [];
    for (let i = 0; i < 10; i++) {
        points.push(<div key={i} className={`voltage-point ${i < current ? 'active' : ''}`} style={i >= max ? {opacity: 0.1} : {}}></div>);
    }
    return points;
  };

  return (
    <div className="voltage-sidebar">
      <div className="voltage-group">
        <span className="voltage-label">Enemy Voltage</span>
        <div className="voltage-container" style={{ margin: 0 }}>
          <span style={{fontSize:'0.8rem', marginRight:'5px'}}>{enemy.currentVoltage}/{enemy.maxVoltage}</span>
          {drawVoltage(enemy.maxVoltage, enemy.currentVoltage)}
        </div>
      </div>
      <div className="voltage-group">
        <span className="voltage-label">Your Voltage</span>
        <div className="voltage-container" style={{ margin: 0, justifyContent: 'flex-end' }}>
          {drawVoltage(player.maxVoltage, player.currentVoltage)}
          <span style={{fontSize:'0.8rem', marginLeft:'5px'}}>{player.currentVoltage}/{player.maxVoltage}</span>
        </div>
      </div>
    </div>
  );
};