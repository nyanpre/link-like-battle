import assert from 'assert';
import { test, createMockState, getCardByName, runAllTests } from '../testRunner.js';
import { getCalculatedCost, applyCardEffects } from '../battleEngine.js';

test('Phase 3: Cost Modification - Link to the FUTURE', () => {
  const card = getCardByName('Link to the FUTURE'); // コストは、ターン中に使用したカードの枚数分小さくなる
  const state = createMockState();
  
  // Test 1: 0 cards played -> cost 6
  let cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 6, 'Cost should be 6 initially');

  // Test 2: 3 cards played -> cost 3
  state.player.buffs.turnCardsPlayed = [{}, {}, {}];
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 3, 'Cost should decrease by cards played');
});

test('Phase 3: Cost Modification - Mix Shake!!', () => {
  const card = getCardByName('Mix Shake!!'); // 手札が5枚以上の時、コストを3にする
  const state = createMockState();
  
  // Hand is 4 -> normal cost 6
  state.player.hand = [{}, {}, {}, {}];
  let cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 6, 'Cost should be normal when hand is 4');

  // Hand is 5 -> cost 3
  state.player.hand = [{}, {}, {}, {}, {}];
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 3, 'Cost should be 3 when hand is 5+');
});

test('Phase 3: Cost Modification - Kawaii no Susume', () => {
  const card = getCardByName('Kawaii no Susume'); // ユニットが「スリーズブーケ」のカードを使用している場合、コストを2にする
  const state = createMockState();
  
  // Normal -> cost 4
  let cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 4, 'Cost should be 4 normally');

  // Played Cerise Bouquet -> cost 2
  state.player.buffs.turnCardsPlayedDetails = [{ 曲名: 'Holiday∞Holiday', 歌唱: 'スリーズブーケ' }];
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 2, 'Cost should be 2 when Cerise Bouquet played');
});

test('Phase 3: Cost Modification - 青春の輪郭', () => {
  const card = getCardByName('青春の輪郭'); // ダメージを受けている場合、コストを2にする (元コスト5)
  const state = createMockState();
  
  // Normal -> cost 5
  let cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 5, 'Cost should be 5 normally');

  // Took damage -> cost 2
  state.player.buffs.tookDamageThisTurn = true;
  cost = getCalculatedCost(card, state.player);
  assert.strictEqual(cost, 2, 'Cost should be 2 when damage taken');
});

// Run tests
runAllTests();
