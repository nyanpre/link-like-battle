/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Shield, Plus, Minus, Zap, HeartPulse, Swords, Layers, Trash2, X, ChevronRight, Play, Smartphone, RefreshCw } from 'lucide-react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck } from './utils/gameLogic';
import { getCalculatedCost, applyCardEffects, drawCard as engineDrawCard } from './utils/battleEngine';
import cardData from './data.json';
import './index.css';

const VOLTAGE_FIRST = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const VOLTAGE_SECOND = [0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const DRAW_FIRST = (turn) => (turn % 2 === 1) ? 1 : 0;
const DRAW_SECOND = (turn) => (turn % 2 === 0) ? 1 : 0;

function getVoltage(isFirstPlayer, globalTurn) {
  const table = isFirstPlayer ? VOLTAGE_FIRST : VOLTAGE_SECOND;
  if (globalTurn >= table.length) return 10;
  return table[globalTurn];
}

function getDrawCount(isFirstPlayer, globalTurn) {
  return isFirstPlayer ? DRAW_FIRST(globalTurn) : DRAW_SECOND(globalTurn);
}

function getCardBackground(singing) {
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

function App() {
  const [screen, setScreen] = useState('title');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [deckList, setDeckList] = useState({});
  const [gameState, setGameState] = useState(null);
  const [damageTexts, setDamageTexts] = useState([]);
  const [showDiscard, setShowDiscard] = useState({ show: false, owner: null });
  const [selectedCard, setSelectedCard] = useState(null);
  
  const cpuTurnRef = useRef(null);

  const availableCards = selectedUnit ? getAvailableCards(selectedUnit) : [];
  const deckTotal = Object.values(deckList).reduce((s, n) => s + n, 0);

  const addCardToDeck = (cardName) => {
    if (deckTotal >= 30) return;
    const current = deckList[cardName] || 0;
    if (current >= 3) return;
    if (cardName === 'On your mark(102期Ver.)' && current >= 2) {
      alert('「On your mark(102期Ver.)」はデッキに2枚までしか入れられません。');
      return;
    }
    setDeckList(prev => ({ ...prev, [cardName]: current + 1 }));
  };

  const removeCardFromDeck = (cardName) => {
    const current = deckList[cardName] || 0;
    if (current <= 0) return;
    setDeckList(prev => {
      const next = { ...prev };
      next[cardName] = current - 1;
      if (next[cardName] <= 0) delete next[cardName];
      return next;
    });
  };

  const loadStarterDeck = () => {
    if (!selectedUnit) return;
    const starter = STARTER_DECKS[selectedUnit];
    const counts = {};
    starter.forEach(name => { counts[name] = (counts[name] || 0) + 1; });
    setDeckList(counts);
  };

  const startBattle = () => {
    if (deckTotal !== 30) return;
    const playerCardNames = [];
    Object.entries(deckList).forEach(([name, count]) => {
      for (let i = 0; i < count; i++) playerCardNames.push(name);
    });
    const playerDeck = buildDeckFromList(playerCardNames);
    const enemyDeck = generateCPUDeck();
    setGameState(createInitialState({ deck: playerDeck, unit: selectedUnit || 'スリーズブーケ' }, enemyDeck));
    setScreen('battle');
  };

  const manaCurve = [0, 0, 0, 0, 0, 0, 0, 0];
  Object.entries(deckList).forEach(([name, count]) => {
    const card = cardData.find(c => c.曲名 === name);
    const cost = Math.min(Number(card?.コスト) || 0, 7);
    manaCurve[cost] += count;
  });
  const maxManaCount = Math.max(1, ...manaCurve);

  useEffect(() => {
    if (!gameState) return;
    if (gameState.isCoinFlipPhase) {
      setTimeout(() => {
        const playerGoesFirst = Math.random() > 0.5;
        const playerVoltage = getVoltage(playerGoesFirst, 1);
        const enemyVoltage = getVoltage(!playerGoesFirst, 1);
        const playerDraw = getDrawCount(playerGoesFirst, 1);
        const enemyDraw = getDrawCount(!playerGoesFirst, 1);
        
        setGameState(prev => {
          if (!prev) return prev;
          const newPlayer = {
            ...prev.player,
            isFirstPlayer: playerGoesFirst,
            maxVoltage: playerVoltage,
            currentVoltage: playerVoltage,
            deck: [...prev.player.deck],
            hand: [...prev.player.hand],
            discard: [...prev.player.discard],
          };
          const newEnemy = {
            ...prev.enemy,
            isFirstPlayer: !playerGoesFirst,
            maxVoltage: enemyVoltage,
            currentVoltage: enemyVoltage,
            deck: [...prev.enemy.deck],
            hand: [...prev.enemy.hand],
            discard: [...prev.enemy.discard],
          };
          for (let i = 0; i < playerDraw; i++) {
            if (newPlayer.deck.length > 0) {
              const card = newPlayer.deck.shift();
              if (newPlayer.hand.length >= 8) newPlayer.discard.push(card);
              else newPlayer.hand.push(card);
            }
          }
          for (let i = 0; i < enemyDraw; i++) {
            if (newEnemy.deck.length > 0) {
              const card = newEnemy.deck.shift();
              if (newEnemy.hand.length >= 8) newEnemy.discard.push(card);
              else newEnemy.hand.push(card);
            }
          }
          return {
            ...prev,
            turn: 1,
            isCoinFlipPhase: false,
            isPlayerTurn: playerGoesFirst,
            turnBanner: playerGoesFirst ? "YOU FIRST!" : "CPU FIRST!",
            player: newPlayer,
            enemy: newEnemy,
          };
        });
      }, 2000);
    }
  }, [gameState?.isCoinFlipPhase]);

  useEffect(() => {
    if (!gameState) return;
    if (!gameState.isCoinFlipPhase && gameState.turnBanner) {
      setTimeout(() => {
        setGameState(prev => prev ? { ...prev, turnBanner: null } : prev);
      }, 2000);
    }
  }, [gameState?.turnBanner, gameState?.isCoinFlipPhase]);

  const addDamageText = (x, y, text, color = '#ef4444') => {
    const id = Math.random();
    setDamageTexts(prev => [...prev, { id, x, y, text, color }]);
    setTimeout(() => {
      setDamageTexts(prev => prev.filter(dt => dt.id !== id));
    }, 1000);
  };

  const triggerShake = (target) => {
    setGameState(prev => ({
      ...prev,
      animations: { ...prev.animations, [`${target}Shake`]: true }
    }));
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        animations: { ...prev.animations, [`${target}Shake`]: false }
      }));
    }, 500);
  };

  const drawCard = (userState, ownerStr) => {
    if (userState.deck.length === 0) {
      setTimeout(() => alert(ownerStr === 'player' ? "DECK OUT! YOU LOSE..." : "DECK OUT! YOU WIN!"), 500);
      userState.hp = 0; 
      return false;
    }
    const card = userState.deck.shift();
    if (userState.hand.length >= 8) {
      userState.discard.push(card);
    } else {
      userState.hand.push(card);
    }
    return true;
  };

  const startTurn = (isPlayer) => {
    setGameState(prev => {
      const nextGlobalTurn = prev.turn + 1;
      const prevTarget = isPlayer ? prev.enemy : prev.player;
      const newPrevTarget = {
        ...prevTarget,
        buffs: {
            ...prevTarget.buffs,
            damageImmune: false,
            kozueDrawActive: false,
            sayakaDmgActive: false,
            doubleNextEffect: false,
            onyourmark102Active: false,
            yupYupYupActive: false,
            damageReflectionActive: false,
            tookDamageThisTurn: false,
            tookDamageAmount: 0,
            turnCardsPlayed: []
        }
      };
      
      const target = isPlayer ? prev.player : prev.enemy;
      const amIFirstPlayer = target.isFirstPlayer === true;
      const newMax = getVoltage(amIFirstPlayer, nextGlobalTurn);
      const drawCount = getVoltage(amIFirstPlayer, nextGlobalTurn) === 0 ? 0 : getDrawCount(amIFirstPlayer, nextGlobalTurn);
      
      let newTarget = {
        ...target,
        maxVoltage: newMax,
        currentVoltage: newMax,
        deck: [...target.deck],
        hand: [...target.hand],
        discard: [...target.discard],
        buffs: {
          ...target.buffs,
          damageImmune: false,
          kozueDrawActive: false,
          sayakaDmgActive: false,
          doubleNextEffect: false,
          onyourmark102Active: false,
          yupYupYupActive: false,
          damageReflectionActive: false,
          tookDamageThisTurn: false,
          tookDamageAmount: 0,
          nextCardCostDown: 0,
          turnCardsPlayed: []
        }
      };

      if (newTarget.buffs.cannotDrawNextTurn) {
        newTarget.buffs.cannotDrawNextTurn = false;
        return {
          ...prev,
          isPlayerTurn: isPlayer,
          turnBanner: isPlayer ? "YOUR TURN (NO DRAW)" : "CPU TURN (NO DRAW)",
          setlist: [], 
          enemyPlayedCard: null,
          player: isPlayer ? newTarget : newPrevTarget,
          enemy: isPlayer ? newPrevTarget : newTarget,
          turn: nextGlobalTurn
        };
      }
      
      if (newPrevTarget.buffs.setEnemyVoltage3) {
        newTarget.currentVoltage = 3;
        newPrevTarget.buffs.setEnemyVoltage3 = false;
      }
      
      for (let i = 0; i < drawCount; i++) {
        drawCard(newTarget, isPlayer ? 'player' : 'enemy');
      }
      
      return {
        ...prev,
        isPlayerTurn: isPlayer,
        turnBanner: isPlayer ? "YOUR TURN" : "CPU TURN",
        setlist: [], 
        enemyPlayedCard: null,
        player: isPlayer ? newTarget : newPrevTarget,
        enemy: isPlayer ? newPrevTarget : newTarget,
        turn: nextGlobalTurn
      };
    });
  };

  const endTurnPlayer = () => {
    if (!gameState.isPlayerTurn || gameState.player.hp <= 0 || gameState.enemy.hp <= 0) return;

    if (gameState.player.buffs.yupYupYupActive) {
      setGameState(prev => {
        const next = { ...prev, player: { ...prev.player, hand: [...prev.player.hand], deck: [...prev.player.deck], discard: [...prev.player.discard] } };
        for (let i = 0; i < prev.player.currentVoltage; i++) {
          engineDrawCard(next.player);
        }
        return next;
      });
    }

    setGameState(prev => {
      const lastPlayed = prev.setlist[prev.setlist.length - 1];
      if (lastPlayed && lastPlayed.owner === 'player' && lastPlayed.card.曲名 === 'Dream Believers') {
        const deckIdx = prev.player.deck.findIndex(c => c.曲名 === 'Dream Believers');
        if (deckIdx !== -1) {
          const newPlayer = {
            ...prev.player,
            deck: [...prev.player.deck],
            hand: [...prev.player.hand]
          };
          const [dbCard] = newPlayer.deck.splice(deckIdx, 1);
          newPlayer.hand.push(dbCard);
          return { ...prev, player: newPlayer };
        }
      }
      return prev;
    });

    startTurn(false);
  };

  useEffect(() => {
    if (!gameState) return;
    if (
      gameState.isPlayerTurn &&
      !gameState.isCoinFlipPhase &&
      !gameState.turnBanner &&
      gameState.player.hp > 0 &&
      gameState.enemy.hp > 0
    ) {
      const hasPlayable = gameState.player.hand.some(
        c => gameState.player.currentVoltage >= getCalculatedCost(c, gameState.player)
      );
      const canUseSP = !gameState.player.specialUsed;
      if (!hasPlayable && !canUseSP) {
        const t = setTimeout(() => endTurnPlayer(), 800);
        return () => clearTimeout(t);
      }
    }
  }, [gameState?.isPlayerTurn, gameState?.player?.currentVoltage, gameState?.player?.hand?.length, gameState?.player?.specialUsed, gameState?.turnBanner, gameState?.isCoinFlipPhase]);

  useEffect(() => {
    if (!gameState) return;
    if (!gameState.isCoinFlipPhase && !gameState.isPlayerTurn && gameState.enemy.hp > 0 && gameState.player.hp > 0 && !gameState.turnBanner) {
      cpuTurnRef.current = setTimeout(() => {
        playEnemyTurn();
      }, 1500);
      return () => clearTimeout(cpuTurnRef.current);
    }
  }, [gameState?.isPlayerTurn, gameState?.enemy?.currentVoltage, gameState?.turnBanner, gameState?.isCoinFlipPhase]);

  const playEnemyTurn = () => {
    const { enemy } = gameState;
    const affordable = enemy.hand.filter(c => getCalculatedCost(c, enemy) <= enemy.currentVoltage);
    
    if (affordable.length > 0) {
      const cardToPlay = affordable[Math.floor(Math.random() * affordable.length)];
      playCard(cardToPlay, false);
    } else {
      if (enemy.buffs.yupYupYupActive) {
        setGameState(prev => {
          const next = { ...prev, enemy: { ...prev.enemy, hand: [...prev.enemy.hand], deck: [...prev.enemy.deck], discard: [...prev.enemy.discard] } };
          for (let i = 0; i < prev.enemy.currentVoltage; i++) {
            engineDrawCard(next.enemy);
          }
          return next;
        });
      }
      startTurn(true);
    }
  };

  const playCard = (card, isPlayer) => {
    setGameState(prev => {
      const newState = {
        ...prev,
        player: { ...prev.player, buffs: { ...prev.player.buffs, turnCardsPlayed: [...prev.player.buffs.turnCardsPlayed] }, hand: [...prev.player.hand], discard: [...prev.player.discard] },
        enemy: { ...prev.enemy, buffs: { ...prev.enemy.buffs, turnCardsPlayed: [...prev.enemy.buffs.turnCardsPlayed] }, hand: [...prev.enemy.hand], discard: [...prev.enemy.discard] },
        setlist: [...prev.setlist]
      };
      const user = isPlayer ? newState.player : newState.enemy;

      let cost = getCalculatedCost(card, user);
      if (user.currentVoltage < cost) return prev;
      
      user.currentVoltage -= cost;
      if (user.buffs.nextCardCostDown > 0) user.buffs.nextCardCostDown = 0;
      user.hand = user.hand.filter(c => c.id !== card.id);
      user.discard.push(card);
      newState.setlist.push({ card, owner: isPlayer ? 'player' : 'enemy' });
      user.buffs.turnCardsPlayed.push(card.曲名);
      
      newState.enemyPlayedCard = !isPlayer ? card : null;
      newState.isAnimating = true;
      return newState;
    });

    setTimeout(() => {
      setGameState(prevState => {
        if (!prevState.isAnimating) return prevState;
        
        const { newState, events } = applyCardEffects(prevState, card, isPlayer);
        
        events.forEach(ev => {
          if (ev.type === 'damage') {
            const isTargetPlayer = ev.data.target === 'player';
            addDamageText(50, isTargetPlayer ? window.innerHeight - 200 : 200, `-${ev.data.value}`);
            triggerShake(isTargetPlayer ? 'player' : 'enemy');
          }
          if (ev.type === 'damage_self') {
            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `-${ev.data.value}`);
            triggerShake(isPlayer ? 'player' : 'enemy');
          }
          if (ev.type === 'heal') {
            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+${ev.data.value}`, '#10b981');
          }
          if (ev.type === 'voltage') {
            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+⚡${ev.data.value}`, '#f59e0b');
          }
          if (ev.type === 'shield') {
            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+🛡${ev.data.value}`, '#3b82f6');
          }
          if (ev.type === 'draw') {
            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `Draw ${ev.data.name || ''}`, '#3b82f6');
          }
        });

        if (newState.forceTurnEnd) {
          setTimeout(() => {
            if (isPlayer) endTurnPlayer();
            else startTurn(true);
          }, 500);
        }

        newState.isAnimating = false;
        return newState;
      });
      
      setTimeout(() => {
          setGameState(current => {
              if (!current) return current;
              const userHp = isPlayer ? current.player.hp : current.enemy.hp;
              const targetHp = isPlayer ? current.enemy.hp : current.player.hp;
              
              let result = null;
              if (targetHp <= 0 && userHp <= 0) result = "DRAW";
              else if (targetHp <= 0) result = isPlayer ? "WIN" : "LOSE";
              else if (userHp <= 0) result = isPlayer ? "LOSE" : "WIN";

              return result ? { ...current, battleResult: result } : current;
          });
      }, 350);
    }, 300);
  };

  const handleRematch = () => {
    if (!gameState) return;
    const playerDeck = buildDeckFromList(gameState.player.originalDeckNames);
    const enemyDeck = generateCPUDeck();
    setGameState(createInitialState({ deck: playerDeck, unit: gameState.player.baseUnit }, enemyDeck));
    setDamageTexts([]);
  };

  const drawVoltage = (max, current) => {
    const points = [];
    for (let i = 0; i < 10; i++) {
        points.push(<div key={i} className={`voltage-point ${i < current ? 'active' : ''}`} style={i >= max ? {opacity: 0.1} : {}}></div>);
    }
    return points;
  };

  // ===== タイトル画面 =====
  if (screen === 'title') {
    return (
      <>
        <div className="orientation-warning">
          <Smartphone size={64} />
          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
          <p>このゲームは横画面専用です</p>
        </div>
        <div className="title-screen">
        <div className="title-content">
          <div className="title-logo">
            <span className="title-link">Link!</span>
            <span className="title-like">Like!</span>
            <span className="title-battle">Battle!</span>
          </div>
          <p className="title-subtitle">究極のスクールアイドルバトル</p>
          <button className="title-start-btn" onClick={() => { setSelectedUnit(null); setDeckList({}); setScreen('deckBuilder'); }}>
            <span>はじめる</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      </>
    );
  }

  // ===== デッキ作成画面 =====
  if (screen === 'deckBuilder') {
    return (
      <>
        <div className="orientation-warning">
          <Smartphone size={64} />
          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
          <p>このゲームは横画面専用です</p>
        </div>
        <div className="deck-builder-screen">
        <div className="deck-builder-sticky-header" style={{position:'sticky', top:0, background:'#fff', zIndex:1000, paddingBottom:'10px', borderBottom:'1px solid #eee'}}>
          <div className="deck-builder-header">
            <button className="back-btn" onClick={() => setScreen('title')}>← タイトルへ</button>
            <h1 className="deck-builder-title">デッキ作成</h1>
            <div className="deck-counter">{deckTotal} / 30</div>
          </div>

          {/* マナカーブ */}
          <div className="mana-curve-wrapper">
            <div className="mana-curve">
              {manaCurve.map((count, i) => (
                <div key={i} className="mana-bar-container">
                  <div className="mana-bar-bg">
                    {count > 0 && <span className="mana-bar-count">{count}</span>}
                    <div className="mana-bar-fill" style={{ height: `${maxManaCount > 0 ? (count / maxManaCount) * 100 : 0}%` }}></div>
                  </div>
                  <span className="mana-label">{i === 7 ? '7+' : i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ユニット選択 */}
          <div className="unit-select-area">
            <span className="unit-label">基本ユニット:</span>
            {['スリーズブーケ', 'DOLLCHESTRA', 'みらくらぱーく！'].map(unit => (
              <button
                key={unit}
                className={`unit-btn ${selectedUnit === unit ? 'active' : ''}`}
                style={{ background: unit === 'スリーズブーケ' ? '#ffd6e0' : unit === 'DOLLCHESTRA' ? '#c5d8f0' : '#fff0b3' }}
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

            {/* バトル開始ボタンをここに移動 (ヘッダーに収まるようサイズ調整) */}
            <button
              className={`battle-start-btn ${deckTotal === 30 ? 'ready' : ''}`}
              disabled={deckTotal !== 30}
              onClick={startBattle}
              style={{ width: 'auto', padding: '0.5rem 1.5rem', marginLeft: 'auto', fontSize: '1rem' }}
            >
              バトル開始
            </button>
          </div>

          {selectedUnit && (
            <div className="starter-deck-area">
              <button className="starter-btn" onClick={loadStarterDeck}>
                スターターデッキを読み込む
              </button>
              <button className="clear-btn" onClick={() => setDeckList({})}>クリア</button>
            </div>
          )}
        </div>

        {selectedUnit && (

            <div className="deck-builder-body">
              {/* カードプール */}
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

              {/* 現在のデッキ */}
              <div className="deck-preview">
                <h3 className="pool-title">デッキ内容 ({deckTotal}/30)</h3>
                
                <div className="deck-list">
                  {Object.entries(deckList).sort((a, b) => {
                    const ca = cardData.find(c => c.曲名 === a[0]);
                    const cb = cardData.find(c => c.曲名 === b[0]);
                    return (Number(ca?.コスト) || 0) - (Number(cb?.コスト) || 0);
                  }).map(([name, count]) => {
                    const card = cardData.find(c => c.曲名 === name);
                    return (
                      <div key={name} className="deck-item" style={{ borderLeft: `4px solid ${card ? getCardBackground(card.歌唱) === '#d0d0d0' ? '#999' : getCardBackground(card.歌唱).replace('linear-gradient(135deg, ', '').split(',')[0] : '#999'}` }} onClick={() => setSelectedCard(card)}>
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
            <div className="modal-content" style={{maxWidth: '350px', transform: 'scale(1.1)', display: 'flex', justifyContent: 'center', background: 'transparent', border: 'none', boxShadow: 'none'}}>
              <StandardCard card={selectedCard} />
            </div>
          </div>
        )}
      </div>
    </>
    );
  }

  // ===== バトル画面 =====
  if (screen === 'battle') {
    if (!gameState) return null;
    return (
      <>
        <div className="orientation-warning">
          <Smartphone size={64} />
          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>
          <p>このゲームは横画面専用です</p>
        </div>
        <div className="game-container">
        {gameState.turnBanner && <div className="turn-banner">{gameState.turnBanner}</div>}
        
        {gameState.enemyPlayedCard && !gameState.turnBanner && (
          <div className="enemy-played-popup">
              <StandardCard card={gameState.enemyPlayedCard} />
          </div>
        )}

        {damageTexts.map(dt => (
          <div key={dt.id} className="damage-text" style={{ left: `${dt.x}%`, top: `${dt.y}px`, color: dt.color }}>
            {dt.text}
          </div>
        ))}

        <div className="enemy-hand-container">
          {gameState.enemy.hand.map((_, i) => (
            <div key={i} className="enemy-card-back"></div>
          ))}
        </div>

        <div className="voltage-sidebar">
          <div className="voltage-group">
            <span className="voltage-label">Enemy Voltage</span>
            <div className="voltage-container" style={{ margin: 0 }}>
              <span style={{fontSize:'0.8rem', marginRight:'5px'}}>{gameState.enemy.currentVoltage}/{gameState.enemy.maxVoltage}</span>
              {drawVoltage(gameState.enemy.maxVoltage, gameState.enemy.currentVoltage)}
            </div>
          </div>
          <div className="voltage-group">
            <span className="voltage-label">Your Voltage</span>
            <div className="voltage-container" style={{ margin: 0, justifyContent: 'flex-end' }}>
              {drawVoltage(gameState.player.maxVoltage, gameState.player.currentVoltage)}
              <span style={{fontSize:'0.8rem', marginLeft:'5px'}}>{gameState.player.currentVoltage}/{gameState.player.maxVoltage}</span>
            </div>
          </div>
        </div>

        <div className="board-area">
          {/* Enemy Area */}
          <div className={`player-status enemy-status ${gameState.animations.enemyShake ? 'shake' : ''}`}>
            <div className="player-info">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="player-name">寮母さん</span>
                <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.enemy.baseUnit}</span>
              </div>
              <span className="hp-text">{gameState.enemy.hp} / {gameState.enemy.maxHp}</span>
            </div>
            <div className="hp-bar-container">
              <div className={`hp-bar ${gameState.enemy.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.enemy.hp / gameState.enemy.maxHp) * 100)}%` }}></div>
            </div>
          <div className="deck-info" style={{ marginTop: '2px', display: 'flex', gap: '8px', alignItems: 'center' }}>
             <span className="deck-stat"><Layers size={14}/> {gameState.enemy.deck.length}</span>
             <span className="deck-stat" onClick={() => setShowDiscard({ show: true, owner: 'enemy' })}><Trash2 size={14}/> {gameState.enemy.discard.length}</span>
             <span className="deck-stat" title="Played this turn"><Play size={14}/> {gameState.enemy.buffs.turnCardsPlayed.length}</span>
            {gameState.enemy.shield > 0 && <span className="shield-badge" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.enemy.shield}</span>}
          </div>
        </div>

        {/* Setlist Area (Center) */}
        {!gameState.enemyPlayedCard && (
            <div className="setlist-container">
            {gameState.setlist.slice(-5).map((log, index, arr) => (
                <div key={index} className={`setlist-card ${index === arr.length - 1 ? 'latest' : ''}`} style={{
                transform: `translate(${(index - arr.length + 1) * 30}px, 0) scale(${index === arr.length - 1 ? 1.2 : 0.8 + (index * 0.05)})`,
                zIndex: index
                }}>
                <MiniCard card={log.card} owner={log.owner} />
                </div>
            ))}
            </div>
        )}

        {/* Player Area */}
        <div className={`player-status self-status ${gameState.animations.playerShake ? 'shake' : ''}`}>
           <div className="player-info">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="player-name">YOU</span>
              <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.player.baseUnit}</span>
            </div>
            <span className="hp-text">{gameState.player.hp} / {gameState.player.maxHp}</span>
          </div>
          <div className="hp-bar-container">
            <div className={`hp-bar ${gameState.player.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.player.hp / gameState.player.maxHp) * 100)}%` }}></div>
          </div>
          <div className="deck-info" style={{ marginTop: '2px', display: 'flex', gap: '8px', alignItems: 'center' }}>
             <span className="deck-stat"><Layers size={14}/> {gameState.player.deck.length}</span>
             <span className="deck-stat" onClick={() => setShowDiscard({ show: true, owner: 'player' })}><Trash2 size={14}/> {gameState.player.discard.length}</span>
             <span className="deck-stat" title="Played this turn"><Play size={14}/> {gameState.player.buffs.turnCardsPlayed.length}</span>
            {gameState.player.shield > 0 && <span className="shield-badge" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.player.shield}</span>}
          </div>
        </div>
      </div>

      <div className="action-container">
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
          <button className="btn-special" onClick={() => {
              if(!gameState.player.specialUsed && gameState.isPlayerTurn && !gameState.turnBanner) {
                  setGameState(prev => {
                      const newVoltage = Math.min(prev.player.maxVoltage, prev.player.currentVoltage + 4);
                      return {
                          ...prev,
                          player: { ...prev.player, currentVoltage: newVoltage, specialUsed: true }
                      };
                  });
              }
          }} disabled={gameState.player.specialUsed || !gameState.isPlayerTurn || !!gameState.turnBanner || gameState.isCoinFlipPhase}>
            SP
          </button>
          <span style={{fontSize:'0.6rem', color:'#666', textAlign:'center', lineHeight:1.1, maxWidth:'65px', fontWeight:'700'}}>SPスキル<br/>ボルテージ+4</span>
        </div>
        
        {gameState.isPlayerTurn && !gameState.turnBanner && !gameState.isCoinFlipPhase && (
            <button className="end-turn-btn" onClick={endTurnPlayer}>END TURN</button>
        )}
      </div>

      {/* Card Preview */}
      {selectedCard && (
        <div className="card-preview-overlay" onClick={() => setSelectedCard(null)}>
          <div className="card-preview" style={{ background: getCardBackground(selectedCard.歌唱) }} onClick={e => e.stopPropagation()}>
            <div className="card-cost" style={{top:'-12px', left:'-12px', width:'44px', height:'44px', fontSize:'1.4rem'}}>{getCalculatedCost(selectedCard, gameState.player)}</div>
            <div className="card-title" style={{fontSize:'1.4rem'}}>{selectedCard.曲名}</div>
            <div className="card-tags" style={{fontSize:'0.85rem'}}>
              <span>{selectedCard.歌唱}</span>
              <span>{selectedCard.センター}</span>
            </div>
            <div className="card-stats" style={{fontSize:'0.95rem', padding:'8px'}}>
              {selectedCard.パワー && <span className="stat-item stat-power"><Swords size={16}/>{selectedCard.パワー}</span>}
              {selectedCard.シールド && <span className="stat-item stat-shield"><Shield size={16}/>{selectedCard.シールド}</span>}
              {selectedCard.ヒール && <span className="stat-item stat-heal"><HeartPulse size={16}/>{selectedCard.ヒール}</span>}
              {selectedCard.ダメージ && <span className="stat-item stat-damage"><Zap size={16}/>{selectedCard.ダメージ}</span>}
            </div>
            <div className="card-effect" style={{fontSize:'0.95rem', padding:'12px'}}>
              {selectedCard.効果1 && <div style={{marginBottom:'6px'}}>{selectedCard.効果1}</div>}
              {selectedCard.効果2 && <div>{selectedCard.効果2}</div>}
            </div>
            <div style={{display:'flex', gap:'8px', marginTop:'10px'}}>
              {gameState.isPlayerTurn && gameState.player.currentVoltage >= getCalculatedCost(selectedCard, gameState.player) && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating && (
                <button className="preview-play-btn" onClick={() => { playCard(selectedCard, true); setSelectedCard(null); }}>使用する</button>
              )}
              <button className="preview-close-btn" onClick={() => setSelectedCard(null)}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      <div className="hand-container">
        {gameState.player.hand.map((card) => {
          const calcCost = getCalculatedCost(card, gameState.player);
          const canPlay = gameState.isPlayerTurn && gameState.player.currentVoltage >= calcCost && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating;
          return (
            <div 
                key={card.id} 
                className="card" 
                style={{ 
                    background: getCardBackground(card.歌唱),
                    opacity: canPlay ? 1 : 0.4,
                    cursor: 'pointer',
                    filter: canPlay ? 'none' : 'grayscale(30%)'
                }}
                onClick={() => setSelectedCard(card)}
            >
              <div className="card-cost">{calcCost}</div>
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
        })}
      </div>

      {/* Discard Modal */}
      {showDiscard.show && (
        <div className="modal-overlay" onClick={() => setShowDiscard({ show: false, owner: null })}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 style={{fontFamily:'Outfit', margin: 0}}>{showDiscard.owner === 'player' ? 'YOUR' : 'CPU'} DISCARD PILE</h2>
              <button className="modal-close" onClick={() => setShowDiscard({ show: false, owner: null })}><X size={20}/></button>
            </div>
            <div className="modal-grid">
              {gameState[showDiscard.owner].discard.map((card, i) => (
                <StandardCard key={i} card={card} />
              ))}
              {gameState[showDiscard.owner].discard.length === 0 && <div style={{color:'#666'}}>No cards in discard pile.</div>}
            </div>
          </div>
        </div>
      )}

      {/* Battle End Overlay */}
      {gameState.battleResult && (
        <div className="battle-end-overlay">
          <div className="battle-end-content">
            <div className="battle-result-text" style={{ color: gameState.battleResult === 'WIN' ? '#FFD700' : gameState.battleResult === 'LOSE' ? '#FF4500' : '#FFFFFF' }}>
              {gameState.battleResult === 'WIN' ? 'Victory!' : gameState.battleResult === 'LOSE' ? 'Defeat...' : 'Draw'}
            </div>
            <div className="battle-end-actions">
              <button className="end-action-btn btn-rematch" onClick={handleRematch}>もう一度戦う</button>
              <button className="end-action-btn btn-menu" onClick={() => setScreen('deckBuilder')}>デッキ選択に戻る</button>
            </div>
          </div>
        </div>
      )}

    </div>
    </>
    );
  }

  return null;
}

const StandardCard = ({ card }) => (
    <div className="card-standard" style={{ background: getCardBackground(card.歌唱) }}>
        <div className="card-cost">{card.コスト}</div>
        <div className="card-title">{card.曲名}</div>
        <div className="card-stats">
            {card.パワー && <span className="stat-power"><Swords size={12}/>{card.パワー}</span>}
            {card.シールド && <span className="stat-shield"><Shield size={12}/>{card.シールド}</span>}
        </div>
        <div className="card-effect">{card.効果1}</div>
    </div>
);

const MiniCard = ({ card, owner }) => (
  <div className="card-mini" style={{
    background: getCardBackground(card.歌唱),
    border: `1px solid ${owner === 'player' ? '#0099aa' : '#cc3333'}`,
  }}>
    <div className="card-mini-title">{card.曲名}</div>
    <div className="card-mini-center">{card.センター}</div>
    <div className="card-mini-footer">Cost: {card.コスト}</div>
    <div className="card-mini-effect">{card.効果1}</div>
  </div>
);

export default App;
