/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Shield, Plus, Minus, Zap, HeartPulse, Swords, Layers, Trash2, X, ChevronRight, Play, Smartphone, RefreshCw } from 'lucide-react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck } from './utils/gameLogic';
import { getCalculatedCost, applyCardEffects, drawCard as engineDrawCard } from './utils/battleEngine';
import cardData from './data.json';
import './index.css';

// ターン表.csv準拠: グローバルターン番号(1-indexed)でボルテージとドローを管理
const VOLTAGE_FIRST = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const VOLTAGE_SECOND = [0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
// 先攻ドロー: 奇数ターン(1,3,5,...)で1枚、偶数ターンで0
// 後攻ドロー: 偶数ターン(2,4,6,...)で1枚、奇数ターンで0
const DRAW_FIRST = (turn) => (turn % 2 === 1) ? 1 : 0;  // 先攻は奇数ターンにドロー
const DRAW_SECOND = (turn) => (turn % 2 === 0) ? 1 : 0; // 後攻は偶数ターンにドロー

function getVoltage(isFirstPlayer, globalTurn) {
  const table = isFirstPlayer ? VOLTAGE_FIRST : VOLTAGE_SECOND;
  if (globalTurn >= table.length) return 10;
  return table[globalTurn];
}

function getDrawCount(isFirstPlayer, globalTurn) {
  return isFirstPlayer ? DRAW_FIRST(globalTurn) : DRAW_SECOND(globalTurn);
}

// 歌唱ユニットに基づくカード背景色（不透過）
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
  // 蓮ノ空女学院スクールアイドルクラブ など
  return '#EEEEEE';
}


function App() {
  const [screen, setScreen] = useState('title'); // 'title' | 'deckBuilder' | 'battle'
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [deckList, setDeckList] = useState({}); // { cardName: count }
  const [gameState, setGameState] = useState(null);
  const [damageTexts, setDamageTexts] = useState([]);
  const [showDiscard, setShowDiscard] = useState({ show: false, owner: null });
  const [selectedCard, setSelectedCard] = useState(null);
  
  const cpuTurnRef = useRef(null);

  // ===== デッキビルダー用ロジック =====
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
    // デッキリストをカード名配列に展開
    const playerCardNames = [];
    Object.entries(deckList).forEach(([name, count]) => {
      for (let i = 0; i < count; i++) playerCardNames.push(name);
    });
    const playerDeck = buildDeckFromList(playerCardNames);
    const enemyDeck = generateCPUDeck();
    setGameState(createInitialState({ deck: playerDeck, unit: selectedUnit || 'スリーズブーケ' }, enemyDeck));
    setScreen('battle');
  };

  // マナカーブの計算
  const manaCurve = [0, 0, 0, 0, 0, 0, 0, 0]; // 0〜6, 7以上
  Object.entries(deckList).forEach(([name, count]) => {
    const card = cardData.find(c => c.曲名 === name);
    const cost = Math.min(Number(card?.コスト) || 0, 7);
    manaCurve[cost] += count;
  });
  const maxManaCount = Math.max(1, ...manaCurve);

  // ===== バトル画面 =====
  // (Hooks must be before any returns - add null guards inside)

  // コイントスフェーズの処理
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
  }, [gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Turn Start logic Banner Clear
  useEffect(() => {
    if (!gameState) return;
    if (!gameState.isCoinFlipPhase && gameState.turnBanner) {
      setTimeout(() => {
        setGameState(prev => prev ? { ...prev, turnBanner: null } : prev);
      }, 2000);
    }
  }, [gameState?.turnBanner, gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps

  const addDamageText = (x, y, text, color = '#ef4444') => {
    const id = Math.random();
    setDamageTexts(prev => [...prev, { id, x, y, text, color }]);
    setTimeout(() => {
      setDamageTexts(prev => prev.filter(dt => dt.id !== id));
    }, 1000);
  };

  const triggerShake = (target) => {
    setGameState(prev => ({\n      ...prev,\n      animations: { ...prev.animations, [`${target}Shake`]: true }\n    }));
    setTimeout(() => {
      setGameState(prev => ({\n        ...prev,\n        animations: { ...prev.animations, [`${target}Shake`]: false }\n      }));
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

  // (discardRandomFromHand removed as it was unused)

  const startTurn = (isPlayer) => {
    setGameState(prev => {
      // グローバルターンを進める
      const nextGlobalTurn = prev.turn + 1;

      // ターン終了時処理 (前ターンのバフリセット)
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
      
      // ターン表.csv準拠: グローバルターン番号でテーブル参照
      const newMax = getVoltage(amIFirstPlayer, nextGlobalTurn);
      const drawCount = getDrawCount(amIFirstPlayer, nextGlobalTurn);
      
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

      // デバフ: ドロー禁止
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
      
      // デバフ: 前ターンに「次の相手のターン、相手のボルテージが3になる」を使われていたら
      if (newPrevTarget.buffs.setEnemyVoltage3) {
        newTarget.currentVoltage = 3;
        newPrevTarget.buffs.setEnemyVoltage3 = false;
      }
      
      // テーブルに基づくドロー
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
    if (!gameState.isPlayerTurn || gameState.player.hp <= 0 || gameState.enemy.hp <= 0) return;\n\n    // Yup! Yup! Yup! ドロー\n    if (gameState.player.buffs.yupYupYupActive) {\n      setGameState(prev => {\n        const next = { ...prev, player: { ...prev.player, hand: [...prev.player.hand], deck: [...prev.player.deck], discard: [...prev.player.discard] } };\n        for (let i = 0; i < prev.player.currentVoltage; i++) {\n          engineDrawCard(next.player);\n        }\n        return next;\n      });\n    }\n\n    // 「このターンの最後に使用した時、Dream Believersをドローする」チェック\n    setGameState(prev => {\n      const lastPlayed = prev.setlist[prev.setlist.length - 1];\n      if (lastPlayed && lastPlayed.owner === 'player' && lastPlayed.card.曲名 === 'Dream Believers') {\n        const deckIdx = prev.player.deck.findIndex(c => c.曲名 === 'Dream Believers');\n        if (deckIdx !== -1) {\n          const newPlayer = {\n            ...prev.player,\n            deck: [...prev.player.deck],\n            hand: [...prev.player.hand]\n          };\n          const [dbCard] = newPlayer.deck.splice(deckIdx, 1);\n          newPlayer.hand.push(dbCard);\n          return { ...prev, player: newPlayer };\n        }\n      }\n      return prev;\n    });\n\n    startTurn(false);\n  };\n\n  // 使えるカードがなくなったら自動ターンエンド（SPも使用済みの場合）\n  useEffect(() => {\n    if (!gameState) return;\n    if (\n      gameState.isPlayerTurn &&\n      !gameState.isCoinFlipPhase &&\n      !gameState.turnBanner &&\n      gameState.player.hp > 0 &&\n      gameState.enemy.hp > 0\n    ) {\n      const hasPlayable = gameState.player.hand.some(\n        c => gameState.player.currentVoltage >= getCalculatedCost(c, gameState.player)\n      );\n      const canUseSP = !gameState.player.specialUsed;\n      if (!hasPlayable && !canUseSP) {\n        const t = setTimeout(() => endTurnPlayer(), 800);\n        return () => clearTimeout(t);\n      }\n    }\n  }, [gameState?.isPlayerTurn, gameState?.player?.currentVoltage, gameState?.player?.hand?.length, gameState?.player?.specialUsed, gameState?.turnBanner, gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps\n\n  // Enemy CPU logic\n  useEffect(() => {\n    if (!gameState) return;\n    if (!gameState.isCoinFlipPhase && !gameState.isPlayerTurn && gameState.enemy.hp > 0 && gameState.player.hp > 0 && !gameState.turnBanner) {\n      cpuTurnRef.current = setTimeout(() => {\n        playEnemyTurn();\n      }, 1500);\n      return () => clearTimeout(cpuTurnRef.current);\n    }\n  }, [gameState?.isPlayerTurn, gameState?.enemy?.currentVoltage, gameState?.turnBanner, gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps\n\n  const playEnemyTurn = () => {\n    const { enemy } = gameState;\n    const affordable = enemy.hand.filter(c => getCalculatedCost(c, enemy) <= enemy.currentVoltage);\n    \n    if (affordable.length > 0) {\n      const cardToPlay = affordable[Math.floor(Math.random() * affordable.length)];\n      playCard(cardToPlay, false);\n    } else {\n      // Yup! Yup! Yup! ドロー\n      if (enemy.buffs.yupYupYupActive) {\n        setGameState(prev => {\n          const next = { ...prev, enemy: { ...prev.enemy, hand: [...prev.enemy.hand], deck: [...prev.enemy.deck], discard: [...prev.enemy.discard] } };\n          for (let i = 0; i < prev.enemy.currentVoltage; i++) {\n            engineDrawCard(next.enemy);\n          }\n          return next;\n        });\n      }\n      startTurn(true);\n    }\n  };\n\n  const playCard = (card, isPlayer) => {\n    setGameState(prev => {\n      const newState = {\n        ...prev,\n        player: { ...prev.player, buffs: { ...prev.player.buffs, turnCardsPlayed: [...prev.player.buffs.turnCardsPlayed] }, hand: [...prev.player.hand], discard: [...prev.player.discard] },\n        enemy: { ...prev.enemy, buffs: { ...prev.enemy.buffs, turnCardsPlayed: [...prev.enemy.buffs.turnCardsPlayed] }, hand: [...prev.enemy.hand], discard: [...prev.enemy.discard] },\n        setlist: [...prev.setlist]\n      };\n      const user = isPlayer ? newState.player : newState.enemy;\n\n      // --- コスト計算 ---\n      let cost = getCalculatedCost(card, user);\n      if (user.currentVoltage < cost) return prev;\n      \n      user.currentVoltage -= cost;\n      if (user.buffs.nextCardCostDown > 0) user.buffs.nextCardCostDown = 0;\n      user.hand = user.hand.filter(c => c.id !== card.id);\n      user.discard.push(card);\n      newState.setlist.push({ card, owner: isPlayer ? 'player' : 'enemy' });\n      user.buffs.turnCardsPlayed.push(card.曲名);\n      \n      newState.enemyPlayedCard = !isPlayer ? card : null;\n      newState.isAnimating = true;\n      return newState;\n    });\n\n    setTimeout(() => {\n      setGameState(prevState => {\n        if (!prevState.isAnimating) return prevState;\n        \n        const { newState, events } = applyCardEffects(prevState, card, isPlayer);\n        \n        // UI側の演出（damageText, shake）を処理\n        events.forEach(ev => {\n          if (ev.type === 'damage') {\n            const isTargetPlayer = ev.data.target === 'player';\n            addDamageText(50, isTargetPlayer ? window.innerHeight - 200 : 200, `-${ev.data.value}`);\n            triggerShake(isTargetPlayer ? 'player' : 'enemy');\n          }\n          if (ev.type === 'damage_self') {\n            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `-${ev.data.value}`);\n            triggerShake(isPlayer ? 'player' : 'enemy');\n          }\n          if (ev.type === 'heal') {\n            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+${ev.data.value}`, '#10b981');\n          }\n          if (ev.type === 'voltage') {\n            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+⚡${ev.data.value}`, '#f59e0b');\n          }\n          if (ev.type === 'shield') {\n            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `+🛡${ev.data.value}`, '#3b82f6');\n          }\n          if (ev.type === 'draw') {\n            addDamageText(50, isPlayer ? window.innerHeight - 200 : 200, `Draw ${ev.data.name || ''}`, '#3b82f6');\n          }\n        });\n\n        // 強制ターン終了の処理\n        if (newState.forceTurnEnd) {\n          setTimeout(() => {\n            if (isPlayer) endTurnPlayer();\n            else startTurn(true);\n          }, 500);\n        }\n\n        newState.isAnimating = false;\n        return newState;\n      });\n      \n      // 勝敗チェック\n      setTimeout(() => {\n          setGameState(current => {\n              if (!current) return current;\n              const userHp = isPlayer ? current.player.hp : current.enemy.hp;\n              const targetHp = isPlayer ? current.enemy.hp : current.player.hp;\n              \n              let result = null;\n              if (targetHp <= 0 && userHp <= 0) result = \"DRAW\";\n              else if (targetHp <= 0) result = isPlayer ? \"WIN\" : \"LOSE\";\n              else if (userHp <= 0) result = isPlayer ? \"LOSE\" : \"WIN\";\n\n              return result ? { ...current, battleResult: result } : current;\n          });\n      }, 350);\n    }, 300);\n  };\n\n  const handleRematch = () => {\n    if (!gameState) return;\n    // リマッチ: 現在のデッキ構成で初期状態に戻す\n    const playerDeck = buildDeckFromList(gameState.player.originalDeckNames);\n    const enemyDeck = generateCPUDeck();\n    setGameState(createInitialState({ deck: playerDeck, unit: gameState.player.baseUnit }, enemyDeck));\n    setDamageTexts([]);\n  };\n\n  const drawVoltage = (max, current) => {\n    const points = [];\n    for (let i = 0; i < 10; i++) {\n        points.push(<div key={i} className={`voltage-point ${i < current ? 'active' : ''}`} style={i >= max ? {opacity: 0.1} : {}}></div>);\n    }\n    return points;\n  };\n\n  // ===== タイトル画面 =====\n  if (screen === 'title') {\n    return (\n      <>\n        <div className=\"orientation-warning\">\n          <Smartphone size={64} />\n          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>\n          <p>このゲームは横画面専用です</p>\n        </div>\n        <div className=\"title-screen\">\n        <div className=\"title-content\">\n          <div className=\"title-logo\">\n            <span className=\"title-link\">Link!</span>\n            <span className=\"title-like\">Like!</span>\n            <span className=\"title-battle\">Battle!</span>\n          </div>\n          <p className=\"title-subtitle\">究極のスクールアイドルバトル</p>\n          <button className=\"title-start-btn\" onClick={() => { setSelectedUnit(null); setDeckList({}); setScreen('deckBuilder'); }}>\n            <span>はじめる</span>\n            <ChevronRight size={24} />\n          </button>\n        </div>\n      </div>\n      </>\n    );\n  }\n\n  // ===== デッキ作成画面 =====\n  if (screen === 'deckBuilder') {\n    return (\n      <>\n        <div className=\"orientation-warning\">\n          <Smartphone size={64} />\n          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>\n          <p>このゲームは横画面専用です</p>\n        </div>\n        <div className=\"deck-builder-screen\">\n        <div className=\"deck-builder-sticky-header\" style={{position:'sticky', top:0, background:'#fff', zIndex:1000, paddingBottom:'10px', borderBottom:'1px solid #eee'}}>\n          <div className=\"deck-builder-header\">\n            <button className=\"back-btn\" onClick={() => setScreen('title')}>← タイトルへ</button>\n            <h1 className=\"deck-builder-title\">デッキ作成</h1>\n            <div className=\"deck-counter\">{deckTotal} / 30</div>\n          </div>\n\n          {/* マナカーブ */}\n          <div className=\"mana-curve-wrapper\">\n            <div className=\"mana-curve\">\n              {manaCurve.map((count, i) => (\n                <div key={i} className=\"mana-bar-container\">\n                  <div className=\"mana-bar-bg\">\n                    {count > 0 && <span className=\"mana-bar-count\">{count}</span>}\n                    <div className=\"mana-bar-fill\" style={{ height: `${maxManaCount > 0 ? (count / maxManaCount) * 100 : 0}%` }}></div>\n                  </div>\n                  <span className=\"mana-label\">{i === 7 ? '7+' : i}</span>\n                </div>\n              ))}\n            </div>\n          </div>\n\n          {/* ユニット選択 */}\n          <div className=\"unit-select-area\">\n            <span className=\"unit-label\">基本ユニット:</span>\n            {['スリーズブーケ', 'DOLLCHESTRA', 'みらくらぱーく！'].map(unit => (\n              <button\n                key={unit}\n                className={`unit-btn ${selectedUnit === unit ? 'active' : ''}`}\n                style={{ background: unit === 'スリーズブーケ' ? '#ffd6e0' : unit === 'DOLLCHESTRA' ? '#c5d8f0' : '#fff0b3' }}\n                onClick={() => { \n                  if (selectedUnit !== unit && deckTotal > 0) {\n                    if (!window.confirm('基本ユニットを変更するとデッキがリセットされます。よろしいですか？')) return;\n                  }\n                  setSelectedUnit(unit); \n                  setDeckList({}); \n                }}\n              >\n                {unit}\n              </button>\n            ))}\n          </div>\n\n          {selectedUnit && (\n            <div className=\"starter-deck-area\">\n              <button className=\"starter-btn\" onClick={loadStarterDeck}>\n                スターターデッキを読み込む\n              </button>\n              <button className=\"clear-btn\" onClick={() => setDeckList({})}>クリア</button>\n            </div>\n          )}\n        </div>\n\n        {selectedUnit && (\n\n            <div className=\"deck-builder-body\">\n              {/* カードプール */}\n              <div className=\"card-pool\">\n                <h3 className=\"pool-title\">カードプール</h3>\n                <div className=\"pool-list\">\n                  {availableCards.map((card, i) => {\n                    const count = deckList[card.曲名] || 0;\n                    const canAdd = count < 3 && deckTotal < 30;\n                    return (\n                      <div key={i} className=\"pool-card\" style={{ background: getCardBackground(card.歌唱) }} onClick={() => setSelectedCard(card)}>\n                        <div className=\"pool-card-info\">\n                           <span className=\"pool-card-cost\">{card.コスト}</span>\n                           <span className=\"pool-card-name\">{card.曲名}</span>\n                        </div>\n                        <div className=\"pool-card-tags\">\n                           <span className=\"pool-card-unit\">{card.歌唱 === '蓮ノ空女学院スクールアイドルクラブ' ? '蓮ノ空' : card.歌唱}</span>\n                           <span className=\"pool-card-center\">{card.センター}</span>\n                        </div>\n                        <div className=\"pool-card-stats\">\n                           {card.パワー && <span className=\"stat-power\"><Swords size={10}/>{card.パワー}</span>}\n                           {card.シールド && <span className=\"stat-shield\"><Shield size={10}/>{card.シールド}</span>}\n                           {card.ヒール && <span className=\"stat-heal\"><HeartPulse size={10}/>{card.ヒール}</span>}\n                           {card.ダメージ && <span className=\"stat-damage\"><Zap size={10}/>{card.ダメージ}</span>}\n                        </div>\n                        <div className=\"pool-card-controls\">\n                           <button className=\"pool-btn remove\" onClick={(e) => { e.stopPropagation(); removeCardFromDeck(card.曲名); }} disabled={count === 0}><Minus size={14}/></button>\n                           <span className=\"pool-count\">{count}</span>\n                           <button className=\"pool-btn add\" onClick={(e) => { e.stopPropagation(); addCardToDeck(card.曲名); }} disabled={!canAdd}><Plus size={14}/></button>\n                        </div>\n                      </div>\n                    );\n                  })}\n                </div>\n              </div>\n\n              {/* 現在のデッキ */}\n              <div className=\"deck-preview\">\n                <h3 className=\"pool-title\">デッキ内容 ({deckTotal}/30)</h3>\n                \n                <div className=\"deck-list\">\n                  {Object.entries(deckList).sort((a, b) => {\n                    const ca = cardData.find(c => c.曲名 === a[0]);\n                    const cb = cardData.find(c => c.曲名 === b[0]);\n                    return (Number(ca?.コスト) || 0) - (Number(cb?.コスト) || 0);\n                  }).map(([name, count]) => {\n                    const card = cardData.find(c => c.曲名 === name);\n                    return (\n                      <div key={name} className=\"deck-item\" style={{ borderLeft: `4px solid ${card ? getCardBackground(card.歌唱) === '#d0d0d0' ? '#999' : getCardBackground(card.歌唱).replace('linear-gradient(135deg, ', '').split(',')[0] : '#999'}` }} onClick={() => setSelectedCard(card)}>\n                        <div className=\"deck-item-left\">\n                          <span className=\"deck-item-cost\">{card?.コスト}</span>\n                          <div className=\"deck-item-details\">\n                            <div style={{display:'flex', alignItems:'center', gap:'4px'}}>\n                              <span className=\"deck-item-name\">{name}</span>\n                              <span style={{fontSize:'0.6rem', color:'#666'}}>{card?.センター}</span>\n                            </div>\n                            <div className=\"deck-item-stats\">\n                              {card?.パワー && <span className=\"stat-power\"><Swords size={8}/>{card.パワー}</span>}\n                              {card?.シールド && <span className=\"stat-shield\"><Shield size={8}/>{card.シールド}</span>}\n                              {card?.ヒール && <span className=\"stat-heal\"><HeartPulse size={8}/>{card.ヒール}</span>}\n                              {card?.ダメージ && <span className=\"stat-damage\"><Zap size={8}/>{card.ダメージ}</span>}\n                            </div>\n                          </div>\n                        </div>\n                        <div className=\"deck-item-right\">\n                          <span className=\"deck-item-count\">×{count}</span>\n                          <div style={{display: 'flex', gap: '4px'}}>\n                            <button className=\"deck-item-remove\" style={{background: '#38a169'}} onClick={(e) => { e.stopPropagation(); addCardToDeck(name); }} disabled={count >= 3 || deckTotal >= 30}><Plus size={12}/></button>\n                            <button className=\"deck-item-remove\" onClick={(e) => { e.stopPropagation(); removeCardFromDeck(name); }}><Minus size={12}/></button>\n                          </div>\n                        </div>\n                      </div>\n                    );\n                  })}\n                  {deckTotal === 0 && <div className=\"deck-empty\">カードを追加してください</div>}\n                </div>\n                <button\n                  className={`battle-start-btn ${deckTotal === 30 ? 'ready' : ''}`}\n                  disabled={deckTotal !== 30}\n                  onClick={startBattle}\n                >\n                  バトル開始\n                </button>\n              </div>\n            </div>\n          )}\n        \n        {selectedCard && (\n          <div className=\"modal-overlay\" onClick={() => setSelectedCard(null)}>\n            <div className=\"modal-content\" style={{maxWidth: '350px', transform: 'scale(1.1)', display: 'flex', justifyContent: 'center', background: 'transparent', border: 'none', boxShadow: 'none'}}>\n              <StandardCard card={selectedCard} />\n            </div>\n          </div>\n        )}\n      </div>\n    </>\n    );\n  }\n\n  // ===== バトル画面 =====\n  if (screen === 'battle') {\n    if (!gameState) return null;\n    return (\n      <>\n        <div className=\"orientation-warning\">\n          <Smartphone size={64} />\n          <h2 style={{marginTop:'1rem'}}>画面を横向きにしてください</h2>\n          <p>このゲームは横画面専用です</p>\n        </div>\n        <div className=\"game-container\">\n        {gameState.turnBanner && <div className=\"turn-banner\">{gameState.turnBanner}</div>}\n        \n        {gameState.enemyPlayedCard && !gameState.turnBanner && (\n          <div className=\"enemy-played-popup\">\n              <StandardCard card={gameState.enemyPlayedCard} />\n          </div>\n        )}\n\n        {damageTexts.map(dt => (\n          <div key={dt.id} className=\"damage-text\" style={{ left: `${dt.x}%`, top: `${dt.y}px`, color: dt.color }}>\n            {dt.text}\n          </div>\n        ))}\n\n        <div className=\"enemy-hand-container\">\n          {gameState.enemy.hand.map((_, i) => (\n            <div key={i} className=\"enemy-card-back\"></div>\n          ))}\n        </div>\n\n        <div className=\"voltage-sidebar\">\n          <div className=\"voltage-group\">\n            <span className=\"voltage-label\">Enemy Voltage</span>\n            <div className=\"voltage-container\" style={{ margin: 0 }}>\n              <span style={{fontSize:'0.8rem', marginRight:'5px'}}>{gameState.enemy.currentVoltage}/{gameState.enemy.maxVoltage}</span>\n              {drawVoltage(gameState.enemy.maxVoltage, gameState.enemy.currentVoltage)}\n            </div>\n          </div>\n          <div className=\"voltage-group\">\n            <span className=\"voltage-label\">Your Voltage</span>\n            <div className=\"voltage-container\" style={{ margin: 0, justifyContent: 'flex-end' }}>\n              {drawVoltage(gameState.player.maxVoltage, gameState.player.currentVoltage)}\n              <span style={{fontSize:'0.8rem', marginLeft:'5px'}}>{gameState.player.currentVoltage}/{gameState.player.maxVoltage}</span>\n            </div>\n          </div>\n        </div>\n\n        <div className=\"board-area\">\n          {/* Enemy Area */}\n          <div className={`player-status enemy-status ${gameState.animations.enemyShake ? 'shake' : ''}`}>\n            <div className=\"player-info\">\n              <div style={{ display: 'flex', flexDirection: 'column' }}>\n                <span className=\"player-name\">寮母さん</span>\n                <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.enemy.baseUnit}</span>\n              </div>\n              <span className=\"hp-text\">{gameState.enemy.hp} / {gameState.enemy.maxHp}</span>\n            </div>\n            <div className=\"hp-bar-container\">\n              <div className={`hp-bar ${gameState.enemy.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.enemy.hp / gameState.enemy.maxHp) * 100)}%` }}></div>\n            </div>\n          <div className=\"deck-info\" style={{ marginTop: '2px', display: 'flex', gap: '8px', alignItems: 'center' }}>\n             <span className=\"deck-stat\"><Layers size={14}/> {gameState.enemy.deck.length}</span>\n             <span className=\"deck-stat\" onClick={() => setShowDiscard({ show: true, owner: 'enemy' })}><Trash2 size={14}/> {gameState.enemy.discard.length}</span>\n             <span className=\"deck-stat\" title=\"Played this turn\"><Play size={14}/> {gameState.enemy.buffs.turnCardsPlayed.length}</span>\n            {gameState.enemy.shield > 0 && <span className=\"shield-badge\" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.enemy.shield}</span>}\n          </div>\n        </div>\n\n        {/* Setlist Area (Center) */}\n        {!gameState.enemyPlayedCard && (\n            <div className=\"setlist-container\">\n            {gameState.setlist.slice(-5).map((log, index, arr) => (\n                <div key={index} className={`setlist-card ${index === arr.length - 1 ? 'latest' : ''}`} style={{\n                transform: `translate(${(index - arr.length + 1) * 30}px, 0) scale(${index === arr.length - 1 ? 1.2 : 0.8 + (index * 0.05)})`,\n                zIndex: index\n                }}>\n                <MiniCard card={log.card} owner={log.owner} />\n                </div>\n            ))}\n            </div>\n        )}\n\n        {/* Player Area */}\n        <div className={`player-status self-status ${gameState.animations.playerShake ? 'shake' : ''}`}>\n           <div className=\"player-info\">\n            <div style={{ display: 'flex', flexDirection: 'column' }}>\n              <span className=\"player-name\">YOU</span>\n              <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.player.baseUnit}</span>\n            </div>\n            <span className=\"hp-text\">{gameState.player.hp} / {gameState.player.maxHp}</span>\n          </div>\n          <div className=\"hp-bar-container\">\n            <div className={`hp-bar ${gameState.player.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.player.hp / gameState.player.maxHp) * 100)}%` }}></div>\n          </div>\n          <div className=\"deck-info\" style={{ marginTop: '2px', display: 'flex', gap: '8px', alignItems: 'center' }}>\n             <span className=\"deck-stat\"><Layers size={14}/> {gameState.player.deck.length}</span>\n             <span className=\"deck-stat\" onClick={() => setShowDiscard({ show: true, owner: 'player' })}><Trash2 size={14}/> {gameState.player.discard.length}</span>\n             <span className=\"deck-stat\" title=\"Played this turn\"><Play size={14}/> {gameState.player.buffs.turnCardsPlayed.length}</span>\n            {gameState.player.shield > 0 && <span className=\"shield-badge\" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.player.shield}</span>}\n          </div>\n        </div>\n      </div>\n\n      <div className=\"action-container\">\n        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>\n          <button className=\"btn-special\" onClick={() => {\n              if(!gameState.player.specialUsed && gameState.isPlayerTurn && !gameState.turnBanner) {\n                  setGameState(prev => {\n                      const newVoltage = Math.min(prev.player.maxVoltage, prev.player.currentVoltage + 4);\n                      return {\n                          ...prev,\n                          player: { ...prev.player, currentVoltage: newVoltage, specialUsed: true }\n                      };\n                  });\n              }\n          }} disabled={gameState.player.specialUsed || !gameState.isPlayerTurn || !!gameState.turnBanner || gameState.isCoinFlipPhase}>\n            SP\n          </button>\n          <span style={{fontSize:'0.6rem', color:'#666', textAlign:'center', lineHeight:1.1, maxWidth:'65px', fontWeight:'700'}}>SPスキル<br/>ボルテージ+4</span>\n        </div>\n        \n        {gameState.isPlayerTurn && !gameState.turnBanner && !gameState.isCoinFlipPhase && (\n           <button className=\"end-turn-btn\" onClick={endTurnPlayer}>END TURN</button>\n        )}\n      </div>\n\n\n\n\n      {/* Card Preview */}\n      {selectedCard && (\n        <div className=\"card-preview-overlay\" onClick={() => setSelectedCard(null)}>\n          <div className=\"card-preview\" style={{ background: getCardBackground(selectedCard.歌唱) }} onClick={e => e.stopPropagation()}>\n            <div className=\"card-cost\" style={{top:'-12px', left:'-12px', width:'44px', height:'44px', fontSize:'1.4rem'}}>{getCalculatedCost(selectedCard, gameState.player)}</div>\n            <div className=\"card-title\" style={{fontSize:'1.4rem'}}>{selectedCard.曲名}</div>\n            <div className=\"card-tags\" style={{fontSize:'0.85rem'}}>\n              <span>{selectedCard.歌唱}</span>\n              <span>{selectedCard.センター}</span>\n            </div>\n            <div className=\"card-stats\" style={{fontSize:'0.95rem', padding:'8px'}}>\n              {selectedCard.パワー && <span className=\"stat-item stat-power\"><Swords size={16}/>{selectedCard.パワー}</span>}\n              {selectedCard.シールド && <span className=\"stat-item stat-shield\"><Shield size={16}/>{selectedCard.シールド}</span>}\n              {selectedCard.ヒール && <span className=\"stat-item stat-heal\"><HeartPulse size={16}/>{selectedCard.ヒール}</span>}\n              {selectedCard.ダメージ && <span className=\"stat-item stat-damage\"><Zap size={16}/>{selectedCard.ダメージ}</span>}\n            </div>\n            <div className=\"card-effect\" style={{fontSize:'0.95rem', padding:'12px'}}>\n              {selectedCard.効果1 && <div style={{marginBottom:'6px'}}>{selectedCard.効果1}</div>}\n              {selectedCard.効果2 && <div>{selectedCard.効果2}</div>}\n            </div>\n            <div style={{display:'flex', gap:'8px', marginTop:'10px'}}>\n              {gameState.isPlayerTurn && gameState.player.currentVoltage >= getCalculatedCost(selectedCard, gameState.player) && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating && (\n                <button className=\"preview-play-btn\" onClick={() => { playCard(selectedCard, true); setSelectedCard(null); }}>使用する</button>\n              )}\n              <button className=\"preview-close-btn\" onClick={() => setSelectedCard(null)}>閉じる</button>\n            </div>\n          </div>\n        </div>\n      )}\n\n      <div className=\"hand-container\">\n        {gameState.player.hand.map((card) => {\n          const calcCost = getCalculatedCost(card, gameState.player);\n          const canPlay = gameState.isPlayerTurn && gameState.player.currentVoltage >= calcCost && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating;\n          return (\n            <div \n                key={card.id} \n                className=\"card\" \n                style={{ \n                    background: getCardBackground(card.歌唱),\n                    opacity: canPlay ? 1 : 0.4,\n                    cursor: 'pointer',\n                    filter: canPlay ? 'none' : 'grayscale(30%)'\n                }}\n                onClick={() => setSelectedCard(card)}\n            >\n              <div className=\"card-cost\">{calcCost}</div>\n              <div className=\"card-title\">{card.曲名}</div>\n              <div className=\"card-tags\">\n                <span>{card.歌唱}</span>\n                <span>{card.センター}</span>\n              </div>\n              <div className=\"card-stats\">\n                {card.パワー && <span className=\"stat-item stat-power\"><Swords size={12}/>{card.パワー}</span>}\n                {card.シールド && <span className=\"stat-item stat-shield\"><Shield size={12}/>{card.シールド}</span>}\n                {card.ヒール && <span className=\"stat-item stat-heal\"><HeartPulse size={12}/>{card.ヒール}</span>}\n                {card.ダメージ && <span className=\"stat-item stat-damage\"><Zap size={12}/>{card.ダメージ}</span>}\n              </div>\n              <div className=\"card-effect\">\n                {card.効果1 && <div style={{marginBottom:'4px'}}>{card.効果1}</div>}\n                {card.効果2 && <div>{card.効果2}</div>}\n              </div>\n            </div>\n          );\n        })}\n      </div>\n\n      {/* Discard Modal */}\n      {showDiscard.show && (\n        <div className=\"modal-overlay\" onClick={() => setShowDiscard({ show: false, owner: null })}>\n          <div className=\"modal-content\" onClick={e => e.stopPropagation()}>\n            <div className=\"modal-header\">\n              <h2 style={{fontFamily:'Outfit', margin: 0}}>{showDiscard.owner === 'player' ? 'YOUR' : 'CPU'} DISCARD PILE</h2>\n              <button className=\"modal-close\" onClick={() => setShowDiscard({ show: false, owner: null })}><X size={20}/></button>\n            </div>\n            <div className=\"modal-grid\">\n              {gameState[showDiscard.owner].discard.map((card, i) => (\n                <StandardCard key={i} card={card} />\n              ))}\n              {gameState[showDiscard.owner].discard.length === 0 && <div style={{color:'#666'}}>No cards in discard pile.</div>}\n            </div>\n          </div>\n        </div>\n      )}\n\n      {/* Battle End Overlay */}\n      {gameState.battleResult && (\n        <div className=\"battle-end-overlay\">\n          <div className=\"battle-end-content\">\n            <div className=\"battle-result-text\" style={{ color: gameState.battleResult === 'WIN' ? '#FFD700' : gameState.battleResult === 'LOSE' ? '#FF4500' : '#FFFFFF' }}>\n              {gameState.battleResult === 'WIN' ? 'Victory!' : gameState.battleResult === 'LOSE' ? 'Defeat...' : 'Draw'}\n            </div>\n            <div className=\"battle-end-actions\">\n              <button className=\"end-action-btn btn-rematch\" onClick={handleRematch}>もう一度戦う</button>\n              <button className=\"end-action-btn btn-menu\" onClick={() => setScreen('deckBuilder')}>デッキ選択に戻る</button>\n            </div>\n          </div>\n        </div>\n      )}\n\n    </div>\n    </>\n    );\n  }\n\n  return null;\n}\n\nconst StandardCard = ({ card }) => (\n    <div className=\"card-standard\" style={{ background: getCardBackground(card.歌唱) }}>\n        <div className=\"card-cost\">{card.コスト}</div>\n        <div className=\"card-title\">{card.曲名}</div>\n        <div className=\"card-stats\">\n            {card.パワー && <span className=\"stat-power\"><Swords size={12}/>{card.パワー}</span>}\n            {card.シールド && <span className=\"stat-shield\"><Shield size={12}/>{card.シールド}</span>}\n        </div>\n        <div className=\"card-effect\">{card.効果1}</div>\n    </div>\n);\n\nconst MiniCard = ({ card, owner }) => (\n  <div className=\"card-mini\" style={{\n    background: getCardBackground(card.歌唱),\n    border: `1px solid ${owner === 'player' ? '#0099aa' : '#cc3333'}`,\n  }}>\n    <div className=\"card-mini-title\">{card.曲名}</div>\n    <div className=\"card-mini-center\">{card.センター}</div>\n    <div className=\"card-mini-footer\">Cost: {card.コスト}</div>\n    <div className=\"card-mini-effect\">{card.効果1}</div>\n  </div>\n);\n\nexport default App;