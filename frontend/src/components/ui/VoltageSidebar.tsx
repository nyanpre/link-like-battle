// src/components/ui/VoltageSidebar.tsx
import React from 'react';
import { PlayerState } from '../../types';

interface VoltageSidebarProps {
  player: PlayerState;
  enemy: PlayerState;
}

export const VoltageSidebar: React.FC<VoltageSidebarProps> = ({ player, enemy }) => {
  const drawVoltage = (max: number, current: number, color: string) => {
    const points = [];
    for (let i = 0; i < 10; i++) {
        const isActive = i < current; 
        const isUnlocked = i < max;   
        
        points.push(
          <div key={i} style={{
            width: '4.5px',      // ★ 丸ポチをさらに圧縮
            height: '12px',      // ★ 高さをさらに圧縮
            borderRadius: '1.5px', 
            background: isActive ? color : isUnlocked ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.12)',
            boxShadow: isActive ? `0 0 4px ${color}` : 'none',
            margin: '0 1px',     
            opacity: 1,          
            transition: 'all 0.2s'
          }}></div>
        );
    }
    return <div style={{ display: 'flex', alignItems: 'center' }}>{points}</div>;
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '10px', // ★ 隙間も圧縮
      alignItems: 'flex-end', 
      background: 'rgba(255, 255, 255, 0.3)', 
      padding: '8px 8px', // ★ 余白も圧縮してスリムに
      borderRadius: '10px', 
      backdropFilter: 'blur(6px)', 
      border: '1px solid rgba(0, 0, 0, 0.1)', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      
      {/* 敵のボルテージ */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', width: '100%' }}>
        {/* ★ 絶対改行させない(nowrap) ＋ フォントサイズと文字間隔を圧縮 */}
        <span style={{ margin: 0, color: '#000000', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap', letterSpacing: '-0.5px' }}>
          Enemy Voltage
        </span>
        <div style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
          <span style={{fontSize:'0.75rem', marginRight:'4px', color:'#000000', fontWeight:'bold', whiteSpace: 'nowrap'}}>
            {enemy.currentVoltage}/{enemy.maxVoltage}
          </span>
          {drawVoltage(enemy.maxVoltage, enemy.currentVoltage, '#ff77a9')}
        </div>
      </div>

      {/* 自分のボルテージ */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', width: '100%' }}>
        <span style={{ margin: 0, color: '#000000', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap', letterSpacing: '-0.5px' }}>
          Your Voltage
        </span>
        <div style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
          <span style={{fontSize:'0.75rem', marginRight:'4px', color:'#000000', fontWeight:'bold', whiteSpace: 'nowrap'}}>
            {player.currentVoltage}/{player.maxVoltage}
          </span>
          {drawVoltage(player.maxVoltage, player.currentVoltage, '#a78bfa')}
        </div>
      </div>

    </div>
  );
};