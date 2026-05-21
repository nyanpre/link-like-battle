/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Shield, Plus, Minus, Zap, HeartPulse, Swords, Layers, Trash2, X, ChevronRight, Play, Smartphone } from 'lucide-react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck, createOnlineInitialState } from './utils/gameLogic';
import { getCalculatedCost, applyCardEffects, drawCard as engineDrawCard } from './utils/battleEngine';
import cardData from './data.json';
import './index.css';
import { createRoom, watchRoomsList, joinRoom, setClientReady, startGameInDB, watchRoom, updateGameStateToDB, deleteRoom } from './utils/firebase';

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
  const [screen, setScreen] = useState('home');
  const [playerName, setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState(null);

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [deckList, setDeckList] = useState({});
  const [gameState, setGameState] = useState(null);
  const [damageTexts, setDamageTexts] = useState([]);
  const [showDiscard, setShowDiscard] = useState({ show: false, owner: null });
  const [selectedCard, setSelectedCard] = useState(null);
  
  const [roomId, setRoomId] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [roomsList, setRoomsList] = useState([]);
  const [roomData, setRoomData] = useState(null);

  const cpuTurnRef = useRef(null);
  const unsubscribeRoomRef = useRef(null);

  useEffect(() => {
    if (screen === 'lobby') {
      const unsub = watchRoomsList((rooms) => setRoomsList(rooms));
      return () => unsub();
    }
  }, [screen]);

  useEffect(() => {
    if (!roomId || (screen !== 'waitingRoom' && screen !== 'battle')) return;
    
    unsubscribeRoomRef.current = watchRoom(roomId, (data) => {
      if (!data) return;
      setRoomData(data);

      if (data.status === 'playing' && data.gameState) {
        if (isHost) {
          setGameState(data.gameState);
        } else {
          const flippedState = {
            ...data.gameState,
            player: data.gameState.enemy,
            enemy: data.gameState.player,
            isPlayerTurn: !data.gameState.isPlayerTurn,
            setlist: data.gameState.setlist.map(log => ({ ...log, owner: log.owner === 'player' ? 'enemy' : 'player' })),
            turnBanner: data.gameState.turnBanner === "YOU FIRST!" ? "ENEMY FIRST!" : 
                        data.gameState.turnBanner === "CPU FIRST!" ? "YOU FIRST!" : 
                        data.gameState.turnBanner === "YOUR TURN" ? "ENEMY TURN" :
                        data.gameState.turnBanner === "CPU TURN" ? "YOUR TURN" : data.gameState.turnBanner
          };
          setGameState(flippedState);
        }
        if (screen !== 'battle') setScreen('battle');
      }
    });

    return () => {
      if (unsubscribeRoomRef.current) unsubscribeRoomRef.current();
    };
  }, [roomId, isHost, screen]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const handleDeckComplete = () => {
    if (gameMode === 'cpu') {
      const playerCardNames = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      const enemyDeck = generateCPUDeck();
      
      const state = createInitialState({ deck: playerDeck, unit: selectedUnit || 'スリーズブーケ' }, enemyDeck);
      state.player.name = playerName || 'YOU';
      state.enemy.name = '寮母さん';
      
      setGameState(state);
      setScreen('battle');
    } else {
      setScreen('lobby');
    }
  };

  const handleCreateRoom = async () => {
    try {
      const playerCardNames = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      
      const newRoomId = await createRoom({ deck: playerDeck, unit: selectedUnit }, playerName);
      setRoomId(newRoomId);
      setIsHost(true);
      setScreen('waitingRoom');
    } catch (error) {
      alert("部屋の作成に失敗しました");
    }
  };

  const handleJoinRoom = async (id) => {
    try {
      const playerCardNames = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      
      await joinRoom(id, { deck: playerDeck, unit: selectedUnit }, playerName);
      setRoomId(id);
      setIsHost(false);
      setScreen('waitingRoom');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleHostStartGame = async () => {
    if (!roomData || !roomData.clientDeck) return;
    const initialState = createOnlineInitialState(roomData.hostDeck, roomData.clientDeck);
    initialState.player.name = roomData.hostName || 'YOU';
    initialState.enemy.name = roomData.clientName || '相手';
    await startGameInDB(roomId, initialState);
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
            ...prev.player, isFirstPlayer: playerGoesFirst, maxVoltage: playerVoltage, currentVoltage: playerVoltage, deck: [...prev.player.deck], hand: [...prev.player.hand], discard: [...prev.player.discard],
          };
          const newEnemy = {
            ...prev.enemy, isFirstPlayer: !playerGoesFirst, maxVoltage: enemyVoltage, currentVoltage: enemyVoltage, deck: [...prev.enemy.deck], hand: [...prev.enemy.hand], discard: [...prev.enemy.discard],
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
            ...prev, turn: 1, isCoinFlipPhase: false, isPlayerTurn: playerGoesFirst,
            turnBanner: playerGoesFirst ? "YOU FIRST!" : (gameMode === 'cpu' ? "CPU FIRST!" : "ENEMY FIRST!"),
            player: newPlayer, enemy: newEnemy,
          };
        });
      }, 2000);
    }
  }, [gameState?.isCoinFlipPhase, gameMode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!gameState) return;
    if (!gameState.isCoinFlipPhase && gameState.turnBanner) {
      setTimeout(() => {
        setGameState(prev => prev ? { ...prev, turnBanner: null } : prev);
      }, 2000);
    }
  }, [gameState?.turnBanner, gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps

  const addDamageText = (x, y, text, color = '#ef4444', cssClass = 'damage-text') => {
    const id = Math.random();
    setDamageTexts(prev => [...prev, { id, x, y, text, color, cssClass }]);
    setTimeout(() => { setDamageTexts(prev => prev.filter(dt => dt.id !== id)); }, 1200);
  };

  const addDrawEffect = (x, y, text) => { addDamageText(x, y, text, '#3b82f6', 'draw-effect-text'); };

  const triggerShake = (target) => {
    setGameState(prev => ({ ...prev, animations: { ...prev.animations, [`${target}Shake`]: true } }));
    setTimeout(() => { setGameState(prev => ({ ...prev, animations: { ...prev.animations, [`${target}Shake`]: false } })); }, 500);
  };

  const drawCard = (userState, ownerStr) => {
    if (userState.deck.length === 0) {
      setTimeout(() => alert(ownerStr === 'player' ? "DECK OUT! YOU LOSE..." : "DECK OUT! YOU WIN!"), 500);
      userState.hp = 0; 
      return false;
    }
    const card = userState.deck.shift();
    if (userState.hand.length >= 8) { userState.discard.push(card); } else { userState.hand.push(card); }
    return true;
  };

  const startTurn = (isPlayer) => {
    setGameState(prev => {
      const nextGlobalTurn = prev.turn + 1;
      const prevTarget = isPlayer ? prev.enemy : prev.player;
      const newPrevTarget = {
        ...prevTarget,
        buffs: { ...prevTarget.buffs, damageImmune: false, kozueDrawActive: false, sayakaDmgActive: false, doubleNextEffect: false, onyourmark102Active: false, yupYupYupActive: false, damageReflectionActive: false, tookDamageThisTurn: false, tookDamageAmount: 0, tookDamageCount: 0, turnCardsPlayed: [] }
      };
      
      const target = isPlayer ? prev.player : prev.enemy;
      const amIFirstPlayer = target.isFirstPlayer === true;
      const newMax = getVoltage(amIFirstPlayer, nextGlobalTurn);
      const drawCount = getDrawCount(amIFirstPlayer, nextGlobalTurn);
      
      let newTarget = {
        ...target, maxVoltage: newMax, currentVoltage: newMax, deck: [...target.deck], hand: [...target.hand], discard: [...target.discard],
        buffs: { ...target.buffs, damageImmune: false, kozueDrawActive: false, sayakaDmgActive: false, doubleNextEffect: false, onyourmark102Active: false, yupYupYupActive: false, damageReflectionActive: false, tookDamageThisTurn: false, tookDamageAmount: 0, nextCardCostDown: 0, turnCardsPlayed: [] }
      };

      if (newTarget.buffs.cannotDrawNextTurn) {
        newTarget.buffs.cannotDrawNextTurn = false;
        return {
          ...prev, isPlayerTurn: isPlayer, turnBanner: isPlayer ? "YOUR TURN (NO DRAW)" : (gameMode === 'cpu' ? "CPU TURN (NO DRAW)" : "ENEMY TURN (NO DRAW)"),
          setlist: [], enemyPlayedCard: null, player: isPlayer ? newTarget : newPrevTarget, enemy: isPlayer ? newPrevTarget : newTarget, turn: nextGlobalTurn
        };
      }
      
      if (newPrevTarget.buffs.setEnemyVoltage3) { newTarget.currentVoltage = 3; newPrevTarget.buffs.setEnemyVoltage3 = false; }
      for (let i = 0; i < drawCount; i++) { drawCard(newTarget, isPlayer ? 'player' : 'enemy'); }
      
      return {
        ...prev, isPlayerTurn: isPlayer, turnBanner: isPlayer ? "YOUR TURN" : (gameMode === 'cpu' ? "CPU TURN" : "ENEMY TURN"),
        setlist: [], enemyPlayedCard: null, player: isPlayer ? newTarget : newPrevTarget, enemy: isPlayer ? newPrevTarget : newTarget, turn: nextGlobalTurn
      };
    });
  };

  const endTurnPlayer = () => {
    if (!gameState.isPlayerTurn || gameState.player.hp <= 0 || gameState.enemy.hp <= 0) return;

    if (gameState.player.buffs.yupYupYupActive) {
      setGameState(prev => {
        const next = { ...prev, player: { ...prev.player, hand: [...prev.player.hand], deck: [...prev.player.deck], discard: [...prev.player.discard] } };
        for (let i = 0; i < prev.player.currentVoltage; i++) { engineDrawCard(next.player); }
        return next;
      });
    }

    setGameState(prev => {
      const queued = prev.player.buffs.queuedEndTurnEffects;
      if (!queued || queued.length === 0) return prev;
      
      const newPlayer = { ...prev.player, deck: [...prev.player.deck], hand: [...prev.player.hand], discard: [...prev.player.discard], buffs: { ...prev.player.buffs, queuedEndTurnEffects: [] } };
      
      queued.forEach(effect => {
        if (effect.type === 'draw_voltage') {
          for (let i = 0; i < newPlayer.currentVoltage; i++) { engineDrawCard(newPlayer); }
        } else if (effect.type === 'draw_specific' && effect.name) {
          const idx = newPlayer.deck.findIndex(c => c.曲名 === effect.name);
          if (idx !== -1) {
            const [found] = newPlayer.deck.splice(idx, 1);
            if (newPlayer.hand.length >= 8) newPlayer.discard.push(found);
            else newPlayer.hand.push(found);
          } else {
            const dIdx = newPlayer.discard.findIndex(c => c.曲名 === effect.name);
            if (dIdx !== -1) {
              const [found] = newPlayer.discard.splice(dIdx, 1);
              if (newPlayer.hand.length >= 8) newPlayer.discard.push(found);
              else newPlayer.hand.push(found);
            }
          }
        } else if (effect.type === 'heal' && effect.value) {
          newPlayer.hp = Math.min(newPlayer.maxHp, newPlayer.hp + effect.value);
        }
      });
      
      return { ...prev, player: newPlayer };
    });

    setGameState(prev => {
      const lastPlayed = prev.setlist[prev.setlist.length - 1];
      if (lastPlayed && lastPlayed.owner === 'player' && lastPlayed.card.曲名 === 'Dream Believers') {
        const deckIdx = prev.player.deck.findIndex(c => c.曲名 === 'Dream Believers');
        if (deckIdx !== -1) {
          const newPlayer = { ...prev.player, deck: [...prev.player.deck], hand: [...prev.player.hand] };
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
    if (gameState.isPlayerTurn && !gameState.isCoinFlipPhase && !gameState.turnBanner && gameState.player.hp > 0 && gameState.enemy.hp > 0) {
      const hasPlayable = gameState.player.hand.some(c => gameState.player.currentVoltage >= getCalculatedCost(c, gameState.player));
      const canUseSP = !gameState.player.specialUsed;
      if (!hasPlayable && !canUseSP) {
        const t = setTimeout(() => endTurnPlayer(), 800);
        return () => clearTimeout(t);
      }
    }
  }, [gameState?.isPlayerTurn, gameState?.player?.currentVoltage, gameState?.player?.hand?.length, gameState?.player?.specialUsed, gameState?.turnBanner, gameState?.isCoinFlipPhase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!gameState || gameMode !== 'cpu') return;
    if (!gameState.isCoinFlipPhase && !gameState.isPlayerTurn && gameState.enemy.hp > 0 && gameState.player.hp > 0 && !gameState.turnBanner) {
      cpuTurnRef.current = setTimeout(() => { playEnemyTurn(); }, 1500);
      return () => clearTimeout(cpuTurnRef.current);
    }
  }, [gameState?.isPlayerTurn, gameState?.enemy?.currentVoltage, gameState?.turnBanner, gameState?.isCoinFlipPhase, gameMode]); // eslint-disable-line react-hooks/exhaustive-deps

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
          for (let i = 0; i < prev.enemy.currentVoltage; i++) { engineDrawCard(next.enemy); }
          return next;
        });
      }
      setGameState(prev => {
        const queued = prev.enemy.buffs.queuedEndTurnEffects;
        if (!queued || queued.length === 0) return prev;
        
        const newEnemy = { ...prev.enemy, deck: [...prev.enemy.deck], hand: [...prev.enemy.hand], discard: [...prev.enemy.discard], buffs: { ...prev.enemy.buffs, queuedEndTurnEffects: [] } };
        
        queued.forEach(effect => {
          if (effect.type === 'draw_voltage') {
            for (let i = 0; i < newEnemy.currentVoltage; i++) { engineDrawCard(newEnemy); }
          } else if (effect.type === 'draw_specific' && effect.name) {
            const idx = newEnemy.deck.findIndex(c => c.曲名 === effect.name);
            if (idx !== -1) {
              const [found] = newEnemy.deck.splice(idx, 1);
              if (newEnemy.hand.length >= 8) newEnemy.discard.push(found);
              else newEnemy.hand.push(found);
            } else {
              const dIdx = newEnemy.discard.findIndex(c => c.曲名 === effect.name);
              if (dIdx !== -1) {
                const [found] = newEnemy.discard.splice(dIdx, 1);
                if (newEnemy.hand.length >= 8) newEnemy.discard.push(found);
                else newEnemy.hand.push(found);
              }
            }
          } else if (effect.type === 'heal' && effect.value) {
            newEnemy.hp = Math.min(newEnemy.maxHp, newEnemy.hp + effect.value);
          }
        });
        
        return { ...prev, enemy: newEnemy };
      });
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
        
        let effectIndex = 0;
        events.forEach((ev) => {
          const delay = effectIndex * 600;
          const offsetX = 30 + (effectIndex % 3) * 60; 
          const offsetY = (effectIndex % 3) * 40; 
          effectIndex++;
          setTimeout(() => {
            if (ev.type === 'damage') {
              const isTargetPlayer = ev.data.target === 'player';
              const baseY = isTargetPlayer ? window.innerHeight - 200 : 200;
              addDamageText(offsetX, baseY - offsetY, `-${ev.data.value}`);
              triggerShake(isTargetPlayer ? 'player' : 'enemy');
            }
            if (ev.type === 'damage_self') {
              const baseY = isPlayer ? window.innerHeight - 200 : 200;
              addDamageText(offsetX, baseY - offsetY, `-${ev.data.value}`, '#ff6b35');
              triggerShake(isPlayer ? 'player' : 'enemy');
            }
            if (ev.type === 'heal') {
              const baseY = isPlayer ? window.innerHeight - 200 : 200;
              addDamageText(offsetX, baseY - offsetY, `+${ev.data.value}`, '#10b981');
            }
            if (ev.type === 'voltage') {
              const baseY = isPlayer ? window.innerHeight - 200 : 200;
              addDamageText(offsetX, baseY - offsetY, `+⚡${ev.data.value}`, '#f59e0b');
            }
            if (ev.type === 'shield') {
              const baseY = isPlayer ? window.innerHeight - 200 : 200;
              addDamageText(offsetX, baseY - offsetY, `+🛡${ev.data.value}`, '#3b82f6');
            }
            if (ev.type === 'draw') {
              const baseY = isPlayer ? window.innerHeight / 2 : window.innerHeight / 2 - 60;
              addDrawEffect(window.innerWidth / 2 - 60, baseY, `🃏 Draw ${ev.data.count || 1}`);
            }
          }, delay);
        });

        if (newState.forceTurnEnd) {
          setTimeout(() => {
            if (isPlayer) endTurnPlayer();
            else startTurn(true);
          }, 500);
        }

        newState.isAnimating = false;
        
        if (gameMode === 'online' && isPlayer) {
          updateGameStateToDB(roomId, newState);
        }

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

              const finalState = result ? { ...current, battleResult: result } : current;
              
              if (gameMode === 'online' && isPlayer && result) {
                updateGameStateToDB(roomId, finalState);
              }
              
              return finalState;
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

  if (screen === 'home') {
    return (
      <div className="home-screen">
        <div className="title-logo" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <span className="title-link">Link!</span><span className="title-like">Like!</span><span className="title-battle">Battle!</span>
        </div>
        <p className="title-subtitle">究極のスクールアイドルバトル</p>
        <input 
          className="name-input" 
          maxLength="6" 
          value={playerName} 
          onChange={e => setPlayerName(e.target.value)} 
          placeholder="プレイヤー名 (最大6文字)" 
        />
        <div className="mode-buttons">
          <button className="title-start-btn" onClick={() => { setGameMode('cpu'); setScreen('deckBuilder'); }}>
            CPU戦で遊ぶ
          </button>
          <button className="title-start-btn" style={{ background: 'var(--secondary)' }} onClick={() => { setGameMode('online'); setScreen('deckBuilder'); }}>
            通信対戦で遊ぶ
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'lobby') {
    return (
      <div className="lobby-screen">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--secondary)', fontFamily: 'Outfit' }}>ROOMLIST</h2>
        <button className="title-start-btn" style={{ marginBottom: '1rem' }} onClick={handleCreateRoom}>
          部屋を作る
        </button>
        <div className="room-list">
          {roomsList.length === 0 ? <p style={{ textAlign: 'center', color: '#666' }}>現在、待機中の部屋はありません。</p> : roomsList.map(r => (
            <div key={r.id} className="room-item">
              <span>{r.roomName}</span>
              <button className="room-join-btn" onClick={() => handleJoinRoom(r.id)}>入る</button>
            </div>
          ))}
        </div>
        <button style={{ marginTop: '2rem', padding: '10px', background: 'none', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setScreen('home')}>
          戻る
        </button>
      </div>
    );
  }

  if (screen === 'waitingRoom') {
    return (
      <div className="waiting-screen">
        <div className="waiting-box">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            {isHost ? 'あなたの部屋' : '通信待機室'}
          </h2>
          <div className="vs-text">{isHost ? playerName || 'YOU' : roomData?.hostName}</div>
          <div style={{ fontWeight: 'bold', color: '#666' }}>VS</div>
          <div className="vs-text">{isHost ? (roomData?.clientName || '待機中...') : playerName || 'YOU'}</div>
          
          <div style={{ marginTop: '2rem' }}>
            {isHost ? (
              roomData?.status === 'ready' 
                ? <button className="title-start-btn" onClick={handleHostStartGame}>バトル開始</button>
                : <p style={{ color: '#666' }}>相手の準備を待っています...</p>
            ) : (
              roomData?.status === 'waiting'
                ? <button className="title-start-btn" style={{ background: '#10b981' }} onClick={() => setClientReady(roomId)}>準備OK</button>
                : <p style={{ color: '#666' }}>ホストの開始を待っています...</p>
            )}
          </div>
        </div>
      </div>
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
        <div className="deck-builder-sticky-header" style={{position:'sticky', top:0, background:'#fff', zIndex:1000, paddingBottom:'4px', borderBottom:'1px solid #eee'}}>
          <div className="deck-builder-header" style={{ padding: '0.2rem 1rem' }}>
            <button className="back-btn" onClick={() => setScreen('home')} style={{ padding: '0.1rem 0.4rem' }}>← ホーム</button>
            <h1 className="deck-builder-title" style={{ fontSize: '0.9rem' }}>デッキ作成 ({gameMode === 'cpu' ? 'CPU戦' : '通信対戦'})</h1>
            <div className="deck-counter" style={{ padding: '0.1rem 0.6rem', fontSize: '0.8rem' }}>{deckTotal} / 30</div>
          </div>

          {/* ユニット選択とマナカーブをスリム化して横に並べる */}
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

            {/* マナカーブの横幅と高さを調整して中央に配置 */}
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
            
            {/* バトル開始ボタン */}
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
            <div className="starter-deck-area" style={{ padding: '0 1rem 0.2rem', gap: '0.4rem', justifyContent: 'flex-start' }}>
              <button className="starter-btn" onClick={loadStarterDeck} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                スターターデッキを読み込む
              </button>
              <button className="clear-btn" onClick={() => setDeckList({})} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>クリア</button>
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
            <div className="modal-content" style={{maxWidth: '350px', transform: 'scale(1.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent', border: 'none', boxShadow: 'none'}}>
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
          <div key={dt.id} className={dt.cssClass || 'damage-text'} style={{ left: `${dt.x}px`, top: `${dt.y}px`, color: dt.color }}>
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
                <span className="player-name">{gameState.enemy.name || '相手'}</span>
                <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.enemy.baseUnit}</span>
              </div>
              <span className="hp-text">{gameState.enemy.hp} / {gameState.enemy.maxHp}</span>
            </div>
            <div className="hp-bar-container">
              <div className={`hp-bar ${gameState.enemy.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.enemy.hp / gameState.enemy.maxHp) * 100)}%` }}></div>
            </div>
          <div className="deck-info" style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
               <span className="deck-stat"><Layers size={14}/> {gameState.enemy.deck.length}</span>
               <span className="deck-stat" onClick={() => setShowDiscard({ show: true, owner: 'enemy' })}><Trash2 size={14}/> {gameState.enemy.discard.length}</span>
               {gameState.enemy.shield > 0 && <span className="shield-badge" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.enemy.shield}</span>}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
               <span className="deck-stat" title="Played this turn"><Play size={14}/> {gameState.enemy.buffs.turnCardsPlayed.length}</span>
               <span className="deck-stat" title="Took damage count"><Zap size={14} color="#ef4444"/> {gameState.enemy.buffs.tookDamageCount || 0}</span>
            </div>
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
              <span className="player-name">{gameState.player.name || 'YOU'}</span>
              <span style={{ fontSize: '0.6rem', color: '#666' }}>{gameState.player.baseUnit}</span>
            </div>
            <span className="hp-text">{gameState.player.hp} / {gameState.player.maxHp}</span>
          </div>
          <div className="hp-bar-container">
            <div className={`hp-bar ${gameState.player.hp <= 10 ? 'danger' : ''}`} style={{ width: `${Math.max(0, (gameState.player.hp / gameState.player.maxHp) * 100)}%` }}></div>
          </div>
          <div className="deck-info" style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
               <span className="deck-stat"><Layers size={14}/> {gameState.player.deck.length}</span>
               <span className="deck-stat" onClick={() => setShowDiscard({ show: true, owner: 'player' })}><Trash2 size={14}/> {gameState.player.discard.length}</span>
               {gameState.player.shield > 0 && <span className="shield-badge" style={{marginLeft:'auto'}}><Shield size={14}/> {gameState.player.shield}</span>}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
               <span className="deck-stat" title="Played this turn"><Play size={14}/> {gameState.player.buffs.turnCardsPlayed.length}</span>
               <span className="deck-stat" title="Took damage count"><Zap size={14} color="#ef4444"/> {gameState.player.buffs.tookDamageCount || 0}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="action-container">
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'4px'}}>
          <button className="btn-special" onClick={() => {
              if(!gameState.player.specialUsed && gameState.isPlayerTurn && !gameState.turnBanner) {
                  setGameState(prev => {
                      const newVoltage = Math.min(prev.player.maxVoltage, prev.player.currentVoltage + 4);
                      const newState = {
                          ...prev,
                          player: { ...prev.player, currentVoltage: newVoltage, specialUsed: true }
                      };
                      if (gameMode === 'online') updateGameStateToDB(roomId, newState);
                      return newState;
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
            <div className="card-effect" style={{fontSize:'1.15rem', padding:'12px'}}>
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

      <div className="hand-container" style={{ maxWidth: `${Math.max(200, window.innerWidth - (window.innerHeight <= 480 ? 160 : 220))}px` }}>
        {gameState.player.hand.map((card, idx, arr) => {
          const calcCost = getCalculatedCost(card, gameState.player);
          const canPlay = gameState.isPlayerTurn && gameState.player.currentVoltage >= calcCost && !gameState.turnBanner && !gameState.isCoinFlipPhase && !gameState.isAnimating;
          
          const isMobile = window.innerHeight <= 480;
          const cardWidth = isMobile ? 85 : 130;
          const actualMaxWidth = Math.max(200, window.innerWidth - (isMobile ? 160 : 220));
          const minVisible = cardWidth * 0.35;
          let marginLeft;
          if (idx === 0) {
            marginLeft = 0;
          } else if (arr.length > 1) {
            const availableWidth = actualMaxWidth - cardWidth;
            const neededMargin = availableWidth / (arr.length - 1);
            const idealMargin = Math.min(neededMargin, cardWidth * 0.7);
            const clampedMargin = Math.max(idealMargin, minVisible);
            marginLeft = `${-(cardWidth - clampedMargin)}px`;
          }

          return (
            <div 
                key={card.id} 
                className="card" 
                style={{ 
                    background: getCardBackground(card.歌唱),
                    opacity: canPlay ? 1 : 0.4,
                    cursor: 'pointer',
                    filter: canPlay ? 'none' : 'grayscale(30%)',
                    marginLeft: marginLeft
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
              <h2 style={{fontFamily:'Outfit', margin: 0}}>{showDiscard.owner === 'player' ? 'YOUR' : 'ENEMY'} DISCARD PILE</h2>
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
              {gameMode === 'cpu' && <button className="end-action-btn btn-rematch" onClick={handleRematch}>もう一度戦う</button>}
              <button className="end-action-btn btn-menu" onClick={() => {
                if (gameMode === 'online' && isHost && roomId) deleteRoom(roomId);
                setScreen('home');
              }}>
                ホームに戻る
              </button>
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
