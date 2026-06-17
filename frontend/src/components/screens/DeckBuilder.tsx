// src/components/screens/DeckBuilder.tsx
import React, { useState } from 'react';
import { Shield, Plus, Minus, Zap, HeartPulse, Swords, Smartphone } from 'lucide-react';
import cardDataRaw from '../../data.json';
import { getCardBackground, StandardCard } from '../ui/Card';
import { CardData } from '../../types';
import { DeckManager } from './DeckManager';

// JSONデータをCardData型として扱う
const cardData = cardDataRaw as unknown as CardData[];

interface DeckBuilderProps {
  gameMode: string | null;
  setScreen: (screen: string) => void;
  deckTotal: number;
  selectedUnit: string | null;
  setSelectedUnit: React.Dispatch<React.SetStateAction<string | null>>;
  manaCurve: number[];
  maxManaCount: number;
  handleDeckComplete: () => void;
  loadStarterDeck: () => void;
  deckList: Record<string, number>;
  setDeckList: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  availableCards: CardData[];
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
  removeCardFromDeck: (name: string) => void;
  addCardToDeck: (name: string) => void;
  user: any;
}

export const DeckBuilder: React.FC<DeckBuilderProps> = ({
  gameMode, setScreen, deckTotal, selectedUnit, setSelectedUnit,
  manaCurve, maxManaCount, handleDeckComplete, loadStarterDeck,
  deckList, setDeckList, availableCards, selectedCard, setSelectedCard,
  removeCardFromDeck, addCardToDeck,
  user
}) => {
  // ★ 追加：現在編集中のデッキ名を管理
  const [currentDeckName, setCurrentDeckName] = useState('新規デッキ');

  return (
    <>
      <div className="orientation-warning">
        <Smartphone size={64} />
        <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
        <p>このゲームは横画面専用です</p>
      </div>
      <div className="deck-builder-screen">
        <div className="deck-builder-sticky-header" style={{position:'sticky', top:0, background:'#fff', zIndex:1000, paddingBottom:'4px', borderBottom:'1px solid #eee'}}>
          <div className="deck-builder-header" style={{ padding: '0.2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <button className="back-btn" onClick={() => setScreen('home')} style={{ padding: '0.1rem 0.4rem' }}>← ホーム</button>
              <h1 className="deck-builder-title" style={{ fontSize: '0.9rem', margin: 0 }}>デッキ作成</h1>
            </div>

            {/* ★ 追加：右上にデッキ名入力欄と枚数カウンターを配置 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 'bold' }}>デッキ名:</span>
                <input 
                  value={currentDeckName} 
                  onChange={e => setCurrentDeckName(e.target.value)} 
                  maxLength={15}
                  style={{ border: 'none', background: 'transparent', fontSize: '0.8rem', fontWeight: 'bold', width: '120px', padding: 0, outline: 'none', color: '#333' }} 
                />
              </div>
              <div className="deck-counter" style={{ padding: '0.1rem 0.6rem', fontSize: '0.8rem' }}>{deckTotal} / 30</div>
            </div>
          </div>

          <div className="unit-select-area" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 1rem', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flexShrink: 0 }}>
              <span className="unit-label" style={{ fontSize: '0.75rem' }}>基本ユニット:</span>
              {['スリーズブーケ', 'DOLLCHESTRA', 'みらくらぱーく！'].map(unit => (
                <button
                  key={unit}
                  className={`unit-btn ${selectedUnit === unit ? 'active' : ''}`}
                  style={{ background: unit === 'スリーズブーケ' ? '#ffd6e0' : unit === 'DOLLCHESTRA' ? '#c5d8f0' : '#fff0b3', padding: '0.2rem 0.4rem', fontSize: '0.65rem' }}
                  onClick={() => { 
                    if (selectedUnit !== unit && deckTotal > 0) {
                      if (!window.confirm('基本ユニットを変更するとデッキがリセットされます。よろしいですか？')) return;
                    }
                    setSelectedUnit(unit); 
                    setDeckList({}); 
                  }}
                >
                  {unit}
                </button>
              ))}
            </div>

            <div className="mana-curve-wrapper" style={{ flex: 1, maxWidth: '180px', margin: '0' }}>
              <div className="mana-curve" style={{ height: '30px', padding: 0 }}>
                {manaCurve.map((count, i) => (
                  <div key={i} className="mana-bar-container" style={{ width: '12%' }}>
                    <div className="mana-bar-bg" style={{ background: '#e2e8f0' }}>
                      {count > 0 && <span className="mana-bar-count" style={{ fontSize: '0.5rem', bottom: '1px' }}>{count}</span>}
                      <div className="mana-bar-fill" style={{ height: `${maxManaCount > 0 ? (count / maxManaCount) * 100 : 0}%` }}></div>
                    </div>
                    <span className="mana-label" style={{ fontSize: '0.45rem', marginTop: '1px' }}>{i === 7 ? '7+' : i}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ flexShrink: 0 }}>
              <button
                className={`battle-start-btn ${deckTotal === 30 ? 'ready' : ''}`}
                disabled={deckTotal !== 30}
                onClick={handleDeckComplete}
                style={{ width: 'auto', padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}
              >
                {gameMode === 'cpu' ? 'バトル開始' : 'ロビーへ進む'}
              </button>
            </div>
          </div>

          {selectedUnit && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0 1rem 0.2rem' }}>
              <button className="starter-btn" onClick={loadStarterDeck} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                スターターデッキを読み込む
              </button>
              <button className="clear-btn" onClick={() => setDeckList({})} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                クリア
              </button>
              
              <DeckManager 
                user={user} 
                deckList={deckList} 
                setDeckList={setDeckList} 
                selectedUnit={selectedUnit} 
                setSelectedUnit={setSelectedUnit} 
                currentDeckName={currentDeckName}
                setCurrentDeckName={setCurrentDeckName}
              />
            </div>
          )}
        </div>

        {selectedUnit && (
            <div className="deck-builder-body">
              <div className="card-pool">
                <h3 className="pool-title">カードプール</h3>
                <div className="pool-list">
                  {availableCards.map((card, i) => {
                    const count = deckList[card.曲名] || 0;
                    const canAdd = count < 3 && deckTotal < 30;
                    return (
                      <div key={i} className="pool-card" style={{ background: getCardBackground(card.歌唱) }} onClick={() => setSelectedCard(card)}>
                        <div className="pool-card-info">
                           <span className="pool-card-cost">{card.コスト}</span>
                           <span className="pool-card-name">{card.曲名}</span>
                        </div>
                        <div className="pool-card-tags">
                           <span className="pool-card-unit">{card.歌唱 === '蓮ノ空女学院スクールアイドルクラブ' ? '蓮ノ空' : card.歌唱}</span>
                           <span className="pool-card-center">{card.センター}</span>
                        </div>
                        <div className="pool-card-stats">
                           {card.パワー && <span className="stat-power"><Swords size={10}/>{card.パワー}</span>}
                           {card.シールド && <span className="stat-shield"><Shield size={10}/>{card.シールド}</span>}
                           {card.ヒール && <span className="stat-heal"><HeartPulse size={10}/>{card.ヒール}</span>}
                           {card.ダメージ && <span className="stat-damage"><Zap size={10}/>{card.ダメージ}</span>}
                        </div>
                        <div className="pool-card-controls">
                           <button className="pool-btn remove" onClick={(e) => { e.stopPropagation(); removeCardFromDeck(card.曲名); }} disabled={count === 0}><Minus size={14}/></button>
                           <span className="pool-count">{count}</span>
                           <button className="pool-btn add" onClick={(e) => { e.stopPropagation(); addCardToDeck(card.曲名); }} disabled={!canAdd}><Plus size={14}/></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="deck-preview">
                <h3 className="pool-title">デッキ内容 ({deckTotal}/30)</h3>
                <div className="deck-list">
                  {Object.entries(deckList).sort((a, b) => {
                    const ca = cardData.find(c => c.曲名 === a[0]) as CardData;
                    const cb = cardData.find(c => c.曲名 === b[0]) as CardData;
                    return (Number(ca?.コスト) || 0) - (Number(cb?.コスト) || 0);
                  }).map(([name, count]) => {
                    const card = cardData.find(c => c.曲名 === name) as CardData;
                    return (
                      <div key={name} className="deck-item" style={{ borderLeft: `4px solid ${card ? (getCardBackground(card.歌唱) as string) === '#d0d0d0' ? '#999' : (getCardBackground(card.歌唱) as string).replace('linear-gradient(135deg, ', '').split(',')[0] : '#999'}` }} onClick={() => setSelectedCard(card)}>
                        <div className="deck-item-left">
                          <span className="deck-item-cost">{card?.コスト}</span>
                          <div className="deck-item-details">
                            <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                              <span className="deck-item-name">{name}</span>
                              <span style={{fontSize:'0.6rem', color:'#666'}}>{card?.センター}</span>
                            </div>
                            <div className="deck-item-stats">
                              {card?.パワー && <span className="stat-power"><Swords size={8}/>{card.パワー}</span>}
                              {card?.シールド && <span className="stat-shield"><Shield size={8}/>{card.シールド}</span>}
                              {card?.ヒール && <span className="stat-heal"><HeartPulse size={8}/>{card.ヒール}</span>}
                              {card?.ダメージ && <span className="stat-damage"><Zap size={8}/>{card.ダメージ}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="deck-item-right">
                          <span className="deck-item-count">×{count}</span>
                          <div style={{display: 'flex', gap: '4px'}}>
                            <button className="deck-item-remove" style={{background: '#38a169'}} onClick={(e) => { e.stopPropagation(); addCardToDeck(name); }} disabled={count >= 3 || deckTotal >= 30}><Plus size={12}/></button>
                            <button className="deck-item-remove" onClick={(e) => { e.stopPropagation(); removeCardFromDeck(name); }}><Minus size={12}/></button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {deckTotal === 0 && <div className="deck-empty">カードを追加してください</div>}
                </div>
              </div>
            </div>
          )}
        
        {selectedCard && (
          <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal-content" style={{maxWidth: '350px', transform: 'scale(1.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent', border: 'none', boxShadow: 'none'}}>
              <StandardCard card={selectedCard} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};