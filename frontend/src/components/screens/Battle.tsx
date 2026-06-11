// src/components/screens/Battle.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone } from 'lucide-react';
import { getCalculatedCost, applyCardEffects, drawCard as engineDrawCard } from '../../utils/battleEngine';
import { buildDeckFromList, generateCPUDeck, createInitialState } from '../../utils/gameLogic';
import { updateGameStateToDB } from '../../utils/firebase';

// ★ 切り出したUIコンポーネントと型定義
import { GameState, CardData } from '../../types';
import { StandardCard } from '../ui/Card';
import { PlayerStatus } from '../ui/PlayerStatus';
import { PlayerHand } from '../ui/PlayerHand';
import { CardPreviewModal } from '../ui/CardPreviewModal';
import { DiscardModal } from '../ui/DiscardModal';
import { BattleResultOverlay } from '../ui/BattleResultOverlay';
import { VoltageSidebar } from '../ui/VoltageSidebar';
import { SetlistBoard } from '../ui/SetlistBoard';
import { ActionControls } from '../ui/ActionControls';

// ボルテージとドローの定義
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

// ★ Propsの型を厳密に定義
interface BattleProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
  gameMode: string | null;
  roomId: string;
  isHost: boolean;
  setScreen: (screen: string) => void;
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData | null) => void;
}

export const Battle: React.FC<BattleProps> = ({
  gameState, setGameState, gameMode, roomId, isHost, setScreen, selectedCard, setSelectedCard
}) => {
  // ★ 内部のStateも型を定義
  const [damageTexts, setDamageTexts] = useState<{id: number, x: number, y: number, text: string, color: string, cssClass: string}[]>([]);
  const [showDiscard, setShowDiscard] = useState<{ show: boolean, owner: 'player' | 'enemy' | null }>({ show: false, owner: null });
  const cpuTurnRef = useRef<any>(null);

  // --- バトルロジック ---
  useEffect(() => {
    if (!gameState) return;
    if (gameState.isCoinFlipPhase) {
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
  }, [gameState?.isCoinFlipPhase, gameMode, setGameState]);

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

  const drawCard = (userState: any, ownerStr: string) => {
    if (userState.deck.length === 0) {
      setTimeout(() => alert(ownerStr === 'player' ? "DECK OUT! YOU LOSE..." : "DECK OUT! YOU WIN!"), 500);
      userState.hp = 0; 
      return false;
    }
    const card = userState.deck.shift();
    if (userState.hand.length >= 8) { userState.discard.push(card); } else { userState.hand.push(card); }
    return true;
  };

  const startTurn = (isPlayer: boolean) => {
    setGameState((prev: any) => {
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
      setGameState((prev: any) => {
        const next = { ...prev, player: { ...prev.player, hand: [...prev.player.hand], deck: [...prev.player.deck], discard: [...prev.player.discard] } };
        for (let i = 0; i < prev.player.currentVoltage; i++) { engineDrawCard(next.player); }
        return next;
      });
    }

    setGameState((prev: any) => {
      const queued = prev.player.buffs.queuedEndTurnEffects;
      if (!queued || queued.length === 0) return prev;
      
      const newPlayer = { ...prev.player, deck: [...prev.player.deck], hand: [...prev.player.hand], discard: [...prev.player.discard], buffs: { ...prev.player.buffs, queuedEndTurnEffects: [] } };
      
      queued.forEach((effect: any) => {
        if (effect.type === 'draw_voltage') {
          for (let i = 0; i < newPlayer.currentVoltage; i++) { engineDrawCard(newPlayer); }
        } else if (effect.type === 'draw_specific' && effect.name) {
          const idx = newPlayer.deck.findIndex((c: any) => c.曲名 === effect.name);
          if (idx !== -1) {
            const [found] = newPlayer.deck.splice(idx, 1);
            if (newPlayer.hand.length >= 8) newPlayer.discard.push(found);
            else newPlayer.hand.push(found);
          } else {
            const dIdx = newPlayer.discard.findIndex((c: any) => c.曲名 === effect.name);
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
    if (gameState.isPlayerTurn && !gameState.isCoinFlipPhase && !gameState.turnBanner && gameState.player.hp > 0 && gameState.enemy.hp > 0) {
      const hasPlayable = gameState.player.hand.some((c: any) => gameState.player.currentVoltage >= getCalculatedCost(c, gameState.player));
      const canUseSP = !gameState.player.specialUsed;
      if (!hasPlayable && !canUseSP) {
        const t = setTimeout(() => endTurnPlayer(), 800);
        return () => clearTimeout(t);
      }
    }
  }, [gameState?.isPlayerTurn, gameState?.player?.currentVoltage, gameState?.player?.hand?.length, gameState?.player?.specialUsed, gameState?.turnBanner, gameState?.isCoinFlipPhase]);

  useEffect(() => {
    if (!gameState || gameMode !== 'cpu') return;
    if (!gameState.isCoinFlipPhase && !gameState.isPlayerTurn && gameState.enemy.hp > 0 && gameState.player.hp > 0 && !gameState.turnBanner) {
      cpuTurnRef.current = setTimeout(() => { playEnemyTurn(); }, 1500);
      return () => clearTimeout(cpuTurnRef.current);
    }
  }, [gameState?.isPlayerTurn, gameState?.enemy?.currentVoltage, gameState?.turnBanner, gameState?.isCoinFlipPhase, gameMode]);

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
          for (let i = 0; i < prev.enemy.currentVoltage; i++) { engineDrawCard(next.enemy); }
          return next;
        });
      }
      setGameState((prev: any) => {
        const queued = prev.enemy.buffs.queuedEndTurnEffects;
        if (!queued || queued.length === 0) return prev;
        
        const newEnemy = { ...prev.enemy, deck: [...prev.enemy.deck], hand: [...prev.enemy.hand], discard: [...prev.enemy.discard], buffs: { ...prev.enemy.buffs, queuedEndTurnEffects: [] } };
        
        queued.forEach((effect: any) => {
          if (effect.type === 'draw_voltage') {
            for (let i = 0; i < newEnemy.currentVoltage; i++) { engineDrawCard(newEnemy); }
          } else if (effect.type === 'draw_specific' && effect.name) {
            const idx = newEnemy.deck.findIndex((c: any) => c.曲名 === effect.name);
            if (idx !== -1) {
              const [found] = newEnemy.deck.splice(idx, 1);
              if (newEnemy.hand.length >= 8) newEnemy.discard.push(found);
              else newEnemy.hand.push(found);
            } else {
              const dIdx = newEnemy.discard.findIndex((c: any) => c.曲名 === effect.name);
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

  const playCard = (card: CardData, isPlayer: boolean) => {
    setGameState((prev: any) => {
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
      user.hand = user.hand.filter((c: any) => c.id !== card.id);
      user.discard.push(card);
      newState.setlist.push({ card, owner: isPlayer ? 'player' : 'enemy' });
      user.buffs.turnCardsPlayed.push(card.曲名);
      
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
          setGameState((current: any) => {
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
            if (gameMode === 'online') updateGameStateToDB(roomId, newState);
            return newState;
        });
    }
  };

  if (!gameState) return null;

  // --- UI部分 ---
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
          {gameState.enemy.hand.map((_: any, i: number) => (
            <div key={i} className="enemy-card-back"></div>
          ))}
        </div>

        {/* 1. ボルテージサイドバー */}
        <VoltageSidebar player={gameState.player} enemy={gameState.enemy} />

        <div className="board-area">
          {/* 敵ステータス */}
          <PlayerStatus 
            data={gameState.enemy} 
            isEnemy={true} 
            isShaking={gameState.animations.enemyShake} 
            onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
          />

          {/* 2. セットリスト（プレイ履歴） */}
          <SetlistBoard gameState={gameState} />

          {/* プレイヤーステータス */}
          <PlayerStatus 
            data={gameState.player} 
            isEnemy={false} 
            isShaking={gameState.animations.playerShake} 
            onDiscardClick={(owner) => setShowDiscard({ show: true, owner: owner as 'player' | 'enemy' })} 
          />
        </div>

        {/* 3. アクションコントロール（SPスキル / END TURN） */}
        <ActionControls 
          gameState={gameState} 
          handleSpSkill={handleSpSkill} 
          endTurnPlayer={endTurnPlayer} 
        />

        <PlayerHand gameState={gameState} setSelectedCard={setSelectedCard} />

        {/* モーダル・オーバーレイ群 */}
        <CardPreviewModal selectedCard={selectedCard} gameState={gameState} playCard={playCard} setSelectedCard={setSelectedCard} />
        <DiscardModal showDiscard={showDiscard} setShowDiscard={setShowDiscard} gameState={gameState} />
        <BattleResultOverlay gameState={gameState} gameMode={gameMode} isHost={isHost} roomId={roomId} handleRematch={handleRematch} setScreen={setScreen} />
      </div>
    </>
  );
};