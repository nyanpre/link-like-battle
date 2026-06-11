// src/App.tsx
import { useState, useEffect, useRef } from 'react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck, createOnlineInitialState } from './utils/gameLogic';
import cardData from './data.json';
import './index.css';
import { createRoom, watchRoomsList, joinRoom, setClientReady, startGameInDB, watchRoom } from './utils/firebase';

// ★ 型定義とコンポーネントの読み込み
import { GameState, CardData } from './types';
import { Home } from './components/screens/Home';
import { DeckBuilder } from './components/screens/DeckBuilder';
import { Lobby } from './components/screens/Lobby';
import { WaitingRoom } from './components/screens/WaitingRoom';
import { Battle } from './components/screens/Battle';

function App() {
  // ★ useStateに型を指定して安全に
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

  // 通信対戦のロビールーム監視
  useEffect(() => {
    if (screen === 'lobby') {
      const unsub = watchRoomsList((rooms: any) => setRoomsList(rooms));
      return () => unsub();
    }
  }, [screen]);

  // 通信対戦のゲーム状態監視
  useEffect(() => {
    if (!roomId || (screen !== 'waitingRoom' && screen !== 'battle')) return;
    
    unsubscribeRoomRef.current = watchRoom(roomId, (data: any) => {
      if (!data) return;
      setRoomData(data);

      if (data.status === 'playing' && data.gameState) {
        if (isHost) {
          setGameState(data.gameState);
        } else {
          // クライアント側は画面を反転して表示
          const flippedState = {
            ...data.gameState,
            player: data.gameState.enemy,
            enemy: data.gameState.player,
            isPlayerTurn: !data.gameState.isPlayerTurn,
            setlist: data.gameState.setlist.map((log: any) => ({ ...log, owner: log.owner === 'player' ? 'enemy' : 'player' })),
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
  }, [roomId, isHost, screen]);

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
      
      const newRoomId = await createRoom({ deck: playerDeck, unit: selectedUnit }, playerName);
      setRoomId(newRoomId);
      setIsHost(true);
      setScreen('waitingRoom');
    } catch (error) {
      alert("部屋の作成に失敗しました");
    }
  };

  const handleJoinRoom = async (id: string) => {
    try {
      const playerCardNames: string[] = [];
      Object.entries(deckList).forEach(([name, count]) => {
        for (let i = 0; i < count; i++) playerCardNames.push(name);
      });
      const playerDeck = buildDeckFromList(playerCardNames);
      
      await joinRoom(id, { deck: playerDeck, unit: selectedUnit }, playerName);
      setRoomId(id);
      setIsHost(false);
      setScreen('waitingRoom');
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