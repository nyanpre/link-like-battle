import assert from 'assert';
import { test, createMockState, getCardByName, runAllTests } from '../testRunner.js';
import { applyCardEffects } from '../battleEngine.js';

test('Phase 4: Queued Effects - Turn End (Dream Believers)', () => {
  const card = getCardByName('Dream Believers'); // 最後に使用した時、「Dream Believers」をドローする
  const state = createMockState();
  
  const res = applyCardEffects(state, card, true);
  
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects.length, 1, 'Should queue effect');
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects[0].type, 'draw_specific', 'Type should be draw_specific');
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects[0].name, 'Dream Believers', 'Name should be Dream Believers');
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects[0].isLast, true, 'isLast should be true');
});

test('Phase 4: First Play - ミルク', () => {
  const card = getCardByName('ミルク'); // 最初に使用した時、2ヒールする
  const state = createMockState();
  
  // Normal play (first card)
  state.player.hp = 10;
  let res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.hp, 12, 'Should heal 2 when played first');

  // Played after another card
  state.player.hp = 10;
  state.player.buffs.turnCardsPlayed = ['Some Card'];
  res = applyCardEffects(state, card, true);
  assert.strictEqual(res.newState.player.hp, 10, 'Should NOT heal when played second');
});

test('Phase 4: Turn End Voltage Draw - Yup! Yup! Yup!', () => {
  const card = getCardByName('Yup! Yup! Yup!'); // ターン終了時、残りボルテージの数だけカードを引く
  const state = createMockState();
  
  const res = applyCardEffects(state, card, true);
  
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects.length, 1, 'Should queue effect');
  assert.strictEqual(res.newState.player.buffs.queuedEndTurnEffects[0].type, 'draw_voltage', 'Type should be draw_voltage');
});

// Run tests
runAllTests();
