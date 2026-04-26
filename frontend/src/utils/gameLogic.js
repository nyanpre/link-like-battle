import cardData from '../data.json';

// ===== カードプール管理 =====

// 基本ユニット選択に基づき使用可能なカードを取得
export function getAvailableCards(baseUnit) {
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
export function buildDeckFromList(cardNames) {
  const deck = [];
  for (const name of cardNames) {
    const template = cardData.find(c => c.曲名 === name);
    if (template) {
      deck.push({ ...template, id: Math.random().toString(36).substr(2, 9) });
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

// ===== スターターデッキ =====

export const STARTER_DECKS = {
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
export function generateCPUDeck() {
  const units = ['スリーズブーケ', 'DOLLCHESTRA', 'みらくらぱーく！'];
  const cpuUnit = units[Math.floor(Math.random() * units.length)];
  const starterNames = STARTER_DECKS[cpuUnit];
  return { deck: buildDeckFromList(starterNames), unit: cpuUnit };
}

// 初期状態（デッキを引数で受け取る）
export function createInitialState(playerDeckData, enemyDeckData) {
  const pData = playerDeckData || generateCPUDeck();
  const eData = enemyDeckData || generateCPUDeck();
  const playerDeck = pData.deck;
  const playerUnit = pData.unit;
  const enemyDeck = eData.deck;
  const enemyUnit = eData.unit;
  
  return {
    turn: 1,
    isPlayerTurn: true,
    isCoinFlipPhase: true,
    turnBanner: "COIN FLIP...",
    setlist: [],
    enemyPlayedCard: null,
    isAnimating: false,
    player: {
      baseUnit: playerUnit,
      originalDeckNames: playerDeck.map(c => c.曲名),
      hp: 30,
      maxHp: 30,
      shield: 0,
      maxVoltage: 0,
      currentVoltage: 0,
      specialUsed: false,
      deck: playerDeck.slice(3),
      hand: playerDeck.slice(0, 3),
      discard: [],
      buffs: {
        damageImmune: false,
        nextCardCostDown: 0,
        turnCardsPlayed: []
      }
    },
    enemy: {
      baseUnit: enemyUnit,
      originalDeckNames: enemyDeck.map(c => c.曲名),
      hp: 30,
      maxHp: 30,
      shield: 0,
      maxVoltage: 0,
      currentVoltage: 0,
      specialUsed: false,
      deck: enemyDeck.slice(3),
      hand: enemyDeck.slice(0, 3),
      discard: [],
      buffs: {
        damageImmune: false,
        nextCardCostDown: 0,
        turnCardsPlayed: []
      }
    },
    animations: {
      playerShake: false,
      enemyShake: false,
      damageTexts: []
    }
  };
}
