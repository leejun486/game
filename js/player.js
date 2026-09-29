'use strict';
// The local player: persistent state, derived stats, inventory, skills, auto-hunt (AI 모드).
class Player extends Hero {
  constructor(save) {
    const cls = save.cls;
    super({ x: save.x || D.TOWN.x, y: save.y || D.TOWN.y + 120, sheet: D.CLASSES[cls].sheet, cls, name: save.name });
    Content.migrate(save);
    this.s = save; // persistent data
    Looks.migrate(this);
    Pets.migrate(this);
    Mounts.migrate(this);
    this.mountId = save.mount; this.rideFace = 1;
    Skills.migrate(this);
    this.idleT = 0; this.nextFlourish = 3; this.trail = []; this.moteT = 0;
    this.radius = 14;
    this.skillCd = {}; this.buffs = [];
    this.mp = save.mp ?? 0;
    this.moveTo = null; this.waypoints = []; this.talkTo = null;
    this.auto = false; this.combatT = 0; this.potionCd = 0; this.sprintT = 0; this.sprintCd = 0;
    this.keys = { x: 0, y: 0 };
    this.navPriority = true; this.ignore = {}; this.lastX = this.x; this.lastY = this.y; this.stuckT = 0;
    this.recalc();
    this.hp = save.hp ? Math.min(save.hp, this.maxHp) : this.maxHp;
    this.mp = save.mp ? Math.min(save.mp, this.maxMp) : this.maxMp;
  }
  static newSave(name, cls) {
    const wpn = { sword: 'w_sword1', bow: 'w_bow1', staff: 'w_staff1' }[D.CLASSES[cls].weapon];
    const s = {
      v: 1, name, cls, lv: 1, exp: 0, gold: 5000, dia: 1066, uid: 10,
      inv: [
        { uid: 1, id: wpn, n: 1, en: 0 }, { uid: 2, id: 'a_1', n: 1, en: 0 },
        { uid: 3, id: 'hp_s', n: 50 }, { uid: 4, id: 'mp_s', n: 20 }, { uid: 5, id: 'tp_town', n: 5 }, { uid: 6, id: 'ticket', n: 3 },
      ],
      equip: { weapon: 1, armor: 2, ring: null },
      cards: {}, card: null,
      quest: 0, qprog: 0, qv: 2, daily: { day: '', prog: 0, done: false },
      autoPotion: true, kills: 0, playTime: 0,
    };
    return s;
  }
  // ---------------------------------------------------------------- inventory
  item(uid) { return this.s.inv.find((i) => i.uid === uid); }
  count(id) { return this.s.inv.filter((i) => i.id === id).reduce((a, b) => a + b.n, 0); }
  addItem(id, n = 1, en = 0) {
    const def = D.ITEMS[id];
    if (!D.isEquip(def)) {
      const ex = this.s.inv.find((i) => i.id === id);
      if (ex) { ex.n += n; return ex; }
      const it = { uid: this.s.uid++, id, n }; this.s.inv.push(it); return it;
    }
    let last;
    for (let i = 0; i < n; i++) { last = { uid: this.s.uid++, id, n: 1, en }; this.s.inv.push(last); }
    return last;
  }
  removeItem(uid, n = 1) {
    const it = this.item(uid); if (!it) return false;
    it.n -= n;
    if (it.n <= 0) {
      this.s.inv.splice(this.s.inv.indexOf(it), 1);
      for (const k in this.s.equip) if (this.s.equip[k] === uid) this.s.equip[k] = null;
    }
    return true;
  }
  removeById(id, n = 1) {
    const it = this.s.inv.find((i) => i.id === id && i.n >= n);
    return it ? this.removeItem(it.uid, n) : false;
  }
  equipped(slot) { const u = this.s.equip[slot]; return u ? this.item(u) : null; }
  canEquip(it) {
    const def = D.ITEMS[it.id];
    if (!D.isEquip(def)) return '장착할 수 없는 아이템입니다.';
    if (def.cls && def.cls !== this.cls) return `${D.CLASSES[def.cls].name} 전용 장비입니다.`;
    if ((def.lv || 1) > this.s.lv) return `레벨 ${def.lv} 이상 착용 가능합니다.`;
    return null;
  }
  equip(uid) {
    const it = this.item(uid);
    const err = this.canEquip(it);
    if (err) return err;
    this.s.equip[D.ITEMS[it.id].kind] = uid;
    this.recalc();
    return null;
  }
  unequip(slot) { this.s.equip[slot] = null; this.recalc(); }
  // rough power of a piece of gear, used to decide auto-equips
  gearScore(it) {
    if (!it) return -1;
    const d = D.ITEMS[it.id], en = it.en || 0;
    if (d.kind === 'weapon') return d.atk + en * 2 + Math.max(0, en - 6) * 2;
    if (d.kind === 'armor') return d.def + en * 1.5 + (d.hp + en * 15) / 20;
    return (d.atk || 0) * 2 + (d.def || 0) + (d.hp || 0) / 40 + (d.atkSpd || 0);
  }
  // equip anything in the bag that is usable and better than what is worn
  autoEquipBest() {
    const changed = [];
    for (const slot of ['weapon', 'armor', 'ring']) {
      let best = this.equipped(slot), bestScore = this.gearScore(best);
      for (const it of this.s.inv) {
        if (D.ITEMS[it.id].kind !== slot || this.canEquip(it)) continue;
        const sc = this.gearScore(it);
        if (sc > bestScore) { best = it; bestScore = sc; }
      }
      if (best && best.uid !== this.s.equip[slot]) { this.s.equip[slot] = best.uid; changed.push(best); }
    }
    if (!changed.length) return;
    this.recalc();
    for (const it of changed) {
      const name = (it.en ? `+${it.en} ` : '') + D.ITEMS[it.id].name;
      UI.toast(`${name} 자동 장착!`, '#7ee07e');
      UI.chat(`더 좋은 장비 ${name}을(를) 자동으로 장착했습니다.`, 'sys');
    }
  }

  // ---------------------------------------------------------------- stats
  recalc() {
    const c = this.classDef, lv = this.s.lv;
    const st = {
      maxHp: c.base.hp + c.grow.hp * (lv - 1), maxMp: c.base.mp + c.grow.mp * (lv - 1),
      atk: c.base.atk + c.grow.atk * (lv - 1), def: c.base.def + c.grow.def * (lv - 1),
      atkSpd: 0, castSpd: 0, eva: 0, dmgRed: 0, moveSpd: 0, crit: 5 + lv * 0.15, expPct: 0,
    };
    const add = (o, mul = 1) => {
      for (const k in o) {
        if (k === 'hp') st.maxHp += o[k] * mul;
        else if (k === 'mp') st.maxMp += o[k] * mul;
        else if (k in st) st[k] += o[k] * mul;
      }
    };
    for (const slot of ['weapon', 'armor', 'ring']) {
      const it = this.equipped(slot);
      if (!it) continue;
      const def = D.ITEMS[it.id];
      add({ atk: def.atk || 0, def: def.def || 0, hp: def.hp || 0, atkSpd: def.atkSpd || 0 });
      const en = it.en || 0;
      if (slot === 'weapon') st.atk += en * 2 + Math.max(0, en - 6) * 2;
      if (slot === 'armor') { st.def += en * 1.5; st.maxHp += en * 15; }
    }
    // transcend card
    const card = this.s.card && D.CARD_BY_ID[this.s.card];
    if (card) add(D.cardStats(card, (this.s.cards[card.id] || { lv: 1 }).lv));
    // collection bonus
    for (const id in this.s.cards) add(D.COLLECT_BONUS[D.CARD_BY_ID[id].grade]);
    // item collections + guild buff
    for (const b of Content.bonuses(this)) add(b);
    // weapon look: equip + collection bonus
    for (const b of Looks.bonuses(this)) add(b);
    for (const b of Pets.bonuses(this)) add(b);
    for (const b of Mounts.bonuses(this)) add(b);
    // buffs
    let atkPct = 0;
    for (const b of this.buffs) { add({ atkSpd: b.atkSpd || 0, moveSpd: b.moveSpd || 0, crit: b.crit || 0, dmgRed: b.dmgRed || 0 }); atkPct += b.atkPct || 0; }
    st.atk *= 1 + atkPct / 100;
    st.maxHp = Math.round(st.maxHp); st.maxMp = Math.round(st.maxMp);
    st.atk = Math.round(st.atk); st.def = Math.round(st.def);
    this.stats = st;
    this.maxHp = st.maxHp; this.maxMp = st.maxMp;
    if (this.hp > this.maxHp) this.hp = this.maxHp;
    if (this.mp > this.maxMp) this.mp = this.maxMp;
    // bodies are drawn without their baked weapon; the weapon look is a separate layer
    const base = card ? card.sheet : c.sheet;
    this.sheet = window.SPRITE_ROWS[base + '_nw'] ? base + '_nw' : base;
    this.power = Math.round(st.atk * 10 + st.def * 8 + st.maxHp + st.atkSpd * 15 + st.eva * 2 + lv * 50);
  }
  addBuff(b) {
    this.buffs = this.buffs.filter((x) => x.id !== b.id);
    this.buffs.push(Object.assign({}, b, { t: b.dur }));
    this.recalc();
  }

  // ---------------------------------------------------------------- progression
  gainExp(n, game) {
    if (this.s.lv >= D.MAX_LV) return;
    n = Math.round(n * (1 + this.stats.expPct / 100));
    this.s.exp += n;
    let need = D.expToNext(this.s.lv);
    while (this.s.exp >= need && this.s.lv < D.MAX_LV) {
      this.s.exp -= need; this.s.lv++;
      need = D.expToNext(this.s.lv);
      this.recalc(); this.hp = this.maxHp; this.mp = this.maxMp;
      game.fx.push(Combat.makeFx('levelup', this.x, this.y, { follow: this }));
      U.sfx.level();
      UI.toast(`레벨 업! Lv.${this.s.lv}`, '#ffe38a');
      UI.chat(`축하합니다! 레벨 ${this.s.lv}이(가) 되었습니다. 스킬 포인트 +1 (K)`, 'sys');
      if (this.s.lv % 5 === 0) BotChat.onEvent(`${this.name}가 레벨 ${this.s.lv}을(를) 달성했다`, [`${this.name}님 ${this.s.lv}렙 ㅊㅋ`, 'ㅊㅊ', `벌써 ${this.s.lv}렙이네`]);
      for (const id of this.classDef.skills) if (D.SKILLS[id].unlock === this.s.lv) UI.toast(`새 스킬 해금: ${D.SKILLS[id].name}`, '#ffe38a');
      this.autoEquipBest();
      Quests.check(game);
    }
  }
  expPct() { return this.s.lv >= D.MAX_LV ? 100 : (this.s.exp / D.expToNext(this.s.lv)) * 100; }

  // ---------------------------------------------------------------- actions
  useItem(uid, game) {
    const it = this.item(uid); if (!it) return;
    const def = D.ITEMS[it.id];
    if (this.dead) return;
    if (def.kind === 'potion') {
      if (def.heal && this.hp >= this.maxHp && !def.mana) return UI.toast('HP가 가득 찼습니다.');
      if (def.heal) { this.hp = Math.min(this.maxHp, this.hp + def.heal); Combat.floatText(game, this, '+' + def.heal, '#6cff7a'); }
      if (def.mana) { this.mp = Math.min(this.maxMp, this.mp + def.mana); Combat.floatText(game, this, '+' + def.mana, '#6cb6ff'); }
      game.fx.push(Combat.makeFx('heal', this.x, this.y, { follow: this, color: def.mana ? '#6cb6ff' : '#7dff8a', small: true }));
      U.sfx.potion();
      this.removeItem(uid);
    } else if (def.kind === 'buff') {
      this.addBuff(def.buff); U.sfx.potion(); this.removeItem(uid);
      game.fx.push(Combat.makeFx('buff', this.x, this.y, { follow: this, color: '#7dff8a' }));
    } else if (def.kind === 'scroll') {
      this.removeItem(uid);
      game.returnToTown();
    } else if (D.isEquip(def)) {
      const err = this.equip(uid); if (err) UI.toast(err); else UI.toast(`${def.name} 장착`);
    } else if (def.kind === 'enchant') {
      UI.openEnchant(def.target);
    } else if (def.kind === 'ticket') {
      UI.open('summon');
    }
    UI.refreshAll();
  }
  castSkill(i, game) {
    const id = this.classDef.skills[i];
    if (!id) return false;
    if (!Skills.unlocked(this, id)) { UI.toast(`${D.SKILLS[id].name}: Lv.${D.SKILLS[id].unlock}에 해금됩니다.`); return false; }
    const sk = Skills.eff(this, id);
    if (this.dead || (this.action && !this.action.idle)) return false;
    if (this.action && this.action.idle) this.action = null;
    if ((this.skillCd[id] || 0) > 0) return false;
    if (this.mp < sk.mp) { UI.toast('MP가 부족합니다.'); return false; }
    let target = this.target && !this.target.dead ? this.target : null;
    const needsTarget = sk.type === 'single' || sk.type === 'aoe_target' || sk.type === 'multi' || sk.type === 'pierce';
    if (needsTarget && !target) {
      target = game.nearestMonster(this, this.classDef.range + 250);
      if (!target) { UI.toast('대상이 없습니다.'); return false; }
      this.target = target;
    }
    if (needsTarget) {
      const range = this.skillRange(sk) + target.radius + 20;
      if (U.dist(this, target) > range) { this.pendingSkill = i; return false; }
    }
    this.mp -= sk.mp;
    this.skillCd[id] = sk.cd;
    this.pendingSkill = null;
    if (this.mounted) Mounts.dismount(this, game);
    Skills.cast(this, id, sk, target, game);
    UI.flashSlot(i);
    return true;
  }
  skillRange(sk) { return sk.range || (sk.type === 'aoe_target' ? Math.max(this.classDef.range, 300) : this.classDef.range); }
  sprint() {
    if (this.sprintCd > 0) return;
    this.sprintT = 3; this.sprintCd = 12;
    UI.toast('질주!', '#9fe0ff');
  }
  // go to a far point, routing via the nearest town gate if needed
  // go to a far point; A* routes around walls, water and buildings (gate logic kept as a fallback)
  navigateTo(x, y) {
    this.waypoints = [];
    const path = Nav.ready ? Nav.find(this.x, this.y, x, y) : null;
    if (path && path.length) { this.waypoints = path; this.moveTo = this.waypoints.shift(); return; }
    const inTown = World.zoneAt(this.x, this.y).id === 'town';
    const destTown = World.zoneAt(x, y).id === 'town';
    const T = D.TILE, gates = [[90, 73], [107, 90], [90, 107], [73, 90]];
    const inner = [[90, 77], [103, 90], [90, 103], [77, 90]];
    const nearestGate = (px, py) => {
      let bi = 0, bd = 1e9;
      gates.forEach(([gx, gy], i) => { const d = Math.hypot(gx * T - px, gy * T - py); if (d < bd) { bd = d; bi = i; } });
      return bi;
    };
    if (inTown && !destTown) {
      const g = nearestGate(x, y);
      this.waypoints.push({ x: inner[g][0] * T + 32, y: inner[g][1] * T + 32 }, { x: gates[g][0] * T + 32, y: gates[g][1] * T + 32 });
    } else if (!inTown && destTown) {
      const g = nearestGate(this.x, this.y);
      this.waypoints.push({ x: gates[g][0] * T + 32, y: gates[g][1] * T + 32 }, { x: inner[g][0] * T + 32, y: inner[g][1] * T + 32 });
    }
    this.waypoints.push({ x, y });
    this.moveTo = this.waypoints.shift();
  }
  // call after movement each frame: detects being pinned against a wall
  checkStuck(dt, speed, game) {
    const moved = Math.hypot(this.x - this.lastX, this.y - this.lastY);
    this.lastX = this.x; this.lastY = this.y;
    if (!this.moving || this.action) { this.stuckT = Math.max(0, (this.stuckT || 0) - dt * 2); return; }
    if (moved < speed * dt * 0.3) this.stuckT = (this.stuckT || 0) + dt; else this.stuckT = Math.max(0, (this.stuckT || 0) - dt);
    if (this.stuckT > 0.45 && !this.rerouted) { this.forceRoute = true; this.rerouted = true; if (this.moveTo) this.navigateTo(...this.finalDest()); }
    if (this.stuckT > 2.2) {
      // still pinned: give up on this goal so AI mode can choose another
      this.stuckT = 0; this.rerouted = false; this.route = null;
      if (this.target) {
        this.ignore[this.target.id] = game.time + 10;
        if (this.auto) this.target = null;
        UI.chat('길이 막혀 다른 대상을 찾습니다.', 'sys');
      } else if (this.moveTo) {
        this.moveTo = null; this.waypoints = [];
        if (this.auto) this.driftT = 0;
      }
    }
    if (this.stuckT === 0) this.rerouted = false;
  }
  finalDest() { const w = this.waypoints.length ? this.waypoints[this.waypoints.length - 1] : this.moveTo; return [w.x, w.y]; }
  stopAll() { this.moveTo = null; this.waypoints = []; this.target = null; this.talkTo = null; this.pendingSkill = null; this.questTravel = null; }

  update(dt, game) {
    super.update(dt);
    if (this.dead) return;
    this.updateIdle(dt, game);
    this.move(dt, game);
    Mounts.tick(this, dt, game);
    this.checkStuck(dt, this.curSpeed || 150, game);
  }
  move(dt, game) {
    this.s.playTime += dt;
    this.inTown = World.zoneAt(this.x, this.y).safe;
    this.atkCd -= dt; this.potionCd -= dt; this.combatT -= dt; this.sprintCd -= dt;
    if (this.sprintT > 0) this.sprintT -= dt;
    for (const k in this.skillCd) if (this.skillCd[k] > 0) this.skillCd[k] -= dt;
    // buffs
    let changed = false;
    for (const b of this.buffs) { b.t -= dt; if (b.t <= 0) changed = true; }
    if (changed) { this.buffs = this.buffs.filter((b) => b.t > 0); this.recalc(); }
    // regen
    const regenMul = this.inTown ? 5 : this.combatT > 0 ? 0.4 : 1.5;
    this.hp = Math.min(this.maxHp, this.hp + (this.maxHp * 0.006 + 0.5) * regenMul * dt);
    this.mp = Math.min(this.maxMp, this.mp + (this.maxMp * 0.012 + 0.8) * regenMul * dt);
    // auto potion
    if (this.s.autoPotion && this.potionCd <= 0 && this.hp < this.maxHp * 0.55) {
      const miss = this.maxHp - this.hp;
      const order = miss > 600 ? ['hp_l', 'hp_m', 'hp_s'] : miss > 220 ? ['hp_m', 'hp_s', 'hp_l'] : ['hp_s', 'hp_m', 'hp_l'];
      for (const id of order) {
        const it = this.s.inv.find((i) => i.id === id);
        if (it) { this.useItem(it.uid, game); this.potionCd = 0.7; break; }
      }
    }
    if (this.s.autoPotion && this.potionCd <= 0 && this.mp < this.maxMp * 0.2 && this.auto) {
      const it = this.s.inv.find((i) => i.id === 'mp_s');
      if (it) { this.useItem(it.uid, game); this.potionCd = 0.7; }
    }
    if (this.action) return;

    const speed = Mounts.speedMul(this) * 165 * (1 + this.stats.moveSpd / 100) * (this.sprintT > 0 ? 1.45 : 1) * this.speedMul * (this.s.gm && this.s.gm.speed ? 2 : 1);
    this.curSpeed = speed;
    // ride automatically for long trips (quest travel, AI travel, map clicks)
    if (this.moveTo && !this.mounted && this.mountId && this.s.autoRide && !this.target && this.combatT <= 0) {
      const [fx, fy] = this.finalDest();
      if (Math.hypot(fx - this.x, fy - this.y) > 380) Mounts.mount(this, game, true);
    }
    // keyboard movement overrides everything
    if (this.keys.x || this.keys.y) {
      const l = Math.hypot(this.keys.x, this.keys.y);
      this.tryMove((this.keys.x / l) * speed * dt, (this.keys.y / l) * speed * dt);
      this.dir = dirFromVec(this.keys.x, this.keys.y); this.diag = diagFromVec(this.keys.x, this.keys.y); this.moving = true;
      this.moveTo = null; this.waypoints = []; this.talkTo = null; this.questTravel = null;
      if (!this.auto) this.target = null;
      return;
    }
    // AI mode: acquire targets & cast skills
    if (this.auto) this.autoThink(game);
    // talk to NPC
    if (this.talkTo) {
      if (this.goTo(this.talkTo.x, this.talkTo.y, speed, dt, 64)) {
        this.moving = false; this.face(this.talkTo);
        const n = this.talkTo; this.talkTo = null;
        game.interact(n);
      }
      return;
    }
    // attack target
    if (this.target) {
      if (this.target.dead) { this.target = null; this.moving = false; return; }
      const psk = this.pendingSkill != null ? Skills.eff(this, this.classDef.skills[this.pendingSkill]) : null;
      const range = (psk ? this.skillRange(psk) : this.classDef.range) + this.target.radius;
      if (U.dist(this, this.target) > range) { this.goTo(this.target.x, this.target.y, speed, dt, range - 8); return; }
      this.moving = false;
      if (psk) { const i = this.pendingSkill; this.pendingSkill = null; if (this.castSkill(i, game)) return; }
      if (this.atkCd <= 0) { this.basicAttack(this.target, game); this.combatT = 4; }
      else this.face(this.target);
      return;
    }
    if (this.moveTo) {
      if (this.moveToward(this.moveTo.x, this.moveTo.y, speed, dt, 6)) {
        this.moveTo = this.waypoints.shift() || null;
        if (!this.moveTo) {
          this.moving = false;
          if (this.questTravel) { const q = this.questTravel; this.questTravel = null; if (q.hunt) { this.auto = true; UI.toast('사냥터에 도착했습니다. AI 모드로 사냥합니다.', '#9fe0ff'); UI.refreshHud(); } }
        }
      }
      return;
    }
    this.moving = false;
  }
  autoThink(game) {
    if (this.inTown && !this.target && !this.moveTo) return;
    if (!this.target || this.target.dead) {
      this.target = game.nearestMonster(this, 650, (m) => !(this.ignore[m.id] > game.time) && ((m.def.boss ? this.s.lv >= m.lv - 6 : m.lv <= this.s.lv + 5) || m.target === this));
      if (this.questTravel) this.target = null; // riding to the quest spot: don't stop for fights
      if (!this.target && !this.moveTo && !World.zoneAt(this.x, this.y).dungeon) {
        // drift toward the centre of the closest suitable spawn
        const sp = game.bestSpawnNear(this);
        if (sp) this.navigateTo(sp.x * D.TILE + U.rand(-150, 150), sp.y * D.TILE + U.rand(-150, 150));
      }
    }
    if (this.target && !this.action && U.dist(this, this.target) < this.classDef.range + 200) {
      const skills = this.classDef.skills;
      for (let i = skills.length - 1; i >= 0; i--) {
        if (!Skills.unlocked(this, skills[i])) continue;
        const sk = Skills.eff(this, skills[i]);
        if ((this.skillCd[skills[i]] || 0) > 0 || this.mp < sk.mp + this.maxMp * 0.15) continue;
        if (sk.type === 'heal' && this.hp > this.maxHp * 0.6) continue;
        if (sk.type === 'aoe_self' && game.monstersNear(this, sk.radius) < 2) continue;
        if (this.castSkill(i, game)) break;
      }
    }
  }
  drawOverlay(ctx, cam) {
    const x = this.x - cam.x, y = this.headY - cam.y;
    const cheat = this.s.gm && (this.s.gm.god || this.s.gm.oneHit || this.s.gm.speed);
    drawLabel(ctx, (cheat ? '[GM] ' : '') + this.name, x, y - 8, cheat ? '#ffd76a' : '#ffffff', 'bold 12px sans-serif');
    if (this.s.guild) drawLabel(ctx, this.s.guild, x - ctx.measureText(this.name).width / 2 - 16, y - 8, '#ffe08a', '11px sans-serif');
    drawHpBar(ctx, x, y - 6, 46, this.hp / this.maxHp);
    if (this.s.card) {
      const g = D.CARD_BY_ID[this.s.card].grade;
      drawLabel(ctx, '초월', x, y - 22, D.GRADES[g].color, 'bold 11px sans-serif');
    }
    if (this.bubble && this.bubble.t > 0) drawBubble(ctx, this.bubble.text, x, y - 36);
  }
  // standing still: breathe, and every few seconds show off the weapon look
  updateIdle(dt, game) {
    const busy = this.keys.x || this.keys.y || this.target || this.moveTo || this.talkTo || this.auto || this.teleporting || this.mounted;
    if (this.action && this.action.idle && busy) { this.action = null; this.orbitFx = null; }
    if (this.orbitFx) { this.orbitFx.t += dt; if (this.orbitFx.t > this.orbitFx.dur) this.orbitFx = null; }
    if (this.action && this.action.flourish) Looks.tickFlourish(this, game, dt, this.weaponPt);
    if (!busy && !this.moving && !this.action) {
      this.idleT += dt;
      if (this.idleT > this.nextFlourish) { Looks.startFlourish(this, game); this.idleT = 0; this.nextFlourish = U.rand(5, 8); }
    } else if (!this.action || !this.action.idle) this.idleT = 0;
    // ambient motes around rare+ weapons
    const look = Looks.BY_ID[Looks.current(this)];
    this.moteT -= dt;
    if (look.grade >= 3 && this.weaponPt && this.moteT <= 0) {
      this.moteT = look.grade >= 4 ? 0.07 : 0.14;
      game.fx.push(Combat.makeFx('mote', this.weaponPt.cx + U.rand(-10, 10), this.weaponPt.cy + U.rand(-10, 10), { color: Looks.ELEM[look.el].color }));
    }
  }
  draw(ctx, cam) {
    const { row: row0, col } = this.frame();
    const row = diagRow(this, row0);
    let alpha = this.dead ? Math.max(0, 1 - Math.max(0, this.deadT - 0.8) / 1.2) : 1;
    if (this.fadeIn > 0) alpha *= 1 - this.fadeIn / 0.45;
    if (alpha <= 0) return;
    const now = performance.now() / 1000;
    const x = this.x - cam.x;
    // breathing bob while idle
    const bob = !this.action && !this.moving && this.idleT > 0.6 ? Math.round(Math.sin(now * 2.4) * 1.2) : 0;
    const y = this.y - cam.y + bob;
    ctx.globalAlpha = alpha;
    this.aura(ctx, x, y);
    const id = Looks.current(this), look = Looks.BY_ID[id];
    if (this.mounted) {
      const rrow = this.rideFace > 0 ? 11 : 9;
      Mounts.drawEntity(ctx, cam, this, (g, fx, fy) => { g.imageSmoothingEnabled = false; Looks.drawComposite(g, this.sheet, id, rrow, 0, fx, fy, 1, { flash: this.flash, t: now }); });
      this.weaponPt = null; ctx.globalAlpha = 1;
      return;
    }
    const pt = Looks.drawComposite(ctx, this.sheet, id, row, col, x, y, this.scale, { flash: this.flash, t: now });
    this.weaponPt = pt ? { cx: pt.cx + cam.x, cy: pt.cy + cam.y, tx: pt.tx + cam.x, ty: pt.ty + cam.y } : null;
    // weapon trail during swings and flourishes
    const swinging = this.action && !this.dead && (this.action.anim === 'slash' || this.action.flourish || look.grade >= 3);
    if (swinging && this.weaponPt) this.trail.push({ x: this.weaponPt.tx, y: this.weaponPt.ty, t: now });
    this.trail = this.trail.filter((p) => now - p.t < 0.16);
    if (this.trail.length > 1) {
      const col2 = Looks.ELEM[look.el].color;
      ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.lineCap = 'round';
      for (let i = 1; i < this.trail.length; i++) {
        const a = this.trail[i - 1], b = this.trail[i], k = 1 - (now - b.t) / 0.16;
        ctx.strokeStyle = Looks.hexA(col2, 0.55 * k * alpha); ctx.lineWidth = 2 + 7 * k;
        ctx.beginPath(); ctx.moveTo(a.x - cam.x, a.y - cam.y); ctx.lineTo(b.x - cam.x, b.y - cam.y); ctx.stroke();
      }
      ctx.restore();
    }
    // orbiting motes (mage orb twirl / elf draw)
    if (this.orbitFx && pt) {
      const o = this.orbitFx, k = Math.min(1, o.t / 0.3) * Math.min(1, (o.dur - o.t) / 0.3);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 6; i++) {
        const a = now * 5 + (i / 6) * Math.PI * 2, r = 20 + Math.sin(now * 4 + i) * 4;
        ctx.fillStyle = Looks.hexA(o.color, 0.9 * k);
        ctx.beginPath(); ctx.arc(pt.cx + Math.cos(a) * r, pt.cy + Math.sin(a) * r * 0.55, 2.6, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
    if (this.slowT > 0) {
      ctx.globalAlpha = 0.35; ctx.fillStyle = '#7fd4ff';
      ctx.beginPath(); ctx.ellipse(x, y, 18, 7, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  get headY() { return this.mounted ? this.y - (this.rideTop || 90) : this.y - 58 * this.scale; }
  aura(ctx, x, y) {
    if (!this.s.card) return;
    const g = D.CARD_BY_ID[this.s.card].grade;
    if (g < 3) return;
    const t = performance.now() / 1000;
    ctx.save();
    ctx.globalAlpha *= 0.35 + Math.sin(t * 2.5) * 0.12;
    const col = g === 4 ? '255,190,60' : '255,60,50';
    const gr = ctx.createRadialGradient(x, y - 30, 4, x, y - 30, 46);
    gr.addColorStop(0, `rgba(${col},0.6)`); gr.addColorStop(1, `rgba(${col},0)`);
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y - 30, 46, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
}
