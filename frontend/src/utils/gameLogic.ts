// src/utils/gameLogic.ts
import cardDataRaw from '../data.json';
import { CardData, GameState, PlayerState } from '../types';

// JSONデータを CardData 型の配列として扱うよう明示
const cardData = cardDataRaw as unknown as CardData[];

// ===== カードプール管理 =====

// 基本ユニット選択に基づき使用可能なカードを取得
export function getAvailableCards(baseUnit: string): CardData[] {
  return cardData.filter(card => {
    const singing = card.歌唱;
    // 蓮ノ空共通カード
    if (singing === '蓮ノ空女学院スクールアイドルクラブ') return true;
    // 全ユニット共通（スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！）
    if (singing === 'スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！') return true;
    // 特殊ユニット（誰でも使える）
    if (singing === 'るりのとゆかいなつづりたち') return true;
    if (singing === 'かほめぐ♡じぇらーと') return true;
    if (singing === '蓮ノ休日') return true;
    // 選んだ基本ユニットのカード
    if (singing === baseUnit) return true;
    // Runway は DOLLCHESTRA のみ
    if (card.曲名 === 'Runway' && baseUnit === 'DOLLCHESTRA') return true;
    if (card.曲名 === 'Runway' && baseUnit !== 'DOLLCHESTRA') return false;
    // 村野 さやか (Runway以外) は特殊ユニット扱い
    if (singing === '村野 さやか' && card.曲名 !== 'Runway') return true;
    return false;
  });
}

// デッキ構築（カード名リストから）
export function buildDeckFromList(cardNames: string[]): CardData[] {
  const deck: CardData[] = [];
  for (const name of cardNames) {
    const template = cardData.find(c => c.曲名 === name);
    if (template) {
      deck.push({ ...template, id: Math.random().toString(36).substring(2, 11) });
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

// ===== スターターデッキ =====

export const STARTER_DECKS: Record<string, string[]> = {
  'スリーズブーケ': [
    'On your mark', 'On your mark', 'On your mark',
    'Dream Believers', 'Dream Believers',
    'STEP UP!', 'STEP UP!', 'STEP UP!',
    'Reflection in the mirror', 'Reflection in the mirror', 'Reflection in the mirror',
    'フォーチュンムービー', 'フォーチュンムービー', 'フォーチュンムービー',
    'Special Thanks', 'Special Thanks', 'Special Thanks',
    'シュガーメルト', 'シュガーメルト', 'シュガーメルト',
    '千変万華', '千変万華',
    '残陽', '残陽',
    '水彩世界', '水彩世界',
    'Holiday∞Holiday', 'Holiday∞Holiday',
    'Dear my future', 'Dear my future',
  ],
  'DOLLCHESTRA': [
    'On your mark', 'On your mark', 'On your mark',
    'STEP UP!', 'STEP UP!', 'STEP UP!',
    'Dream Believers', 'Dream Believers',
    'AWOKE', 'AWOKE', 'AWOKE',
    'Sparkly Spot', 'Sparkly Spot', 'Sparkly Spot',
    'ジブンダイアリー', 'ジブンダイアリー', 'ジブンダイアリー',
    '飴色', '飴色', '飴色',
    'Mirage Voyage', 'Mirage Voyage',
    'スケイプゴート', 'スケイプゴート',
    'Take It Over', 'Take It Over',
    '青とシャボン', '青とシャボン',
    '希望的プリズム', '希望的プリズム',
  ],
  'みらくらぱーく！': [
    'On your mark', 'On your mark', 'On your mark',
    'STEP UP!', 'STEP UP!', 'STEP UP!',
    'Dream Believers', 'Dream Believers',
    'ド！ド！ド！', 'ド！ド！ド！', 'ド！ド！ド！',
    'ココン東西', 'ココン東西',
    'ハクチューアラモード', 'ハクチューアラモード', 'ハクチューアラモード',
    'アイデンティティ', 'アイデンティティ', 'アイデンティティ',
    '天才なのかもしれない', '天才なのかもしれない', '天才なのかもしれない',
    'ノンフィクションヒーローショー', 'ノンフィクションヒーローショー',
    'マハラジャンボリー', 'マハラジャンボリー', 'マハラジャンボリー',
    '以心☆電信', '以心☆電信', '以心☆電信',
  ],
};

// CPU用ランダムデッキ生成
export function generateCPUDeck(): { deck: CardData[], unit: string } {
  const units = ['スリーズブーケ', 'DOLLCHESTRA', 'みらくらぱーく！'];
  const cpuUnit = units[Math.floor(Math.random() * units.length)];
  const starterNames = STARTER_DECKS[cpuUnit];
  return { deck: buildDeckFromList(starterNames), unit: cpuUnit };
}

// ===== 初期状態生成 =====

// 冗長なプレイヤー初期化をまとめるヘルパー関数
function createBasePlayerState(unit: string, deck: CardData[]): PlayerState {
  return {
    name: '', // 後から App.tsx で「YOU」や「相手」に上書きされます
    baseUnit: unit,
    originalDeckNames: deck.map(c => c.曲名),
    hp: 30,
    maxHp: 30,
    shield: 0,
    maxVoltage: 0,
    currentVoltage: 0,
    specialUsed: false,
    deck: deck.slice(3),
    hand: deck.slice(0, 3),
    discard: [],
    buffs: {
      damageImmune: false,
      nextCardCostDown: 0,
      turnCardsPlayed: [],
      tookDamageCount: 0 // types/index.ts で必須にしたため追加
    }
  };
}

// 初期状態（デッキを引数で受け取る）
export function createInitialState(playerDeckData?: { deck: CardData[], unit: string }, enemyDeckData?: { deck: CardData[], unit: string }): GameState {
  const pData = playerDeckData || generateCPUDeck();
  const eData = enemyDeckData || generateCPUDeck();
  
  return {
    turn: 1,
    isPlayerTurn: true,
    isCoinFlipPhase: true,
    turnBanner: "COIN FLIP...",
    setlist: [],
    enemyPlayedCard: null,
    isAnimating: false,
    battleResult: null, // ★追加してエラーを解消
    player: createBasePlayerState(pData.unit, pData.deck),
    enemy: createBasePlayerState(eData.unit, eData.deck),
    animations: {
      playerShake: false,
      enemyShake: false
    }
  };
}

export function createOnlineInitialState(playerData: { deck: CardData[], unit: string }, enemyData: { deck: CardData[], unit: string }): GameState {
  return {
    turn: 1,
    isPlayerTurn: true,
    isCoinFlipPhase: true,
    turnBanner: "COIN FLIP...",
    setlist: [],
    enemyPlayedCard: null,
    isAnimating: false,
    battleResult: null, // ★追加してエラーを解消
    player: createBasePlayerState(playerData.unit, playerData.deck),
    enemy: createBasePlayerState(enemyData.unit, enemyData.deck),
    animations: {
      playerShake: false,
      enemyShake: false
    }
  };
}