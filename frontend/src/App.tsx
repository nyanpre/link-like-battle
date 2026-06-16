// src/App.tsx
import { useState, useEffect, useRef } from 'react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck, createOnlineInitialState } from './utils/gameLogic';
import cardData from './data.json';
import './index.css';
import { createRoom, watchRoomsList, joinRoom, startGameInDB, watchRoom } from './utils/firebase';

import { GameState, CardData } from './types';
import { Home } from './components/screens/Home';
import { DeckBuilder } from './components/screens/DeckBuilder';
import { Lobby } from './components/screens/Lobby';
import { WaitingRoom } from './components/screens/WaitingRoom';
import { Battle } from './components/screens/Battle';

// ★ Firebaseの罠（空の配列を勝手に消す仕様）対策：データを安全な形に修復する関数
const sanitizeGameState = (state: any): GameState => {
  if (!state) return state;
  return {
    ...state,
    setlist: state.setlist || [],
    animations: state.animations || {},
    player: {
      ...state.player,
      hand: state.player?.hand || [],
      deck: state.player?.deck || [],
      discard: state.player?.discard || [],
      buffs: {
        ...state.player?.buffs,
        turnCardsPlayed: state.player?.buffs?.turnCardsPlayed || [],
        turnCardsPlayedDetails: state.player?.buffs?.turnCardsPlayedDetails || [],
        queuedEndTurnEffects: state.player?.buffs?.queuedEndTurnEffects || [],
      }
    },
    enemy: {
      ...state.enemy,
      hand: state.enemy?.hand || [],
      deck: state.enemy?.deck || [],
      discard: state.enemy?.discard || [],
      buffs: {
        ...state.enemy?.buffs,
        turnCardsPlayed: state.enemy?.buffs?.turnCardsPlayed || [],
        turnCardsPlayedDetails: state.enemy?.buffs?.turnCardsPlayedDetails || [],
        queuedEndTurnEffects: state.enemy?.buffs?.queuedEndTurnEffects || [],
      }
    }
  };
};

function App() {
  const [screen, setScreen] = useState<string>('home');
  const [playerName, setPlayerName] = useState<string>('');
  const [gameMode, setGameMode] = useState<'cpu' | 'online' | null>(null);

  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [deckList, setDeckList] = useState<Record<string, number>>({});
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  
  const [roomId, setRoomId] = useState<string>('');
  const [isHost, setIsHost] = useState<boolean>(false);
  const [roomsList, setRoomsList] = useState<any[]>([]);
  const [roomData, setRoomData] = useState<any>(null);

  const unsubscribeRoomRef = useRef<any>(null);

  // リコネクト機能：起動時にセッションが残っていれば自動復帰する
  useEffect(() => {
    const sessionStr = localStorage.getItem('battleSession');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session.roomId) {
          setRoomId(session.roomId);
          setIsHost(session.isHost);
          if (session.playerName) setPlayerName(session.playerName);
          if (session.gameMode) setGameMode(session.gameMode);
          setScreen('waitingRoom'); 
        }
      } catch (e) {
        console.error('Session parse error:', e);
      }
    }
  }, []);

  // リコネクト機能：ホーム画面に戻った時は完全にセッションを初期化する
  useEffect(() => {
    if (screen === 'home') {
      localStorage.removeItem('battleSession');
      setRoomId('');
      setRoomData(null);
      setGameState(null);
      if (unsubscribeRoomRef.current) {
        unsubscribeRoomRef.current();
        unsubscribeRoomRef.current = null;
      }
    }
  }, [screen]);

  // 通信対戦のロビールーム監視
  useEffect(() => {
    if (screen === 'lobby') {
      const unsub = watchRoomsList((rooms: any) => setRoomsList(rooms));
      return () => unsub();
    }
  }, [screen]);

  // ★ 修正：通信対戦のゲーム状態監視
  useEffect(() => {
    if (!roomId || (screen !== 'waitingRoom' && screen !== 'battle')) return;
    
    unsubscribeRoomRef.current = watchRoom(roomId, (data: any) => {
      if (!data) {
        alert("対戦ルームが既に終了または解散されています。");
        setScreen('home');
        return;
      }
      setRoomData(data);

      if (data.status === 'playing' && data.gameState) {
        // ① Firebaseに消された「空の配列」を修復！これで白画面を防ぎます。
        const safeState = sanitizeGameState(data.gameState);
        
        // ② App.tsxの中での「反転処理（flip）」は削除。そのまま丸投げします。（反転はBattle.tsxが勝手にやってくれます）
        setGameState(safeState);
        
        if (screen !== 'battle') setScreen('battle');
      }
    });

    return () => {
      if (unsubscribeRoomRef.current) unsubscribeRoomRef.current();
    };
  }, [roomId, screen]);

  // デッキ構築用ロジック
  const availableCards = selectedUnit ? getAvailableCards(selectedUnit) : [];
  const deckTotal = Object.values(deckList).reduce((s: number, n: number) => s + n, 0);

  const addCardToDeck = (cardName: string) => {
    if (deckTotal >= 30) return;
    const current: number = deckList[cardName] || 0;
    if (current >= 3) return;
    if (cardName === 'On your mark(102期Ver.)' && current >= 2) {
      alert('「On your mark(102期Ver.)」はデッキに2枚までしか入れられません。');
      return;
    }
    setDeckList(prev => ({ ...prev, [cardName]: current + 1 }));
  };

  const removeCardFromDeck = (cardName: string) => {
    const current: number = deckList[cardName] || 0;
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
    const starter = (STARTER_DECKS as any)[selectedUnit];
    const counts: Record<string, number> = {};
    starter.forEach((name: string) => { counts[name] = (counts[name] || 0) + 1; });
    setDeckList(counts);
  };

  const handleDeckComplete = () => {
    if (gameMode === 'cpu') {
      const playerCardNames: string[] = [];
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

  // Firebase通信対戦用のルーム作成・参加ロジック
  const handleCreateRoom = async () => {
    try {
      const playerCardNames: string[] = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      const newRoomId = await createRoom({ deck: playerDeck, unit: selectedUnit || '' }, playerName);
      setRoomId(newRoomId);

      setIsHost(true);
      setScreen('waitingRoom');
      localStorage.setItem('battleSession', JSON.stringify({ roomId: newRoomId, isHost: true, playerName, gameMode: 'online' }));
    } catch (error: any) {
      console.error("部屋作成エラーの詳細:", error);
      alert("部屋の作成に失敗しました:\n" + error.message);
    }
  };

  const handleJoinRoom = async (id: string) => {
    try {
      const playerCardNames: string[] = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      
      // unit: selectedUnit || '' に変更
      await joinRoom(id, { deck: playerDeck, unit: selectedUnit || '' }, playerName);
      setRoomId(id);
      setIsHost(false);
      setScreen('waitingRoom');
      localStorage.setItem('battleSession', JSON.stringify({ roomId: id, isHost: false, playerName, gameMode: 'online' }));
    } catch (error: any) {
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

  // マナカーブの計算
  const manaCurve = [0, 0, 0, 0, 0, 0, 0, 0];
  Object.entries(deckList).forEach(([name, count]) => {
    const card = cardData.find(c => c.曲名 === name);
    const cost = Math.min(Number(card?.コスト) || 0, 7);
    manaCurve[cost] += count;
  });
  const maxManaCount = Math.max(1, ...manaCurve);

  // ===== 画面の出し分け =====
  if (screen === 'home') {
    return <Home playerName={playerName} setPlayerName={setPlayerName} setGameMode={setGameMode as any} setScreen={setScreen as any} />;
  }

  if (screen === 'lobby') {
    return <Lobby roomsList={roomsList} handleCreateRoom={handleCreateRoom} handleJoinRoom={handleJoinRoom} setScreen={setScreen} />;
  }

  if (screen === 'waitingRoom') {
    return <WaitingRoom isHost={isHost} playerName={playerName} roomData={roomData} roomId={roomId} handleHostStartGame={handleHostStartGame} />;
  }

  if (screen === 'deckBuilder') {
    return (
      <DeckBuilder
        gameMode={gameMode} setScreen={setScreen} deckTotal={deckTotal} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}
        manaCurve={manaCurve} maxManaCount={maxManaCount} handleDeckComplete={handleDeckComplete} loadStarterDeck={loadStarterDeck}
        deckList={deckList} setDeckList={setDeckList} availableCards={availableCards} selectedCard={selectedCard} setSelectedCard={setSelectedCard}
        removeCardFromDeck={removeCardFromDeck} addCardToDeck={addCardToDeck}
      />
    );
  }

  if (screen === 'battle' && gameState) {
    return (
      <Battle
        gameState={gameState} setGameState={setGameState} gameMode={gameMode} roomId={roomId} isHost={isHost}
        setScreen={setScreen} selectedCard={selectedCard} setSelectedCard={setSelectedCard}
      />
    );
  }

  return null;
}

export default App;