import assert from 'assert';
import { test, createMockState, getCardByName, runAllTests } from '../testRunner.js';
import { applyCardEffects, getCalculatedCost } from '../battleEngine.js';

test('Phase 2: Variable Damage (Setlist) - ココン東西', () => {
  const card = getCardByName('ココン東西'); // 使用したカードの数だけ相手にダメージを与える
  const state = createMockState();
  
  // Test: 3 cards played this turn (including this one)
  state.player.buffs.turnCardsPlayed = ["Card 1", "Card 2"];
  const res = applyCardEffects(state, card, true);
  // ココン東西 self triggers applyCardEffects. Wait, applyCardEffects does:
  // user.buffs.turnCardsPlayed.push(card.曲名);
  // count = user.buffs.turnCardsPlayed.length;
  // If count is 3 (2 previous + 1 current), damage is 3. Plus Power 1 = 4.
  assert.strictEqual(res.newState.enemy.hp, 16, 'Enemy should take 4 damage (Power 1 + Effect 3)');
});

test('Phase 2: Variable Cost (Damage Taken Count) - KNOT', () => {
  const card = getCardByName('KNOT'); // コスト6。このターン中、ダメージを受けた回数の分コストを減らす
  const state = createMockState();
  
  // Test 1: No damage taken
  state.player.buffs.tookDamageCount = 0;
  let cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 6, 'Cost should be 6 when no damage taken');

  // Test 2: Taken damage 2 times
  state.player.buffs.tookDamageCount = 2;
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 4, 'Cost should be 4 when damage taken 2 times');

  // Test 3: Taken damage 10 times (cost doesn't go below 0 usually, but let's check)
  state.player.buffs.tookDamageCount = 10;
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 0, 'Cost should not drop below 0');
});

test('Phase 2: Variable Heal (Damage Taken Count) - 青とシャボン', () => {
  const card = getCardByName('青とシャボン'); // このターン中、ダメージを受けた回数の分ヒールする
  const state = createMockState();
  
  // Test: Taken damage 3 times
  state.player.buffs.tookDamageCount = 3;
  state.player.hp = 10; // set HP so we can see healing
  const res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.hp, 13, 'Player should heal 3 HP');
});

// Run tests
runAllTests();
