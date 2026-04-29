import assert from 'assert';
import { test, createMockState, getCardByName, runAllTests } from '../testRunner.js';
import { applyCardEffects } from '../battleEngine.js';

test('Phase 1: Voltage Condition (Above) - 夏めきペイン', () => {
  const card = getCardByName('夏めきペイン'); // パワー2, 効果1: ボルテージが7以上の時、相手に3ダメージ与える
  const state = createMockState();
  
  // Test 1: Condition met
  state.player.maxVoltage = 7;
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 15, 'Enemy should take 5 damage (Power 2 + Effect 3) when voltage is 7');

  // Test 2: Condition not met
  state.player.maxVoltage = 6;
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 18, 'Enemy should take 2 damage (Power 2) when voltage is 6');
});

test('Phase 1: Voltage Condition (Below) - ハクチューアラモード', () => {
  const card = getCardByName('ハクチューアラモード'); // パワー1, ボルテージが4以下の時、相手に1ダメージ与える / ボルテージが3以下の時、カードを1枚引く
  const state = createMockState();
  
  // Test 1: Both conditions met
  state.player.maxVoltage = 3;
  state.player.deck = [getCardByName('水彩世界')];
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 18, 'Enemy should take 2 damage (Power 1 + Effect 1) when voltage is 3');
  assert.strictEqual(res.newState.player.hand.length, 1, 'Player should draw 1 card when voltage is 3');

  // Test 2: Only damage condition met
  state.player.maxVoltage = 4;
  state.player.deck = [getCardByName('水彩世界')];
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 18, 'Enemy should take 2 damage (Power 1 + Effect 1) when voltage is 4');
  assert.strictEqual(res.newState.player.hand.length, 0, 'Player should NOT draw a card when voltage is 4');

  // Test 3: Neither condition met
  state.player.maxVoltage = 5;
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 19, 'Enemy should take 1 damage (Power 1) when voltage is 5');
});

test('Phase 1: HP Condition - Legato', () => {
  const card = getCardByName('Legato'); // 自傷3, ヒール2, 効果: 体力が5以下の時、相手に10ダメージ
  const state = createMockState();
  
  // Test 1: Condition met (post-damage post-heal HP = 5)
  state.player.hp = 6;
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.hp, 5, 'Player takes 3 self-damage then heals 2 = net 1 dmg, 6-3+2=5');
  assert.strictEqual(res.newState.enemy.hp, 10, 'Enemy should take 10 damage when post-damage HP <= 5');

  // Test 2: Condition not met (post-damage post-heal HP = 6)
  state.player.hp = 7;
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 20, 'Enemy should not take 10 damage when post-damage HP is 6');
});

test('Phase 1: Hand Condition (Below) - Trick & Cute', () => {
  const card = getCardByName('Trick & Cute'); // 手札が4枚以下の時、相手に2ダメージ与える
  const state = createMockState();
  
  // Hand condition uses pre-use hand size (hand.length + 1)
  // Test 1: Condition met (current hand = 3, pre-use = 4)
  state.player.hand = [{}, {}, {}];
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 18, 'Enemy should take 2 damage when pre-use hand <= 4');

  // Test 2: Condition not met (current hand = 4, pre-use = 5)
  state.player.hand = [{}, {}, {}, {}];
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.enemy.hp, 20, 'Enemy should not take damage when pre-use hand is 5');
});

test('Phase 1: Hand Condition (Above) - Holiday∞Holiday', () => {
  const card = getCardByName('Holiday∞Holiday'); // 手札が6枚以上の時、シールドを3付与する
  const state = createMockState();
  
  // Test 1: Condition met (current hand = 5, pre-use = 6)
  state.player.hand = [{}, {}, {}, {}, {}];
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.shield, 3, 'Player should gain 3 shield when pre-use hand >= 6');

  // Test 2: Condition not met (current hand = 4, pre-use = 5)
  state.player.hand = [{}, {}, {}, {}];
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.shield, 0, 'Player should not gain shield when pre-use hand is 5');
});

// Run tests
runAllTests();
