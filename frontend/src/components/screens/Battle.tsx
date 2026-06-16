// src/components/screens/Battle.tsx
import React, { useEffect } from 'react';
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

  // ★ フェーズ3：自分がブラウザを閉じた（または戻った）時に切断フラグをDBに即時書き込む
  useEffect(() => {
    if (props.gameMode !== 'online' || !props.roomId || props.gameState?.battleResult) return;

    const handleDisconnect = () => {
      props.setGameState((current: any) => {
        if (!current || current.battleResult) return current;

        const nextState = {
          ...current,
          // 自分が属する側の切断フラグを真にする
          hostDisconnected: props.isHost ? true : current.hostDisconnected || false,
          guestDisconnected: !props.isHost ? true : current.guestDisconnected || false,
        };

        // Firebase（DB）へ即座に送信して、自分は退出する
        updateGameStateToDB(props.roomId, nextState);
        return nextState;
      });
    };

    // ブラウザのタブ閉じ・リロードを監視
    window.addEventListener('beforeunload', handleDisconnect);
    
    // ページ遷移（アンマウント）時も切断処理を走らせるクリーンアップ
    return () => {
      window.removeEventListener('beforeunload', handleDisconnect);
    };
  }, [props.gameMode, props.roomId, props.isHost, props.gameState?.battleResult]);

  // ★ フェーズ3：「相手が切断したこと」をリアルタイムに検知して、自動的に自分を勝利にする処理
  useEffect(() => {
    if (props.gameMode !== 'online' || !props.gameState || props.gameState.battleResult) return;

    // 自分から見て、通信相手のフラグが立っているかチェック
    const isOpponentDisconnected = props.isHost 
      ? props.gameState.guestDisconnected 
      : props.gameState.hostDisconnected;

    if (isOpponentDisconnected) {
      // 1秒間の猶予（バナー表示用）を持たせて、自動勝利を確定させる
      const timer = setTimeout(() => {
        props.setGameState((prev: any) => {
          if (!prev || prev.battleResult) return prev;
          
          // 【超重要】DB上の生データ（ホスト視点）での勝敗を決定する
          // ホストが残ったなら生データは「WIN」。ゲストが残ったなら生データは「LOSE」（ゲスト画面で反転してWINになる）
          const finalResult = props.isHost ? 'WIN' : 'LOSE';
          
          const finalState = { ...prev, battleResult: finalResult };
          updateGameStateToDB(props.roomId, finalState);
          return finalState;
        });
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [props.gameState?.hostDisconnected, props.gameState?.guestDisconnected, props.isHost, props.gameMode, props.roomId]);

  // 2. 自分がゲストなら、反転させたデータを使う
  const localGameState = isGuest ? flipState(props.gameState) : props.gameState;

  // ★ フェーズ3演出：相手が切断状態の場合、UIフックを利用して特別バナーを割り込ませる
  if (localGameState && props.gameState) {
    const isOpponentDisconnected = props.isHost ? props.gameState.guestDisconnected : props.gameState.hostDisconnected;
    if (isOpponentDisconnected && !props.gameState.battleResult) {
      localGameState.turnBanner = "対戦相手の接続が切断されました...";
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

  // 4. 操作の完全な排他制御
  const isMyTurn = localGameState.isPlayerTurn && !localGameState.turnBanner && !localGameState.isCoinFlipPhase && !localGameState.isAnimating;

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