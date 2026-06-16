// src/components/screens/Battle.tsx
import React, { useEffect, useState } from 'react'; // ★ useStateを追加
import { GameState, CardData } from '../../types';
import { useBattleLogic } from '../../hooks/useBattleLogic';
import { BattleBoard } from './BattleBoard';
import { updateGameStateToDB } from '../../utils/firebase';

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

export const Battle: React.FC<BattleProps> = (props) => {
  const isGuest = props.gameMode === 'online' && !props.isHost;
  
  // ★ フェーズ3：カウントダウン用のステート
  const [disconnectCount, setDisconnectCount] = useState<number | null>(null);

  // 1. ゲスト用に生データを反転させる魔法の関数
  const flipState = (state: GameState | null) => {
    if (!state) return state;
    return {
      ...state,
      player: state.enemy,   
      enemy: state.player,   
      isPlayerTurn: !state.isPlayerTurn, 
      turnBanner: state.turnBanner?.includes("YOU") ? state.turnBanner.replace("YOU", "ENEMY") :
                  state.turnBanner?.includes("YOUR") ? state.turnBanner.replace("YOUR", "ENEMY") :
                  state.turnBanner?.includes("ENEMY") && state.turnBanner.includes("TURN") ? state.turnBanner.replace("ENEMY", "YOUR") :
                  state.turnBanner?.includes("ENEMY") ? state.turnBanner.replace("ENEMY", "YOU") : state.turnBanner
    };
  };

  // ★ 自分が画面に戻ってきた時（復帰時）、自分の切断フラグが立っていたら下ろす（DBに復帰を通知）
  useEffect(() => {
    if (props.gameMode !== 'online' || !props.roomId || !props.gameState || props.gameState.battleResult) return;

    const amIDisconnected = props.isHost ? props.gameState.hostDisconnected : props.gameState.guestDisconnected;
    if (amIDisconnected) {
      props.setGameState((current: any) => {
        if (!current || current.battleResult) return current;
        const nextState = {
          ...current,
          hostDisconnected: props.isHost ? false : current.hostDisconnected,
          guestDisconnected: !props.isHost ? false : current.guestDisconnected,
        };
        updateGameStateToDB(props.roomId, nextState); // 復帰を相手に知らせる
        return nextState;
      });
    }
  }, [props.gameState?.hostDisconnected, props.gameState?.guestDisconnected, props.isHost, props.gameMode, props.roomId]);

  // ★ 自分がブラウザを閉じた（または戻った）時に切断フラグをDBに即時書き込む
  useEffect(() => {
    if (props.gameMode !== 'online' || !props.roomId || props.gameState?.battleResult) return;

    const handleDisconnect = () => {
      props.setGameState((current: any) => {
        if (!current || current.battleResult) return current;
        const nextState = {
          ...current,
          hostDisconnected: props.isHost ? true : current.hostDisconnected || false,
          guestDisconnected: !props.isHost ? true : current.guestDisconnected || false,
        };
        updateGameStateToDB(props.roomId, nextState);
        return nextState;
      });
    };

    window.addEventListener('beforeunload', handleDisconnect);
    return () => {
      window.removeEventListener('beforeunload', handleDisconnect);
    };
  }, [props.gameMode, props.roomId, props.isHost, props.gameState?.battleResult]);

  // ★ 「相手の切断」を検知して60秒の猶予タイマーを起動・管理する
  useEffect(() => {
    if (props.gameMode !== 'online' || !props.gameState || props.gameState.battleResult) return;

    const isOpponentDisconnected = props.isHost 
      ? props.gameState.guestDisconnected 
      : props.gameState.hostDisconnected;

    if (isOpponentDisconnected) {
      // 切断を検知したら60秒セットしてカウントダウン開始
      setDisconnectCount(60);

      const interval = setInterval(() => {
        setDisconnectCount((prev) => {
          if (prev === null) return null;
          
          // タイムアップ！（0秒になったら勝利）
          if (prev <= 1) {
            clearInterval(interval);
            props.setGameState((prevDB: any) => {
              if (!prevDB || prevDB.battleResult) return prevDB;
              const finalResult = props.isHost ? 'WIN' : 'LOSE';
              const finalState = { ...prevDB, battleResult: finalResult };
              updateGameStateToDB(props.roomId, finalState);
              return finalState;
            });
            return 0;
          }
          return prev - 1; // 1秒減らす
        });
      }, 1000);

      return () => clearInterval(interval);
    } else {
      // 相手が復帰した（または切断していない）場合はタイマーをリセット
      setDisconnectCount(null);
    }
  }, [props.gameState?.hostDisconnected, props.gameState?.guestDisconnected, props.isHost, props.gameMode, props.roomId]);

  // 2. 自分がゲストなら、反転させたデータを使う
  const localGameState = isGuest ? flipState(props.gameState) : props.gameState;

  // ★ 相手が切断状態の場合、UIフックを利用して特別バナー（残り秒数）を割り込ませる
  if (localGameState && props.gameState) {
    const isOpponentDisconnected = props.isHost ? props.gameState.guestDisconnected : props.gameState.hostDisconnected;
    if (isOpponentDisconnected && !props.gameState.battleResult && disconnectCount !== null) {
      localGameState.turnBanner = `相手の通信が切断されました。復帰を待っています... (残り${disconnectCount}秒)`;
    }
  }

  // 3. ロジック（頭脳）を呼び出す
  const logic = useBattleLogic({
    ...props,
    gameState: localGameState as GameState, 
    setGameState: (action: any) => {
      props.setGameState((realPrev: any) => {
        if (!isGuest) return typeof action === 'function' ? action(realPrev) : action;
        const fakePrev = flipState(realPrev);
        const fakeNext = typeof action === 'function' ? action(fakePrev) : action;
        return flipState(fakeNext) as GameState;
      });
    },
    syncDB: (fakedState: GameState) => {
      const realState = isGuest ? flipState(fakedState) : fakedState;
      updateGameStateToDB(props.roomId, realState as GameState);
    }
  });

  if (!localGameState) return null;

  // 4. 操作の完全な排他制御（相手が切断中の間は操作もロックする）
  const isMyTurn = localGameState.isPlayerTurn && !localGameState.turnBanner && !localGameState.isCoinFlipPhase && !localGameState.isAnimating && disconnectCount === null;

  const safeLogic = {
    ...logic,
    playCard: (card: CardData, isPlayer: boolean, ignoreCost?: boolean) => {
      if (isPlayer && !isMyTurn && !ignoreCost) return; 
      logic.playCard(card, isPlayer, ignoreCost);
    },
    endTurnPlayer: () => {
      if (!isMyTurn) return;
      logic.endTurnPlayer();
    },
    handleSpSkill: () => {
      if (!isMyTurn) return;
      logic.handleSpSkill();
    }
  };

  // 5. 安全になったデータと操作関数を、UI（BattleBoard）に流し込む
  return <BattleBoard {...props} gameState={localGameState} {...safeLogic} />;
};