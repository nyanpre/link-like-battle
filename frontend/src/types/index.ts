// src/types/index.ts

// ==========================================
// 1. カードデータの型
// ==========================================
export interface CardData {
  id?: string;
  曲名: string;
  コスト: number | string;
  パワー?: number;
  シールド?: number;
  ヒール?: number;
  ダメージ?: number; // 自傷ダメージ
  歌唱: string;
  センター: string;
  効果1?: string;
  効果2?: string;
}

// ==========================================
// 2. プレイヤーの状態（HP、手札、デッキなど）の型
// ==========================================
export interface PlayerBuffs {
  damageImmune?: boolean;
  cannotDrawNextTurn?: boolean;
  sayakaDmgActive?: boolean;
  onyourmark102Active?: boolean;
  yupYupYupActive?: boolean;
  tookDamageThisTurn?: boolean;
  tookDamageCount?: number;       // ★ ? を追加 (Firebase通信対策)
  tookDamageAmount?: number;
  nextCardCostDown?: number;      // ★ ? を追加
  turnCardsPlayed?: string[];     // ★ ? を追加
  queuedEndTurnEffects?: any[];
  setEnemyVoltage3?: boolean;
  [key: string]: any; // その他の特殊バフ用
}

export interface PlayerState {
  name: string;
  baseUnit: string;
  hp: number;
  maxHp: number;
  currentVoltage: number;
  maxVoltage: number;
  shield: number;
  deck: CardData[];
  hand: CardData[];
  discard: CardData[];
  specialUsed: boolean;
  isFirstPlayer?: boolean;
  buffs: PlayerBuffs;
  originalDeckNames?: string[];
}

// ==========================================
// 3. ゲーム全体の状態の型
// ==========================================
export interface GameState {
  turn: number;
  isPlayerTurn: boolean;
  isCoinFlipPhase: boolean;
  turnBanner: string | null;
  player: PlayerState;
  enemy: PlayerState;
  setlist: { card: CardData; owner: 'player' | 'enemy' }[];
  enemyPlayedCard: CardData | null;
  isAnimating: boolean;
  animations?: {                 // ★ ? を追加
    playerShake?: boolean;
    enemyShake?: boolean;
    [key: string]: any;          // ★ 予期せぬアニメーション追加にも耐えられるように
  };
  battleResult: 'WIN' | 'LOSE' | 'DRAW' | null;
  forceTurnEnd?: boolean;
  hostDisconnected?: boolean;
  guestDisconnected?: boolean;
}