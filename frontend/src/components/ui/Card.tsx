// src/components/ui/Card.tsx
import React from 'react';
import { Swords, Shield } from 'lucide-react';
import { CardData } from '../../types'; // ★型をインポート

export function getCardBackground(singing: string) {
  if (!singing) return '#c8c8c8';
  if (singing.includes('スリーズブーケ') && singing.includes('DOLLCHESTRA') && singing.includes('みらくらぱーく')) {
    return 'linear-gradient(135deg, #ffd6e0, #c5d8f0, #fff0b3)';
  }
  if (singing.includes('スリーズブーケ') && !singing.includes('DOLLCHESTRA') && !singing.includes('みらくらぱーく')) {
    return '#ffd6e0';
  }
  if (singing.includes('DOLLCHESTRA')) {
    return '#c5d8f0';
  }
  if (singing.includes('みらくらぱーく')) {
    return '#fff0b3';
  }
  return '#EEEEEE';
}

export const StandardCard: React.FC<{ card: CardData }> = ({ card }) => (
  <div className="card-standard" style={{ background: getCardBackground(card?.歌唱) }}>
    <div className="card-cost">{card?.コスト}</div>
    <div className="card-title">{card?.曲名}</div>
    <div className="card-stats">
      {card?.パワー && <span className="stat-power"><Swords size={12}/>{card.パワー}</span>}
      {card?.シールド && <span className="stat-shield"><Shield size={12}/>{card.シールド}</span>}
    </div>
    <div className="card-effect">{card?.効果1}</div>
  </div>
);

export const MiniCard: React.FC<{ card: CardData, owner: string }> = ({ card, owner }) => (
  <div className="card-mini" style={{
    background: getCardBackground(card?.歌唱),
    border: `1px solid ${owner === 'player' ? '#0099aa' : '#cc3333'}`,
  }}>
    <div className="card-mini-title">{card?.曲名}</div>
    <div className="card-mini-center">{card?.センター}</div>
    <div className="card-mini-footer">Cost: {card?.コスト}</div>
    <div className="card-mini-effect">{card?.効果1}</div>
  </div>
);