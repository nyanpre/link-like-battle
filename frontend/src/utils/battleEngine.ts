// src/utils/battleEngine.ts
import { GameState, PlayerState, CardData } from '../types';

export type ActiveCardData = CardData & { costModifier?: number };

export function getCalculatedCost(card: ActiveCardData, userState: PlayerState): number {
  let cost = Number(card.コスト) || 0;
  
  const effect1 = card.効果1 || '';
  const effect2 = card.効果2 || '';
  const combinedEffects = effect1 + '\n' + effect2;

  if (combinedEffects.includes('ターン中に使用したカードの枚数分小さくなる')) {
    const cardsPlayed = userState.buffs.turnCardsPlayed.length;
    cost -= cardsPlayed;
  }

  if (userState.buffs.onyourmark102Active) {
    const centers = ["乙宗 梢", "夕霧 綴理", "藤島 慈"];
    if (centers.includes(card.センター)) {
      cost -= 2;
    }
  }

  if (userState.buffs.nextCardCostDown) {
    cost -= userState.buffs.nextCardCostDown;
  }

  if (card.costModifier) {
    cost += card.costModifier;
  }
  
  const handAboveCostMatch = combinedEffects.match(/手札が(\d+)枚以上の時、コストを(\d+)にする/);
  if (handAboveCostMatch) {
    if (userState.hand.length >= parseInt(handAboveCostMatch[1], 10)) {
      cost = parseInt(handAboveCostMatch[2], 10);
    }
  }

  const unitPlayedCostMatch = combinedEffects.match(/ユニットが「(.+?)」のカードを使用している場合、コストを(\d+)にする/);
  if (unitPlayedCostMatch) {
    const unitName = unitPlayedCostMatch[1];
    const hasPlayed = userState.buffs.turnCardsPlayedDetails?.some((c: any) => c.歌唱 && c.歌唱.includes(unitName));
    if (hasPlayed) {
        cost = parseInt(unitPlayedCostMatch[2], 10);
    }
  }

  const voltageAboveCostMatch = combinedEffects.match(/ボルテージが(\d+)以上の時、コストを(\d+)にする/);
  if (voltageAboveCostMatch) {
    const req = parseInt(voltageAboveCostMatch[1], 10);
    if (userState.maxVoltage >= req) {
      cost = parseInt(voltageAboveCostMatch[2], 10);
    }
  }

  const handBelowCostMatch = combinedEffects.match(/手札が(\d+)枚以下の時、コストを(\d+)にする/);
  if (handBelowCostMatch) {
    if (userState.hand.length <= parseInt(handBelowCostMatch[1], 10)) {
      cost = parseInt(handBelowCostMatch[2], 10);
    }
  }

  if (combinedEffects.includes('ダメージを受けた回数の分コストを減らす')) {
    cost -= (userState.buffs.tookDamageCount || 0);
  }

  const dmgCostMatch = combinedEffects.match(/既にダメージを受けている場合、コストを(\d+)にする/);
  if (dmgCostMatch) {
    if (userState.buffs.tookDamageThisTurn) {
      cost = parseInt(dmgCostMatch[1], 10);
    }
  }

  return Math.max(0, cost);
}

export function drawCard(userState: PlayerState): { success: boolean, deckOut?: boolean, card?: CardData, overdrawn?: boolean } {
  if (userState.deck.length === 0) {
    userState.hp = 0; 
    return { success: false, deckOut: true };
  }
  const card = userState.deck.shift() as CardData;
  if (userState.hand.length >= 8) {
    userState.discard.push(card);
    return { success: true, card, overdrawn: true };
  } else {
    userState.hand.push(card);
    return { success: true, card, overdrawn: false };
  }
}

export function discardRandomFromHand(userState: PlayerState): CardData | null {
  if (userState.hand.length === 0) return null;
  const idx = Math.floor(Math.random() * userState.hand.length);
  const card = userState.hand.splice(idx, 1)[0];
  userState.discard.push(card);
  return card;
}

export function applyCardEffects(state: GameState, card: ActiveCardData, isPlayer: boolean): { newState: GameState, events: any[] } {
  const newState = JSON.parse(JSON.stringify(state)) as GameState;
  const user = isPlayer ? newState.player : newState.enemy;
  const target = isPlayer ? newState.enemy : newState.player;
  const events: any[] = [];

  const addEvent = (type: string, data: any) => events.push({ type, data, isPlayer });

  // ★ 自己参照バグ防止: カード発動「前」の状態を記憶しておく
  const wasKozueDrawActive = user.buffs.kozueDrawActive;
  const wasSayakaDmgActive = user.buffs.sayakaDmgActive;

  // ★ ドロー＆溢れ判定の一元管理
  const handleDraw = (count: number) => {
    for (let i = 0; i < count; i++) {
      const res = drawCard(user);
      if (res.overdrawn && res.card) {
        addEvent('overdraw', { card: res.card });
      } else if (res.success) {
        addEvent('draw', { count: 1 });
      }
    }
  };

  const processEffects = (effectText?: string) => {
    if (!effectText) return;

    const unisonMatch = effectText.match(/このターン中、(.+?)が「(.+?)」のカードを使用している場合、(.+)/);
    if (unisonMatch) {
      const prop = unisonMatch[1];
      const targetName = unisonMatch[2];
      const effect = unisonMatch[3];

      const hasPlayed = user.buffs.turnCardsPlayedDetails?.some((c: any) => {
        if (c.uid === card.id) return false; 
        if (prop.includes('センター') || prop.includes('キャラクター')) return c.センター && c.センター.includes(targetName);
        if (prop.includes('ユニット') || prop.includes('歌唱')) return c.歌唱 && c.歌唱.includes(targetName);
        if (prop.includes('カード名') || prop.includes('名前')) return c.曲名 && c.曲名.includes(targetName);
        return false;
      });

      if (hasPlayed) {
        processEffects(effect); 
      }
    }
    
    const unisonMatch2 = effectText.match(/このターン中、「(.+?)」のカードを使用している場合、(.+)/);
    if (!unisonMatch && unisonMatch2) {
      const targetName = unisonMatch2[1];
      const effect = unisonMatch2[2];
      
      const hasPlayed = user.buffs.turnCardsPlayedDetails?.some((c: any) => {
        if (c.uid === card.id) return false;
        return (c.センター && c.センター.includes(targetName)) || 
               (c.歌唱 && c.歌唱.includes(targetName)) || 
               (c.曲名 && c.曲名.includes(targetName));
      });
      
      if (hasPlayed) {
         processEffects(effect);
      }
    }
    
    const voltageAboveMatch = effectText.match(/ボルテージが(\d+)以上の時/);
    if (voltageAboveMatch) {
      const threshold = parseInt(voltageAboveMatch[1], 10);
      if (user.maxVoltage < threshold) return; 
    }

    const voltageBelowMatch = effectText.match(/ボルテージが(\d+)以下の時/);
    if (voltageBelowMatch) {
      const threshold = parseInt(voltageBelowMatch[1], 10);
      if (user.maxVoltage > threshold) return;
    }

    const handLimitMatch = effectText.match(/手札が(\d+)枚以下の時/);
    if (handLimitMatch) {
      const limit = parseInt(handLimitMatch[1], 10);
      if ((user.hand.length + 1) > limit) return;
    }

    const handAboveMatch = effectText.match(/手札が(\d+)枚以上の時/);
    if (handAboveMatch) {
      const threshold = parseInt(handAboveMatch[1], 10);
      if ((user.hand.length + 1) < threshold) return;
    }

    const hpBelowMatch = effectText.match(/体力が(\d+)以下の時/);
    if (hpBelowMatch) {
      const threshold = parseInt(hpBelowMatch[1], 10);
      if (user.hp > threshold) return;
    }

    if (effectText.includes("ターン終了時") || effectText.includes("このターンの最後に使用した時")) {
      if (!user.buffs.queuedEndTurnEffects) user.buffs.queuedEndTurnEffects = [];
      const isLast = effectText.includes("最後に使用した時");
      
      if (effectText.includes("残りボルテージの数だけカードを引く")) {
        user.buffs.queuedEndTurnEffects.push({ type: 'draw_voltage', isLast });
      } else if (effectText.includes("をドローする")) {
        const drawTarget = effectText.match(/「(.+?)」をドローする/);
        user.buffs.queuedEndTurnEffects.push({ 
          type: 'draw_specific', 
          name: drawTarget ? drawTarget[1] : null,
          isLast
        });
      } else if (effectText.includes("3ヒールする")) {
        user.buffs.queuedEndTurnEffects.push({ type: 'heal', value: 3, isLast });
      }
      return; 
    }

    if (effectText.includes("使用したカードの数だけ相手にダメージを与える")) {
      const count = user.buffs.turnCardsPlayed.length;
      if (count > 0) {
        applyDamage(target, count, addEvent, 'kokon_tozai', isPlayer);
      }
    }

    if (effectText.includes("次の相手のターン、相手のボルテージが3になる")) {
      user.buffs.setEnemyVoltage3 = true;
    }
    if (effectText.includes("センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす")) {
      user.buffs.onyourmark102Active = true;
    }

    if (effectText.includes("付与されているシールドの分相手にダメージを与え、シールドを0にする")) {
      const dmg = user.shield;
      if (dmg > 0) {
        applyDamage(target, dmg, addEvent, 'shield_bash', isPlayer);
        user.shield = 0;
      }
    }

    const directDamageMatch = effectText.match(/相手に(\d+)ダメージ/);
    if (directDamageMatch) {
      const amount = parseInt(directDamageMatch[1], 10);
      applyDamage(target, amount, addEvent, 'direct', isPlayer);
    }

    if (effectText.includes("このカードを使用した時、ターンエンドする")) {
      newState.forceTurnEnd = true;
    }

    const voltageRecoverMatch = effectText.match(/ボルテージを(\d+)回復/);
    if (voltageRecoverMatch) {
      const amount = parseInt(voltageRecoverMatch[1], 10);
      user.currentVoltage = Math.min(user.maxVoltage, user.currentVoltage + amount);
      addEvent('voltage', { value: amount });
    }

    if (effectText.includes("シールドを3付与する")) {
      user.shield += 3;
      addEvent('shield', { value: 3 });
    }

    if (effectText.includes("ダメージを受けた回数の分ヒールする")) {
      const times = user.buffs.tookDamageCount || 0;
      if (times > 0) {
        user.hp = Math.min(user.maxHp, user.hp + times);
        addEvent('heal', { value: times });
      }
    } else if (effectText.includes("3ヒールする") && !effectText.includes("最後に使用")) {
      user.hp = Math.min(user.maxHp, user.hp + 3);
      addEvent('heal', { value: 3 });
    } else if (effectText.includes("2ヒールする") && !effectText.includes("最初に使用")) {
      user.hp = Math.min(user.maxHp, user.hp + 2);
      addEvent('heal', { value: 2 });
    }

    if (effectText.includes("捨札からコスト4以下のカードを使用する") || effectText.includes("捨札からコスト4以下のカードを")) {
      const candidates = user.discard.filter(c => (Number(c.コスト) || 0) <= 4 && c.id !== card.id);
      if (candidates.length > 0) {
        if (isPlayer) {
          addEvent('discard_select', { maxCost: 4, reason: 'dear_my_future', excludeId: card.id });
        } else {
          const idx = Math.floor(Math.random() * candidates.length);
          const picked = candidates[idx];
          const discardIdx = user.discard.indexOf(picked);
          if (discardIdx !== -1) {
            user.discard.splice(discardIdx, 1);
            user.discard.push(picked);
            addEvent('draw', { name: picked.曲名, reason: 'dear_my_future_cpu' });
          }
        }
      }
    }

    if (effectText.includes("ダメージを受けるたびに相手に1ダメージ")) {
      user.buffs.damageReflectionActive = true;
    }

    if (effectText.includes("次に使用するカードのパワーが2倍になる")) {
      user.buffs.doubleNextPower = true;
    }

    if (effectText.includes("既にダメージを7以上受けている場合、相手は次のターンドローできない")) {
      if ((user.buffs.tookDamageAmount || 0) >= 7) {
        target.buffs.cannotDrawNextTurn = true;
      }
    }

    if (effectText.includes("手札を全て捨て、カードを3枚引く")) {
      while (user.hand.length > 0) {
        const c = user.hand.shift() as CardData;
        user.discard.push(c);
        addEvent('discard', { card: c }); // ★ 捨てたカードのアニメを連携
      }
      handleDraw(3);
    }

    if (effectText.includes("みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる")) {
      const targets = user.hand.filter(c => c.歌唱 && c.歌唱.includes("みらくらぱーく"));
      if (targets.length > 0) {
        const picked = targets[Math.floor(Math.random() * targets.length)] as ActiveCardData;
        picked.costModifier = (picked.costModifier || 0) - 1;
        addEvent('buff', { name: 'cost_down', target: picked.曲名 });
      }
    }

    if (effectText.includes("ボルテージが4以下の時、このカードの効果を2倍にする")) {
       user.buffs.doubleThisCard = true;
    }

    if (effectText.includes("カードを使用する度にシールドを1付与する")) {
      user.buffs.shieldOnPlayActive = true;
    }

    if (effectText.includes("ユニットが「DOLLCHESTRA」のカードを2枚引く")) {
       for (let i = 0; i < 2; i++) {
         const idx = user.deck.findIndex(c => c.歌唱 && c.歌唱.includes("DOLLCHESTRA"));
         if (idx !== -1) {
           const [c] = user.deck.splice(idx, 1);
           if (user.hand.length >= 8) {
               user.discard.push(c);
               addEvent('overdraw', { card: c });
           } else {
               user.hand.push(c);
               addEvent('draw', { count: 1 });
           }
         }
       }
    }

    if (effectText.includes("センターが「乙宗 梢」のカードを使用する度にカードを1枚引く")) {
      user.buffs.kozueDrawActive = true;
    }
    if (effectText.includes("センターが「村野 さやか」のカードを使用したとき、相手に3ダメージ") || effectText.includes("センターが「村野さやか」のカードを使用したとき、相手に3ダメージ")) {
      user.buffs.sayakaDmgActive = true;
    }

    const nextCostDownMatch = effectText.match(/次に使用するカードのコストを(\d+)下げる/);
    if (nextCostDownMatch) {
      user.buffs.nextCardCostDown = (user.buffs.nextCardCostDown || 0) + parseInt(nextCostDownMatch[1], 10);
    }

    if (effectText.includes("次に使用するシールドかダメージ効果を2倍にする") || effectText.includes("次に使用するシールドかヒール効果を2倍にする")) {
      user.buffs.doubleNextEffect = true;
    }

    if (effectText.includes("カードを2枚引く") && !effectText.includes("ユニットが")) {
      handleDraw(2);
    } else if (effectText.includes("カードを1枚引く") && !effectText.includes("ユニットが") && !effectText.includes("Junction") && !effectText.includes("使用する度に")) {
      handleDraw(1);
    }

    if (effectText.includes("をドローする") && !effectText.includes("ターン終了時") && !effectText.includes("最後に使用した時")) {
      handleDraw(1);
    }

    if (effectText.includes("手札をランダムに1枚捨てる") || effectText.includes("手札から1枚選び捨てる")) {
      const discarded = discardRandomFromHand(user);
      if (discarded) addEvent('discard', { card: discarded }); // ★ 捨てたカードのアニメを連携
    }

    if (effectText.includes("このターン中、自分へのダメージが0になる")) {
      user.buffs.damageImmune = true;
    }
    
    if (effectText.includes("SPを回復する")) {
        user.specialUsed = false;
        addEvent('sp_recover', {});
    }
    
    const openingHealMatch = effectText.match(/このターンの最初に使用した(?:時|場合)、(\d+)ヒールする/);
    if (openingHealMatch) {
      if (user.buffs.turnCardsPlayed.length === 1) { 
        const healVal = parseInt(openingHealMatch[1], 10);
        user.hp = Math.min(user.maxHp, user.hp + healVal);
        addEvent('heal', { value: healVal, reason: 'opening' });
      }
    }
    
    if (effectText.includes("このターン中、受けるダメージを2倍にする")) {
      user.buffs.doubleDamageTakenThisTurn = true;
    }
  };

  function applyDamage(targetObj: PlayerState, value: number, eventAdder: (type: string, data: any) => void, type: string, isPlayerAction: boolean) {
    let dmg = value;
    if (targetObj.buffs.doubleDamageTakenThisTurn) {
      dmg *= 2;
    }
    let originalDmg = dmg;
    if (targetObj.shield > 0) {
      const blocked = Math.min(targetObj.shield, dmg);
      targetObj.shield -= blocked;
      dmg -= blocked;
    }
    if (dmg > 0) {
      targetObj.hp -= dmg;
      targetObj.buffs.tookDamageThisTurn = true;
      targetObj.buffs.tookDamageAmount = (targetObj.buffs.tookDamageAmount || 0) + dmg;
    }
    eventAdder('damage', { value: dmg, originalValue: originalDmg, target: isPlayerAction ? 'enemy' : 'player', type });
  }

  if (user.buffs.shieldOnPlayActive) {
    user.shield += 1;
    addEvent('shield', { value: 1, reason: 'colorfulness' });
  }

  const useDouble = user.buffs.doubleNextEffect;
  let consumedDouble = false;

  const selfDmg = Number(card.ダメージ) || 0;
  if (selfDmg > 0 && !user.buffs.damageImmune) {
    const actualSelfDmg = useDouble ? selfDmg * 2 : selfDmg;
    if (useDouble) consumedDouble = true;
    user.hp -= actualSelfDmg;
    user.buffs.tookDamageThisTurn = true;
    user.buffs.tookDamageAmount = (user.buffs.tookDamageAmount || 0) + actualSelfDmg;
    user.buffs.tookDamageCount = (user.buffs.tookDamageCount || 0) + 1;
    addEvent('damage_self', { value: actualSelfDmg });

    if (user.buffs.damageReflectionActive) {
      applyDamage(target, 1, addEvent, 'reflection', isPlayer);
    }
  }

  let heal = Number(card.ヒール) || 0;
  if (user.buffs.doubleThisCard) heal *= 2;
  if (heal > 0) {
    user.hp = Math.min(user.maxHp, user.hp + heal);
    addEvent('heal', { value: heal });
  }

  processEffects(card.効果1);
  processEffects(card.効果2);

  let power = Number(card.パワー) || 0;
  if (user.buffs.doubleThisCard) power *= 2;
  if (power > 0) {
    let dmgValue = power;
    if (user.buffs.doubleNextPower) {
      dmgValue *= 2;
      user.buffs.doubleNextPower = false;
    }
    applyDamage(target, dmgValue, addEvent, 'attack', isPlayer);
  }

  let shield = Number(card.シールド) || 0;
  if (user.buffs.doubleThisCard) shield *= 2;
  if (shield > 0) {
    if (useDouble && !consumedDouble) {
      shield *= 2;
      consumedDouble = true;
    }
    user.shield += shield;
    addEvent('shield', { value: shield });
  }

  if (consumedDouble) user.buffs.doubleNextEffect = false;
  user.buffs.doubleThisCard = false; 

  // ★ 発動「前」から有効だった場合のみ判定する（自己参照バグの回避）
  if (wasKozueDrawActive && card.センター.includes("乙宗 梢")) {
    handleDraw(1);
  }
  if (wasSayakaDmgActive && (card.センター.includes("村野さやか") || card.センター.includes("村野 さやか"))) {
    applyDamage(target, 3, addEvent, 'sayaka', isPlayer);
  }

  return { newState, events };
}