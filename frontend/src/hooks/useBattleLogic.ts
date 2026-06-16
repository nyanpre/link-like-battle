// src/hooks/useBattleLogic.ts
import { useState, useEffect, useRef } from 'react';
import { getCalculatedCost, applyCardEffects, drawCard as engineDrawCard } from '../utils/battleEngine';
import { buildDeckFromList, generateCPUDeck, createInitialState } from '../utils/gameLogic';
import { GameState, CardData } from '../types';

const VOLTAGE_FIRST = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const VOLTAGE_SECOND = [0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const DRAW_FIRST = (turn: number) => (turn % 2 === 1) ? 1 : 0;
const DRAW_SECOND = (turn: number) => (turn % 2 === 0) ? 1 : 0;

function getVoltage(isFirstPlayer: boolean, globalTurn: number) {
  const table = isFirstPlayer ? VOLTAGE_FIRST : VOLTAGE_SECOND;
  if (globalTurn >= table.length) return 10;
  return table[globalTurn];
}

function getDrawCount(isFirstPlayer: boolean, globalTurn: number) {
  return isFirstPlayer ? DRAW_FIRST(globalTurn) : DRAW_SECOND(globalTurn);
}

// ★ syncDB という「セーブ用関数」を親から受け取るように追加
interface UseBattleLogicProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
  gameMode: string | null;
  roomId: string;
  isHost: boolean;
  setScreen: (screen: string) => void;
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
  syncDB: (state: GameState) => void; 
}

export const useBattleLogic = ({
  gameState, setGameState, gameMode, isHost, syncDB
}: UseBattleLogicProps) => {
  const [damageTexts, setDamageTexts] = useState<{id: number, x: number, y: number, text: string, color: string, cssClass: string}[]>([]);
  const [showDiscard, setShowDiscard] = useState<{ show: boolean, owner: 'player' | 'enemy' | null }>({ show: false, owner: null });
  const [overdrawnCards, setOverdrawnCards] = useState<{id: number, card: CardData, isPlayer: boolean}[]>([]);
  const [selectFromDiscard, setSelectFromDiscard] = useState<{ show: boolean, maxCost: number, excludeId?: string, reason: string } | null>(null);
  
  const cpuTurnRef = useRef<any>(null);

  useEffect(() => {
    if (!gameState || gameState.battleResult || gameState.isCoinFlipPhase) return;

    if (gameState.player.hp <= 0 || gameState.enemy.hp <= 0) {
      const timer = setTimeout(() => {
        setGameState((prev: any) => {
          if (prev.battleResult) return prev;
          let result: 'WIN' | 'LOSE' | 'DRAW' | null = null;
          if (prev.player.hp <= 0 && prev.enemy.hp <= 0) result = "DRAW";
          else if (prev.enemy.hp <= 0) result = "WIN";
          else if (prev.player.hp <= 0) result = "LOSE";
          
          if (!result) return prev;

          const finalState = { ...prev, battleResult: result };
          if (gameMode === 'online') syncDB(finalState); // ★ DB保存を委託
          return finalState;
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [gameState?.player?.hp, gameState?.enemy?.hp, gameState?.battleResult, gameState?.isCoinFlipPhase, gameMode, setGameState]);

  const triggerOverdrawAnim = (card: CardData, isPlayer: boolean) => {
    const id = Math.random();
    setOverdrawnCards(prev => [...prev, { id, card, isPlayer }]);
    setTimeout(() => {
      setOverdrawnCards(prev => prev.filter(c => c.id !== id));
    }, 1500);
  };

  useEffect(() => {
    if (!gameState) return;
    if (gameState.isCoinFlipPhase) {
      if (gameMode === 'online' && !isHost) {
        return;
      }
      setTimeout(() => {
        const playerGoesFirst = Math.random() > 0.5;
        const playerVoltage = getVoltage(playerGoesFirst, 1);
        const enemyVoltage = getVoltage(!playerGoesFirst, 1);
        const playerDraw = getDrawCount(playerGoesFirst, 1);
        const enemyDraw = getDrawCount(!playerGoesFirst, 1);
        
        setGameState((prev: any) => {
          if (!prev) return prev;
          const newPlayer = {
            ...prev.player, isFirstPlayer: playerGoesFirst, maxVoltage: playerVoltage, currentVoltage: playerVoltage, deck: [...prev.player.deck], hand: [...prev.player.hand], discard: [...prev.player.discard],
          };
          const newEnemy = {
            ...prev.enemy, isFirstPlayer: !playerGoesFirst, maxVoltage: enemyVoltage, currentVoltage: enemyVoltage, deck: [...prev.enemy.deck], hand: [...prev.enemy.hand], discard: [...prev.enemy.discard],
          };
          
          for (let i = 0; i < playerDraw; i++) {
            const res = engineDrawCard(newPlayer);
            if (res.overdrawn && res.card) {
                setTimeout(() => triggerOverdrawAnim(res.card as CardData, true), i * 300);
            }
          }
          for (let i = 0; i < enemyDraw; i++) {
            const res = engineDrawCard(newEnemy);
            if (res.overdrawn && res.card) {
                setTimeout(() => triggerOverdrawAnim(res.card as CardData, false), i * 300);
            }
          }
          
          const newState = {
            ...prev, turn: 1, isCoinFlipPhase: false, isPlayerTurn: playerGoesFirst,
            turnBanner: playerGoesFirst ? "YOU FIRST!" : (gameMode === 'cpu' ? "CPU FIRST!" : "ENEMY FIRST!"),
            player: newPlayer, enemy: newEnemy,
          };

          if (gameMode === 'online' && isHost) {
            syncDB(newState); // ★ DB保存を委託
          }
          return newState;
        });
      }, 2000);
    }
  }, [gameState?.isCoinFlipPhase, gameMode, isHost, setGameState]);

  useEffect(() => {
    if (!gameState) return;
    if (!gameState.isCoinFlipPhase && gameState.turnBanner) {
      setTimeout(() => {
        setGameState((prev: any) => prev ? { ...prev, turnBanner: null } : prev);
      }, 2000);
    }
  }, [gameState?.turnBanner, gameState?.isCoinFlipPhase, setGameState]);

  const addDamageText = (x: number, y: number, text: string, color = '#ef4444', cssClass = 'damage-text') => {
    const id = Math.random();
    setDamageTexts(prev => [...prev, { id, x, y, text, color, cssClass }]);
    setTimeout(() => { setDamageTexts(prev => prev.filter(dt => dt.id !== id)); }, 1200);
  };

  const addDrawEffect = (x: number, y: number, text: string) => { addDamageText(x, y, text, '#3b82f6', 'draw-effect-text'); };

  const triggerShake = (target: string) => {
    setGameState((prev: any) => ({ ...prev, animations: { ...prev.animations, [`${target}Shake`]: true } }));
    setTimeout(() => { setGameState((prev: any) => ({ ...prev, animations: { ...prev.animations, [`${target}Shake`]: false } })); }, 500);
  };

  const startTurn = (isPlayer: boolean) => {
    setGameState((prev: any) => {
      const nextGlobalTurn = prev.turn + 1;
      const prevTarget = isPlayer ? prev.enemy : prev.player;
      const newPrevTarget = {
        ...prevTarget,
        buffs: { ...prevTarget.buffs, damageImmune: false, kozueDrawActive: false, sayakaDmgActive: false, doubleNextEffect: false, onyourmark102Active: false, yupYupYupActive: false, damageReflectionActive: false, tookDamageThisTurn: false, tookDamageAmount: 0, tookDamageCount: 0, turnCardsPlayed: [], turnCardsPlayedDetails: [] }
      };
      
      const target = isPlayer ? prev.player : prev.enemy;
      const amIFirstPlayer = target.isFirstPlayer === true;
      const newMax = getVoltage(amIFirstPlayer, nextGlobalTurn);
      const drawCount = getDrawCount(amIFirstPlayer, nextGlobalTurn);
      
      let newTarget = {
        ...target, maxVoltage: newMax, currentVoltage: newMax, deck: [...target.deck], hand: [...target.hand], discard: [...target.discard],
        buffs: { ...target.buffs, damageImmune: false, kozueDrawActive: false, sayakaDmgActive: false, doubleNextEffect: false, onyourmark102Active: false, yupYupYupActive: false, damageReflectionActive: false, tookDamageThisTurn: false, tookDamageAmount: 0, nextCardCostDown: 0, turnCardsPlayed: [], turnCardsPlayedDetails: [] }
      };

      if (newTarget.buffs.cannotDrawNextTurn) {
        newTarget.buffs.cannotDrawNextTurn = false;
        return {
          ...prev, isPlayerTurn: isPlayer, turnBanner: isPlayer ? "YOUR TURN (NO DRAW)" : (gameMode === 'cpu' ? "CPU TURN (NO DRAW)" : "ENEMY TURN (NO DRAW)"),
          setlist: [], enemyPlayedCard: null, player: isPlayer ? newTarget : newPrevTarget, enemy: isPlayer ? newPrevTarget : newTarget, turn: nextGlobalTurn
        };
      }
      
      if (newPrevTarget.buffs.setEnemyVoltage3) { newTarget.currentVoltage = 3; newPrevTarget.buffs.setEnemyVoltage3 = false; }
      
      for (let i = 0; i < drawCount; i++) { 
        const res = engineDrawCard(newTarget);
        if (res.overdrawn && res.card) {
            setTimeout(() => triggerOverdrawAnim(res.card as CardData, isPlayer), i * 300);
        }
      }
      
      return {
        ...prev, isPlayerTurn: isPlayer, turnBanner: isPlayer ? "YOUR TURN" : (gameMode === 'cpu' ? "CPU TURN" : "ENEMY TURN"),
        setlist: [], enemyPlayedCard: null, player: isPlayer ? newTarget : newPrevTarget, enemy: isPlayer ? newPrevTarget : newTarget, turn: nextGlobalTurn
      };
    });
  };

  const endTurnPlayer = () => {
    if (!gameState.isPlayerTurn || gameState.player.hp <= 0 || gameState.enemy.hp <= 0) return;

    if (gameState.player.buffs.yupYupYupActive) {
      setGameState((prev: any) => {
        const next = { ...prev, player: { ...prev.player, hand: [...prev.player.hand], deck: [...prev.player.deck], discard: [...prev.player.discard] } };
        for (let i = 0; i < prev.player.currentVoltage; i++) { 
          const res = engineDrawCard(next.player); 
          if (res.overdrawn && res.card) {
              setTimeout(() => triggerOverdrawAnim(res.card as CardData, true), i * 200);
          }
        }
        return next;
      });
    }

    setGameState((prev: any) => {
      const queued = prev.player.buffs.queuedEndTurnEffects;
      if (!queued || queued.length === 0) return prev;
      
      const newPlayer = { ...prev.player, deck: [...prev.player.deck], hand: [...prev.player.hand], discard: [...prev.player.discard], buffs: { ...prev.player.buffs, queuedEndTurnEffects: [] } };
      
      queued.forEach((effect: any) => {
        if (effect.type === 'draw_voltage') {
          for (let i = 0; i < newPlayer.currentVoltage; i++) { 
            const res = engineDrawCard(newPlayer); 
            if (res.overdrawn && res.card) setTimeout(() => triggerOverdrawAnim(res.card as CardData, true), i * 200);
          }
        } else if (effect.type === 'draw_specific' && effect.name) {
          const idx = newPlayer.deck.findIndex((c: any) => c.曲名 === effect.name);
          if (idx !== -1) {
            const [found] = newPlayer.deck.splice(idx, 1);
            if (found) {
                if (newPlayer.hand.length >= 8) {
                   newPlayer.discard.push(found);
                   setTimeout(() => triggerOverdrawAnim(found, true), 300);
                } else newPlayer.hand.push(found);
            }
          } else {
            const dIdx = newPlayer.discard.findIndex((c: any) => c.曲名 === effect.name);
            if (dIdx !== -1) {
              const [found] = newPlayer.discard.splice(dIdx, 1);
              if (found) {
                  if (newPlayer.hand.length >= 8) {
                     newPlayer.discard.push(found);
                     setTimeout(() => triggerOverdrawAnim(found, true), 300);
                  } else newPlayer.hand.push(found);
              }
            }
          }
        } else if (effect.type === 'heal' && effect.value) {
          newPlayer.hp = Math.min(newPlayer.maxHp, newPlayer.hp + effect.value);
        }
      });
      return { ...prev, player: newPlayer };
    });

    setGameState((prev: any) => {
      const lastPlayed = prev.setlist[prev.setlist.length - 1];
      if (lastPlayed && lastPlayed.owner === 'player' && lastPlayed.card.曲名 === 'Dream Believers') {
        const deckIdx = prev.player.deck.findIndex((c: any) => c.曲名 === 'Dream Believers');
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
    if (gameState.isPlayerTurn && !gameState.isCoinFlipPhase && !gameState.turnBanner && gameState.player.hp > 0 && gameState.enemy.hp > 0 && !gameState.isAnimating && !selectFromDiscard) {
      const hasPlayable = gameState.player.hand.some((c: any) => gameState.player.currentVoltage >= getCalculatedCost(c, gameState.player));
      const canUseSP = !gameState.player.specialUsed;
      if (!hasPlayable && !canUseSP) {
        const t = setTimeout(() => endTurnPlayer(), 800);
        return () => clearTimeout(t);
      }
    }
  }, [gameState?.isPlayerTurn, gameState?.player?.currentVoltage, gameState?.player?.hand?.length, gameState?.player?.specialUsed, gameState?.turnBanner, gameState?.isCoinFlipPhase, gameState?.isAnimating, selectFromDiscard]);

  useEffect(() => {
    if (!gameState || gameMode !== 'cpu') return;
    if (!gameState.isCoinFlipPhase && !gameState.isPlayerTurn && gameState.enemy.hp > 0 && gameState.player.hp > 0 && !gameState.turnBanner && !gameState.isAnimating) {
      cpuTurnRef.current = setTimeout(() => { playEnemyTurn(); }, 1500);
      return () => clearTimeout(cpuTurnRef.current);
    }
  }, [gameState?.isPlayerTurn, gameState?.enemy?.currentVoltage, gameState?.enemy?.hand?.length, gameState?.turnBanner, gameState?.isCoinFlipPhase, gameState?.isAnimating, gameMode]);

  const playEnemyTurn = () => {
    const { enemy } = gameState;
    const affordable = enemy.hand.filter((c: any) => getCalculatedCost(c, enemy) <= enemy.currentVoltage);
    
    if (affordable.length > 0) {
      const cardToPlay = affordable[Math.floor(Math.random() * affordable.length)];
      playCard(cardToPlay, false);
    } else {
      if (enemy.buffs.yupYupYupActive) {
        setGameState((prev: any) => {
          const next = { ...prev, enemy: { ...prev.enemy, hand: [...prev.enemy.hand], deck: [...prev.enemy.deck], discard: [...prev.enemy.discard] } };
          for (let i = 0; i < prev.enemy.currentVoltage; i++) { 
             const res = engineDrawCard(next.enemy); 
             if (res.overdrawn && res.card) setTimeout(() => triggerOverdrawAnim(res.card as CardData, false), i * 300);
          }
          return next;
        });
      }
      setGameState((prev: any) => {
        const queued = prev.enemy.buffs.queuedEndTurnEffects;
        if (!queued || queued.length === 0) return prev;
        
        const newEnemy = { ...prev.enemy, deck: [...prev.enemy.deck], hand: [...prev.enemy.hand], discard: [...prev.enemy.discard], buffs: { ...prev.enemy.buffs, queuedEndTurnEffects: [] } };
        
        queued.forEach((effect: any) => {
          if (effect.type === 'draw_voltage') {
            for (let i = 0; i < newEnemy.currentVoltage; i++) { 
               const res = engineDrawCard(newEnemy);
               if (res.overdrawn && res.card) setTimeout(() => triggerOverdrawAnim(res.card as CardData, false), i * 300);
            }
          } else if (effect.type === 'draw_specific' && effect.name) {
            const idx = newEnemy.deck.findIndex((c: any) => c.曲名 === effect.name);
            if (idx !== -1) {
              const [found] = newEnemy.deck.splice(idx, 1);
              if (found) {
                  if (newEnemy.hand.length >= 8) {
                     newEnemy.discard.push(found);
                     setTimeout(() => triggerOverdrawAnim(found, false), 300);
                  } else newEnemy.hand.push(found);
              }
            } else {
              const dIdx = newEnemy.discard.findIndex((c: any) => c.曲名 === effect.name);
              if (dIdx !== -1) {
                const [found] = newEnemy.discard.splice(dIdx, 1);
                if (found) {
                    if (newEnemy.hand.length >= 8) {
                       newEnemy.discard.push(found);
                       setTimeout(() => triggerOverdrawAnim(found, false), 300);
                    } else newEnemy.hand.push(found);
                }
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

  const playCard = (card: CardData, isPlayer: boolean, ignoreCost = false) => {
    if (gameState.isAnimating) return;

    const userCheck = isPlayer ? gameState.player : gameState.enemy;
    const costCheck = getCalculatedCost(card, userCheck);
    if (!ignoreCost && userCheck.currentVoltage < costCheck) return;

    setGameState((prev: any) => {
      const newState = {
        ...prev,
        player: { ...prev.player, buffs: { ...prev.player.buffs, turnCardsPlayed: [...prev.player.buffs.turnCardsPlayed] }, hand: [...prev.player.hand], discard: [...prev.player.discard] },
        enemy: { ...prev.enemy, buffs: { ...prev.enemy.buffs, turnCardsPlayed: [...prev.enemy.buffs.turnCardsPlayed] }, hand: [...prev.enemy.hand], discard: [...prev.enemy.discard] },
        setlist: [...prev.setlist]
      };
      const user = isPlayer ? newState.player : newState.enemy;

      let cost = getCalculatedCost(card, user);
      
      if (!ignoreCost) {
          if (user.currentVoltage < cost) return prev;
          user.currentVoltage -= cost;
          if (user.buffs.nextCardCostDown > 0) user.buffs.nextCardCostDown = 0;
          user.hand = user.hand.filter((c: any) => c.id !== card.id);
      }
      
      user.discard.push(card);
      newState.setlist.push({ card, owner: isPlayer ? 'player' : 'enemy' });
      
      user.buffs.turnCardsPlayed.push(card.曲名);
      if (!user.buffs.turnCardsPlayedDetails) user.buffs.turnCardsPlayedDetails = [];
      user.buffs.turnCardsPlayedDetails.push({ 曲名: card.曲名, 歌唱: card.歌唱, センター: card.センター, uid: card.id });
      
      newState.enemyPlayedCard = !isPlayer ? card : null;
      newState.isAnimating = true;
      return newState;
    });

    setTimeout(() => {
      setGameState((prevState: any) => {
        if (!prevState.isAnimating) return prevState;
        
        const { newState, events } = applyCardEffects(prevState, card, isPlayer);
        
        let effectIndex = 0;
        events.forEach((ev: any) => {
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
              addDrawEffect(window.innerWidth / 2 - 60, baseY, `Draw ${ev.data.count || 1}`);
            }
            if (ev.type === 'discard' || ev.type === 'overdraw') {
              if (ev.data.card) triggerOverdrawAnim(ev.data.card, isPlayer);
            }
            if (ev.type === 'discard_select' && isPlayer) {
              setSelectFromDiscard({ show: true, maxCost: ev.data.maxCost, reason: ev.data.reason, excludeId: ev.data.excludeId });
            }
          }, delay);
        });

        const totalDelay = Math.max(effectIndex * 600, 1000);
        const forceTurnEnd = newState.forceTurnEnd;

        setTimeout(() => {
           setGameState((current: any) => {
             if (!current) return current;
             const finalState = { ...current, isAnimating: false, enemyPlayedCard: null };
             if (gameMode === 'online' && isPlayer) {
               syncDB(finalState); // ★ DB保存を委託
             }
             return finalState;
           });

           if (forceTurnEnd) {
             if (isPlayer) endTurnPlayer();
             else startTurn(true);
           }
        }, totalDelay);

        newState.isAnimating = true;
        if (!isPlayer) newState.enemyPlayedCard = card;

        return newState;
      });
    }, 300);
  };

  const playCardFromDiscard = (card: CardData) => {
    setSelectFromDiscard(null);
    setGameState((prev: any) => {
        const newState = { ...prev };
        const discardIdx = newState.player.discard.findIndex((c: any) => c.id === card.id);
        if (discardIdx !== -1) newState.player.discard.splice(discardIdx, 1);
        return newState;
    });
    playCard(card, true, true);
  };

  const handleRematch = () => {
    if (!gameState) return;
    const playerDeck = buildDeckFromList(gameState.player.originalDeckNames || []);
    const enemyDeck = generateCPUDeck();
    setGameState(createInitialState({ deck: playerDeck, unit: gameState.player.baseUnit }, enemyDeck));
    setDamageTexts([]);
  };

  const handleSpSkill = () => {
    if(!gameState.player.specialUsed && gameState.isPlayerTurn && !gameState.turnBanner) {
        setGameState((prev: any) => {
            const newVoltage = Math.min(prev.player.maxVoltage, prev.player.currentVoltage + 4);
            const newState = {
                ...prev,
                player: { ...prev.player, currentVoltage: newVoltage, specialUsed: true }
            };
            if (gameMode === 'online') syncDB(newState); // ★ DB保存を委託
            return newState;
        });
    }
  };

  // ★ フェーズ4：サレンダー（降参）処理
  const handleSurrender = () => {
    // 誤操作防止の確認ダイアログ
    if (window.confirm("本当に降参しますか？")) {
      setGameState((prev: any) => {
        if (!prev || prev.battleResult) return prev;
        
        // 自分の敗北（LOSE）として状態を更新
        const finalState = { ...prev, battleResult: 'LOSE' };
        
        // オンライン対戦ならDBに即同期（相手画面では反転してWINになる）
        if (gameMode === 'online') {
          syncDB(finalState);
        }
        return finalState;
      });
    }
  };

  return {
    damageTexts,
    showDiscard, setShowDiscard,
    overdrawnCards,
    selectFromDiscard, setSelectFromDiscard,
    endTurnPlayer, playCard, playCardFromDiscard, handleRematch, handleSpSkill,
    handleSurrender // ★この1行を追加！
  };
}; // <- ファイルの末尾