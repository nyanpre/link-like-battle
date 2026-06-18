import React from 'react';
import { Swords, Shield, HeartPulse, Zap } from 'lucide-react';
import { CardData } from '../../types';

// ★ これを上の行に追加（もし関数が同じファイル内になければインポートが必要です）
// もし getCardBackground がこのファイル内に記述されているなら、そのまま残してください。

export function getCardBackground(singing: string | undefined): string {
  if (!singing) return '#c8c8c8';
  if (singing.includes('スリーズブーケ') && singing.includes('DOLLCHESTRA') && singing.includes('みらくらぱーく')) {
    return 'linear-gradient(135deg, #ffd6e0, #c5d8f0, #fff0b3)';
  }
  if (singing.includes('スリーズブーケ')) return '#ffd6e0';
  if (singing.includes('DOLLCHESTRA')) return '#c5d8f0';
  if (singing.includes('みらくらぱーく')) return '#fff0b3';
  return '#EEEEEE';
}

export const StandardCard: React.FC<{ card: CardData }> = ({ card }) => {
  // cardがundefinedの場合のガード処理を追加
  if (!card) return null;

  return (
    <div className="card" style={{ background: getCardBackground(card.歌唱), margin: 0 }}>
      <div className="card-cost">{card.コスト}</div>
      <div className="card-title">{card.曲名}</div>
      <div className="card-tags">
        <span>{card.歌唱}</span>
        <span>{card.センター}</span>
      </div>
      <div className="card-stats">
        {card.パワー && <span className="stat-item stat-power"><Swords size={12}/>{card.パワー}</span>}
        {card.シールド && <span className="stat-item stat-shield"><Shield size={12}/>{card.シールド}</span>}
        {card.ヒール && <span className="stat-item stat-heal"><HeartPulse size={12}/>{card.ヒール}</span>}
        {card.ダメージ && <span className="stat-item stat-damage"><Zap size={12}/>{card.ダメージ}</span>}
      </div>
      <div className="card-effect">
        {card.効果1 && <div style={{marginBottom:'4px'}}>{card.効果1}</div>}
        {card.効果2 && <div>{card.効果2}</div>}
      </div>
    </div>
  );
};