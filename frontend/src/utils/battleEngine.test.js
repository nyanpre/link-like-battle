
import assert from 'assert';
import { applyCardEffects, getCalculatedCost } from './battleEngine.js';

const mockState = {
  player: {
    hp: 10, maxHp: 10, shield: 0, currentVoltage: 5, maxVoltage: 5,
    hand: [], deck: [], discard: [],
    buffs: { turnCardsPlayed: [], turnCardsPlayedDetails: [], queuedEndTurnEffects: [] }
  },
  enemy: {
    hp: 10, maxHp: 10, shield: 0, currentVoltage: 5, maxVoltage: 5,
    hand: [], deck: [], discard: [],
    buffs: { turnCardsPlayed: [], turnCardsPlayedDetails: [], queuedEndTurnEffects: [] }
  },
  setlist: [],
  isPlayerTurn: true,
  animations: {}
};

function testNewRules() {
  console.log("\n--- Testing New Rules (Voltage, HP, Hand) ---");

  // 1. Voltage Check (should use maxVoltage)
  const vCard = { 曲名: "V-Check", 効果1: "ボルテージが7以上の時、相手に5ダメージ与える" };
  const state1 = JSON.parse(JSON.stringify(mockState));
  state1.player.maxVoltage = 7;
  state1.player.currentVoltage = 2; // Current is low
  const res1 = applyCardEffects(state1, vCard, true);
  assert(res1.newState.enemy.hp === 5, "Should trigger because maxVoltage is 7");

  // 2. HP Check (should use post-damage HP)
  // Legato: 体力が5以下の時、相手に10ダメージ (自傷3)
  const legato = { 曲名: "Legato", ダメージ: "3", 効果1: "体力が5以下の時、相手に10ダメージ" };
  const state2 = JSON.parse(JSON.stringify(mockState));
  state2.player.hp = 8; // 8 - 3 = 5 -> should trigger
  const res2 = applyCardEffects(state2, legato, true);
  assert(res2.newState.enemy.hp === 0, "Should trigger because post-damage HP is 5");

  const state2b = JSON.parse(JSON.stringify(mockState));
  state2b.player.hp = 9; // 9 - 3 = 6 -> should NOT trigger
  const res2b = applyCardEffects(state2b, legato, true);
  assert(res2b.newState.enemy.hp === 10, "Should NOT trigger because post-damage HP is 6");

  // 3. Hand Size Check (should use pre-use hand size: hand.length + 1)
  const hCard = { 曲名: "H-Check", 効果1: "手札が4枚以下の時、相手に2ダメージ与える" };
  const state3 = JSON.parse(JSON.stringify(mockState));
  // If current hand is 4, playing this card means pre-use size was 5. Should NOT trigger.
  state3.player.hand = [{}, {}, {}, {}]; 
  const res3 = applyCardEffects(state3, hCard, true);
  assert(res3.newState.enemy.hp === 10, "Should NOT trigger because pre-use size was 5");

  const state3b = JSON.parse(JSON.stringify(mockState));
  // If current hand is 3, playing this card means pre-use size was 4. Should trigger.
  state3b.player.hand = [{}, {}, {}];
  const res3b = applyCardEffects(state3b, hCard, true);
  assert(res3b.newState.enemy.hp === 8, "Should trigger because pre-use size was 4");

  console.log("✅ New rules verified");
}

function testKokon Tozai() {
  console.log("\n--- Testing Kokon Tozai ---");
  const kokon = { 曲名: "ココン東西", 効果1: "このターン中、使用したカードの数だけ相手にダメージを与える" };
  const state = JSON.parse(JSON.stringify(mockState));
  state.player.buffs.turnCardsPlayed = ["Card 1", "Card 2"]; // Already played 2
  
  const { newState } = applyCardEffects(state, kokon, true);
  // After playing Kokon, turnCardsPlayed should be 3
  assert(newState.player.buffs.turnCardsPlayed.length === 3, "Total played should be 3");
  assert(newState.enemy.hp === 7, "Enemy should take 3 damage (10 - 3)");
  console.log("✅ Kokon Tozai verified");
}

function testDrawSpecificQueued() {
  console.log("\n--- Testing Specific Draw Queued (Dream Believers) ---");
  const card = { 曲名: "Dream Believers", 効果1: "ターン終了時、「Dream Believers」をドローする" };
  const state = JSON.parse(JSON.stringify(mockState));
  const { newState, events } = applyCardEffects(state, card, true);
  
  assert(newState.player.buffs.queuedEndTurnEffects.length === 1, "Should queue the effect");
  assert(newState.player.buffs.queuedEndTurnEffects[0].type === 'draw_specific', "Type should be draw_specific");
  assert(newState.player.buffs.queuedEndTurnEffects[0].name === 'Dream Believers', "Name should be Dream Believers");
  
  // Verify no immediate draw happened
  const drawEvent = events.find(e => e.type === 'draw');
  assert(!drawEvent, "Should NOT have drawn immediately");
  console.log("✅ Specific draw queuing verified");
}

try {
  testNewRules();
  testKokon Tozai();
  testDrawSpecificQueued();
  console.log("\n✨ All regression tests passed!");
} catch (e) {
  console.error("\n❌ Test Failed!");
  console.error(e);
  process.exit(1);
}
