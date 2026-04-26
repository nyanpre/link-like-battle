
/**
 * Battle Engine for Link! Like! Battle!
 * Core logic for processing card effects and state updates.
 */

export function getCalculatedCost(card, userState, setlist, isPlayer) {
  let cost = Number(card.コスト) || 0;
  
  // Link to the FUTURE: 枚数分小さくなる
  if (card.曲名 === 'Link to the FUTURE') {
    const cardsPlayed = userState.buffs.turnCardsPlayed.length;
    cost -= cardsPlayed;
    return Math.max(0, cost);
  }

  // On your mark(102期Ver.): 梢、綴理、慈のコストを2減らす
  if (userState.buffs.onyourmark102Active) {
    const centers = ["乙宗 梢", "夕霧 綴理", "藤島 慈"];
    if (centers.includes(card.センター)) {
      cost -= 2;
    }
  }

  // DEEPNESS / Generic cost down
  if (userState.buffs.nextCardCostDown) {
    cost -= userState.buffs.nextCardCostDown;
  }

  // Individual card cost modifier (e.g. from ド！ド！ド！)
  if (card.costModifier) {
    cost += card.costModifier;
  }
  
  // Mix Shake!!: 手札が5枚以上の時、コストを3にする
  if (card.曲名 === 'Mix Shake!!' && userState.hand.length >= 5) {
    cost = 3;
  }

  // Kawaii no Susume: スリーズブーケ使用済みならコスト2に
  if (card.曲名 === 'Kawaii no Susume') {
     const hasSoreilPlayed = userState.buffs.turnCardsPlayedDetails?.some(c => c.歌唱.includes('スリーズブーケ'));
     if (hasSoreilPlayed) {
         cost = 2;
     }
  }

  // 雨と体温: ボルテージが5以上の時、コストを1にする
  if (card.曲名 === '雨と体温' && (userState.currentVoltage + (Number(card.コスト) || 0)) >= 5) {
    cost = 1;
  }

  // アイデンティティ: 手札が1枚以下の時、コストを1にする
  if (card.曲名 === 'アイデンティティ' && userState.hand.length <= 1) {
    cost = 1;
  }

  return Math.max(0, cost);
}

export function drawCard(userState) {
  if (userState.deck.length === 0) {
    userState.hp = 0; 
    return { success: false, deckOut: true };
  }
  const card = userState.deck.shift();
  if (userState.hand.length >= 8) {
    userState.discard.push(card);
  } else {
    userState.hand.push(card);
  }
  return { success: true, card };
}

export function discardRandomFromHand(userState) {
  if (userState.hand.length === 0) return null;
  const idx = Math.floor(Math.random() * userState.hand.length);
  const card = userState.hand.splice(idx, 1)[0];
  userState.discard.push(card);
  return card;
}

export function applyCardEffects(state, card, isPlayer) {
  const newState = JSON.parse(JSON.stringify(state)); // Deep clone
  const user = isPlayer ? newState.player : newState.enemy;
  const target = isPlayer ? newState.enemy : newState.player;
  const events = [];

  const addEvent = (type, data) => events.push({ type, data, isPlayer });

  const processEffects = (effectText) => {
    if (!effectText) return;

    // --- Batch 1 Effects ---

    if (effectText.includes("次の相手のターン、相手のボルテージが3になる")) {
      user.buffs.setEnemyVoltage3 = true;
    }
    if (effectText.includes("センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす")) {
      user.buffs.onyourmark102Active = true;
    }

    if (effectText.includes("付与されているシールドの分相手にダメージを与え、シールドを0にする")) {
      const dmg = user.shield;
      if (dmg > 0) {
        let actualDmg = dmg;
        if (target.shield > 0) {
          const blocked = Math.min(target.shield, actualDmg);
          target.shield -= blocked;
          actualDmg -= blocked;
        }
        if (actualDmg > 0) target.hp -= actualDmg;
        user.shield = 0;
        addEvent('damage', { value: dmg, target: isPlayer ? 'enemy' : 'player', type: 'shield_bash' });
      }
    }

    if (effectText.includes("ボルテージが7以上の時、相手に3ダメージ与える")) {
      if (user.currentVoltage + (Number(card.コスト) || 0) >= 7) { 
        let dmg = 3;
        if (target.shield > 0) {
          const blocked = Math.min(target.shield, dmg);
          target.shield -= blocked;
          dmg -= blocked;
        }
        if (dmg > 0) target.hp -= dmg;
        addEvent('damage', { value: 3, target: isPlayer ? 'enemy' : 'player' });
      }
    }
    if (effectText.includes("このカードを使用した時、ターンエンドする")) {
      newState.forceTurnEnd = true;
    }

    if (effectText.includes("ボルテージを2回復する")) {
      user.currentVoltage = Math.min(user.maxVoltage, user.currentVoltage + 2);
      addEvent('voltage', { value: 2 });
    }
    if (effectText.includes("ターン終了時、残りボルテージの数だけカードを引く")) {
      user.buffs.yupYupYupActive = true;
    }

    // --- Batch 2 Effects ---

    if (effectText.includes("手札が6枚以上の時、シールドを3付与する")) {
      if (user.hand.length >= 6) {
        user.shield += 3;
        addEvent('shield', { value: 3, reason: 'hand_condition' });
      }
    }

    if (effectText.includes("手札が6枚以上の時、3ヒールする")) {
      if (user.hand.length >= 6) {
        user.hp = Math.min(user.maxHp, user.hp + 3);
        addEvent('heal', { value: 3, reason: 'hand_condition' });
      }
    }

    if (effectText.includes("捨札からコスト4以下のカードを使用する") || effectText.includes("捨札からコスト4以下のカードを")) {
      const candidates = user.discard.filter(c => (Number(c.コスト) || 0) <= 4);
      if (candidates.length > 0) {
        const idx = Math.floor(Math.random() * candidates.length);
        const [picked] = user.discard.splice(user.discard.indexOf(candidates[idx]), 1);
        if (user.hand.length >= 8) user.discard.push(picked);
        else user.hand.push(picked);
        addEvent('draw', { name: picked.曲名, reason: 'discard_recall' });
      }
    }

    // --- Batch 3 Effects ---

    if (effectText.includes("体力が10以下の時、相手に1ダメージ与える")) {
      if (user.hp <= 10) {
        let dmg = 1;
        if (target.shield > 0) { target.shield -= 1; dmg = 0; }
        if (dmg > 0) target.hp -= 1;
        addEvent('damage', { value: 1, reason: 'hp_condition' });
      }
    }
    if (effectText.includes("体力が5以下の時、相手に2ダメージ与える")) {
      if (user.hp <= 5) {
        let dmg = 2;
        if (target.shield > 0) { const b = Math.min(target.shield, 2); target.shield -= b; dmg -= b; }
        if (dmg > 0) target.hp -= dmg;
        addEvent('damage', { value: 2, reason: 'hp_condition' });
      }
    }

    if (effectText.includes("既にダメージを受けている場合、シールドを3付与する")) {
      if (user.buffs.tookDamageThisTurn) {
        user.shield += 3;
        addEvent('shield', { value: 3, reason: 'took_damage' });
      }
    }

    if (effectText.includes("ダメージを受けるたびに相手に1ダメージ")) {
      user.buffs.damageReflectionActive = true;
    }

    if (effectText.includes("次に使用するカードのパワーが2倍になる")) {
      user.buffs.doubleNextPower = true;
    }

    if (effectText.includes("既にダメージを5以上受けている場合、2ヒールする")) {
      if ((user.buffs.tookDamageAmount || 0) >= 5) {
        user.hp = Math.min(user.maxHp, user.hp + 2);
        addEvent('heal', { value: 2, reason: 'damage_threshold' });
      }
    }
    if (effectText.includes("既にダメージを7以上受けている場合、相手は次のターンドローできない")) {
      if ((user.buffs.tookDamageAmount || 0) >= 7) {
        target.buffs.cannotDrawNextTurn = true;
      }
    }

    // --- Batch 4 Effects ---

    // 青春の輪郭: 手札を全て捨て、カードを3枚引く
    if (effectText.includes("手札を全て捨て、カードを3枚引く")) {
      while (user.hand.length > 0) {
        user.discard.push(user.hand.shift());
      }
      drawCard(user); drawCard(user); drawCard(user);
      addEvent('draw', { count: 3, reason: 'refresh' });
    }

    // Kira Kira: 使用済みカード10枚以上で10ダメージ
    if (effectText.includes("使用済みカードが10枚以上の時、相手に10ダメージ")) {
      if ((user.buffs.totalCardsPlayedCount || 0) >= 10) {
        let dmg = 10;
        if (target.shield > 0) { const b = Math.min(target.shield, 10); target.shield -= b; dmg -= b; }
        if (dmg > 0) target.hp -= dmg;
        addEvent('damage', { value: 10, reason: 'total_played_condition' });
      }
    }

    // Junction: ボルテージ1回復 + 1ドロー
    if (effectText.includes("ボルテージを1回復し、カードを1枚引く")) {
      user.currentVoltage = Math.min(user.maxVoltage, user.currentVoltage + 1);
      drawCard(user);
      addEvent('voltage', { value: 1 });
      addEvent('draw', { count: 1 });
    }

    // --- Batch 5 Effects ---

    // ド！ド！ド！: みらくらぱーくのコストを下げる
    if (effectText.includes("ユニットが「みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる")) {
      const targets = user.hand.filter(c => c.歌唱 && c.歌唱.includes("みらくらぱーく"));
      if (targets.length > 0) {
        const picked = targets[Math.floor(Math.random() * targets.length)];
        // Note: This requires a per-card cost reduction tracking. 
        // For now, I'll use a simple nextCardCostDown approach or mark the card.
        picked.costModifier = (picked.costModifier || 0) - 1;
        addEvent('buff', { name: 'cost_down', target: picked.曲名 });
      }
    }

    // ミルク: このターンの最初に使用した時
    if (effectText.includes("このターンの最初に使用した時")) {
      if (user.buffs.turnCardsPlayed.length === 1) { // Current card is already pushed
        user.hp = Math.min(user.maxHp, user.hp + 2);
        addEvent('heal', { value: 2, reason: 'opening' });
      }
    }

    // 以心☆電信: ボルテージ4以下で2倍
    if (effectText.includes("ボルテージが4以下の時、このカードの効果を2倍にする")) {
      if ((user.currentVoltage + (Number(card.コスト) || 0)) <= 4) {
        user.buffs.doubleThisCard = true;
      }
    }
    if (effectText.includes("ターン終了時、「以心☆電信」をドローする")) {
      user.buffs.drawIsinDensinNext = true;
    }

    // Colorfulness: 使用する度にシールド1
    if (effectText.includes("カードを使用する度にシールドを1付与する")) {
      user.buffs.shieldOnPlayActive = true;
    }
    // Colorfulness: 最後に使用した時 3ヒール (This needs to be checked at turn end)
    if (effectText.includes("このターンの最後に使用した時、3ヒールする")) {
        // Handled in endTurn logic or marked here
        user.buffs.healOnLastPlay = (user.buffs.healOnLastPlay || 0) + 3;
    }

    // Runway: DOLLCHESTRAドロー
    if (effectText.includes("ユニットが「DOLLCHESTRA」のカードを2枚引く")) {
       for (let i = 0; i < 2; i++) {
         const idx = user.deck.findIndex(c => c.歌唱 && c.歌唱.includes("DOLLCHESTRA"));
         if (idx !== -1) {
           const [c] = user.deck.splice(idx, 1);
           user.hand.length >= 8 ? user.discard.push(c) : user.hand.push(c);
         }
       }
       addEvent('draw', { count: 2, reason: 'unit_search' });
    }

    // --- Existing & Generic Effects ---
    
    if (effectText.includes("このターン、センターが「乙宗 梢」のカードを使用する度にカードを1枚引く")) {
      user.buffs.kozueDrawActive = true;
    }
    if (effectText.includes("センターが「村野さやか」のカードを使用したとき、相手に3ダメージ") ||
        effectText.includes("センターが「村野 さやか」のカードを使用したとき、相手に3ダメージ")) {
      user.buffs.sayakaDmgActive = true;
    }

    const handConditionMatch = effectText.match(/手札が(\d+)枚以下の時/);
    if (handConditionMatch) {
      if (user.hand.length > parseInt(handConditionMatch[1], 10)) return;
    }

    const costDownMatch = effectText.match(/次に使用するカードのコストを(\d+)下げる/);
    if (costDownMatch) {
      user.buffs.nextCardCostDown = (user.buffs.nextCardCostDown || 0) + parseInt(costDownMatch[1], 10);
    }

    if (effectText.includes("次に使用するシールドかダメージ効果を2倍にする") || 
        effectText.includes("次に使用するシールドかヒール効果を2倍にする")) {
      user.buffs.doubleNextEffect = true;
    }

    if (effectText.includes("体力が10以下の時、「Legato」を引く") && user.hp <= 10) {
      const deckIdx = user.deck.findIndex(c => c.曲名 === 'Legato');
      if (deckIdx !== -1) {
        const [legato] = user.deck.splice(deckIdx, 1);
        user.hand.length >= 8 ? user.discard.push(legato) : user.hand.push(legato);
        addEvent('draw', { name: 'Legato' });
      }
    }

    if (effectText.includes("このターン中、「Legato」を使用している場合、カードを2枚引く")) {
      if (user.buffs.turnCardsPlayed.includes('Legato')) {
        drawCard(user); drawCard(user);
        addEvent('draw', { count: 2 });
      }
    }

    if (effectText.includes("カードを2枚引く") && !effectText.includes("ユニットが")) {
      drawCard(user); drawCard(user);
      addEvent('draw', { count: 2 });
    } else if (effectText.includes("カードを1枚引く") && !effectText.includes("Junction")) {
      drawCard(user);
      addEvent('draw', { count: 1 });
    }

    if (effectText.includes("をドローする")) {
      drawCard(user);
      addEvent('draw', { count: 1 });
    }

    if (effectText.includes("手札をランダムに1枚捨てる") || effectText.includes("手札から1枚選び捨てる")) {
      const discarded = discardRandomFromHand(user);
      if (discarded) addEvent('discard', { name: discarded.曲名 });
    }

    if (effectText.includes("体力が10以下の時、相手に10ダメージ") && user.hp <= 10) {
      let dmg = 10;
      if (target.shield > 0) {
        const blocked = Math.min(target.shield, dmg);
        target.shield -= blocked;
        dmg -= blocked;
      }
      if (dmg > 0) target.hp -= dmg;
      addEvent('damage', { value: 10 });
    }

    if (effectText.includes("ボルテージを3回復する")) {
      user.currentVoltage = Math.min(user.maxVoltage, user.currentVoltage + 3);
      addEvent('voltage', { value: 3 });
    }

    if (effectText.includes("このターン中、自分へのダメージが0になる")) {
      user.buffs.damageImmune = true;
    }
    
    if (effectText.includes("SPを回復する")) {
        user.specialUsed = false;
        addEvent('sp_recover', {});
    }
  };

  user.buffs.turnCardsPlayed.push(card.曲名);
  user.buffs.totalCardsPlayedCount = (user.buffs.totalCardsPlayedCount || 0) + 1;
  
  // Passive: Colorfulness
  if (user.buffs.shieldOnPlayActive) {
    user.shield += 1;
    addEvent('shield', { value: 1, reason: 'colorfulness' });
  }

  if (!user.buffs.turnCardsPlayedDetails) user.buffs.turnCardsPlayedDetails = [];
  user.buffs.turnCardsPlayedDetails.push({ 曲名: card.曲名, 歌唱: card.歌唱 });

  // Passive effects
  if (user.buffs.kozueDrawActive && card.センター.includes("乙宗 梢")) {
    drawCard(user);
    addEvent('draw', { count: 1, reason: 'kozue' });
  }
  if (user.buffs.sayakaDmgActive && (card.センター.includes("村野さやか") || card.センター.includes("村野 さやか"))) {
    let dmg = 3;
    if (target.shield > 0) {
      const blocked = Math.min(target.shield, dmg);
      target.shield -= blocked;
      dmg -= blocked;
    }
    if (dmg > 0) target.hp -= dmg;
    addEvent('damage', { value: 3, reason: 'sayaka' });
  }

  const useDouble = user.buffs.doubleNextEffect;
  let consumedDouble = false;

  // 1. Damage (Self)
  const selfDmg = Number(card.ダメージ) || 0;
  if (selfDmg > 0 && !user.buffs.damageImmune) {
    const actualSelfDmg = useDouble ? selfDmg * 2 : selfDmg;
    if (useDouble) consumedDouble = true;
    user.hp -= actualSelfDmg;
    user.buffs.tookDamageThisTurn = true;
    user.buffs.tookDamageAmount = (user.buffs.tookDamageAmount || 0) + actualSelfDmg;
    addEvent('damage_self', { value: actualSelfDmg });

    if (user.buffs.damageReflectionActive) {
      let rDmg = 1;
      if (target.shield > 0) { target.shield -= 1; rDmg = 0; }
      if (rDmg > 0) target.hp -= 1;
      addEvent('damage', { value: 1, reason: 'reflection' });
    }
  }

  // 2. Heal
  let heal = Number(card.ヒール) || 0;
  if (user.buffs.doubleThisCard) heal *= 2;

  if (heal > 0) {
    user.hp = Math.min(user.maxHp, user.hp + heal);
    addEvent('heal', { value: heal });
  }

  // 3. Effects
  processEffects(card.効果1);
  processEffects(card.効果2);

  // 4. Power
  let power = Number(card.パワー) || 0;
  if (user.buffs.doubleThisCard) power *= 2;

  if (power > 0) {
    let dmg = power;
    if (user.buffs.doubleNextPower) {
      dmg *= 2;
      user.buffs.doubleNextPower = false;
    }
    if (target.shield > 0) {
      const blocked = Math.min(target.shield, dmg);
      target.shield -= blocked;
      dmg -= blocked;
    }
    if (dmg > 0) {
        target.hp -= dmg;
        target.buffs.tookDamageThisTurn = true;
        target.buffs.tookDamageAmount = (target.buffs.tookDamageAmount || 0) + dmg;
        
        if (target.buffs.damageReflectionActive) {
           let rDmg = 1;
           if (user.shield > 0) { user.shield -= 1; rDmg = 0; }
           if (rDmg > 0) user.hp -= 1;
           addEvent('damage', { value: 1, reason: 'reflection_back', target: isPlayer ? 'player' : 'enemy' });
        }
    }
    addEvent('damage', { value: power, actual: dmg });
  }

  // 5. Shield
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
  user.buffs.doubleThisCard = false; // Reset per card

  return { newState, events };
}
