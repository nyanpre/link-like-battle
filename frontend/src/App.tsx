// src/App.tsx
import { useState, useEffect, useRef } from 'react';
import { createInitialState, getAvailableCards, buildDeckFromList, STARTER_DECKS, generateCPUDeck, createOnlineInitialState } from './utils/gameLogic';
import cardData from './data.json';
import './index.css';

// ★ Firebase関連のインポートを1つに綺麗にまとめました
import { createRoom, watchRoomsList, joinRoom, startGameInDB, watchRoom, watchAuthState } from './utils/firebase';

import { GameState, CardData } from './types';
import { Home } from './components/screens/Home';
import { DeckBuilder } from './components/screens/DeckBuilder';
import { Lobby } from './components/screens/Lobby';
import { WaitingRoom } from './components/screens/WaitingRoom';
import { Battle } from './components/screens/Battle';

// ★ ログイン画面のインポート
import { Auth } from './components/screens/Auth';

// ==========================================
// ★ 追加：BGM関連のインポート
// ==========================================
import { BGMProvider } from './context/BGMContext';
import { BGMController } from './components/ui/BGMController';

// Firebaseの罠（空の配列を勝手に消す仕様）対策：データを安全な形に修復する関数
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
  // ==========================================
  // ★ 追加：認証（ログイン）用のステート
  // ==========================================
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

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

  // ==========================================
  // ★ 追加：起動時にログイン状態をチェックする
  // ==========================================
  useEffect(() => {
    const unsubscribe = watchAuthState((currentUser) => {
      setUser(currentUser);
      setAuthLoading(false); // チェック完了
    });
    return () => unsubscribe();
  }, []);

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

  // 通信対戦のゲーム状態監視
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
        const safeState = sanitizeGameState(data.gameState);
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

  // ==========================================
  // ===== 画面の出し分け =====
  // ==========================================
  
  const renderContent = () => {
    // 1. Firebaseにログイン状態を確認している間のローディング画面
    if (authLoading) {
      return <div style={{ height: '100%', width: '100%', backgroundColor: '#111827', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>Loading...</div>;
    }

    // 2. ログインしていない場合は必ずログイン画面を表示
    if (!user) {
      return <Auth />;
    }

    // 3. ログイン済みなら各画面を表示
    if (screen === 'home') {
      return <Home playerName={playerName} setPlayerName={setPlayerName} setGameMode={setGameMode as any} setScreen={setScreen as any} user={user} />;
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
          user={user}
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
  };

  return (
    // ★ 変更ポイント：全体のラッパーの内側に BGMProvider と BGMController を配置
    // ログイン画面の時（!user）やローディング時はコントローラーを表示しないよう制御します
    <div className="app-wrapper">
      {(!authLoading && user) ? (
        <BGMProvider>
          <BGMController />
          {renderContent()}
        </BGMProvider>
      ) : (
        renderContent()
      )}
    </div>
  );
}

export default App;