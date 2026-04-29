import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';
import { applyCardEffects, getCalculatedCost } from './battleEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data.json');
const cardData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

export function createMockState() {
  return {
    player: {
      hp: 20, maxHp: 20, shield: 0, currentVoltage: 10, maxVoltage: 10,
      hand: [], deck: [{}, {}, {}, {}, {}], discard: [],
      buffs: { turnCardsPlayed: [], turnCardsPlayedDetails: [], queuedEndTurnEffects: [] }
    },
    enemy: {
      hp: 20, maxHp: 20, shield: 0, currentVoltage: 10, maxVoltage: 10,
      hand: [], deck: [{}, {}, {}, {}, {}], discard: [],
      buffs: { turnCardsPlayed: [], turnCardsPlayedDetails: [], queuedEndTurnEffects: [] }
    },
    setlist: [],
    isPlayerTurn: true,
    animations: {}
  };
}

export function getCardByName(name) {
  const card = cardData.find(c => c.曲名 === name);
  if (!card) throw new Error(`Card not found: ${name}`);
  return JSON.parse(JSON.stringify(card));
}

const tests = [];

export function test(description, testFn) {
  tests.push({ description, testFn });
}

export async function runAllTests() {
  console.log(`\n=== Running Battle Engine Tests ===`);
  let passed = 0;
  let failed = 0;

  for (const t of tests) {
    try {
      await t.testFn();
      console.log(`✅ PASS: ${t.description}`);
      passed++;
    } catch (e) {
      console.error(`❌ FAIL: ${t.description}`);
      console.error(e.message);
      if (e.actual !== undefined && e.expected !== undefined) {
        console.error(`   Expected: ${e.expected}`);
        console.error(`   Actual:   ${e.actual}`);
      } else {
        console.error(e.stack);
      }
      failed++;
    }
  }

  console.log(`\n=== Test Results: ${passed} passed, ${failed} failed ===`);
  if (failed > 0) {
    process.exit(1);
  }
}
