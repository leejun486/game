'use strict';
// 스킬 트리 (Path of Exile style): each skill has 3 tiers, and every tier offers two mutually
// exclusive branches that change how the skill behaves. Skill points come from levelling up.
const Skills = (() => {
  const { esc, ico } = UI;
  const TIER_LV = [1, 10, 20];
  const TIER_COST = [1, 2, 3];
  const RESET_COST = 10000;

  // m: modifier vocabulary understood by cast()
  //   mult/cd/mp/radius: +fraction   crit: +%   lifesteal: fraction   stun/slow: seconds
  //   count: +n   ground: {mult, dur, kind}   splash: {r, mult}   echo: {delay, mult}
  //   shards: {n, mult}   chain: +n   noDecay   dot: {mult, dur, kind}   and skill-specific flags
  const O = (tag, name, desc, m) => ({ tag, name, desc, m });
  const TREE = {
    // ---------------- knight
    k_smash: [
      [O('파쇄', '파쇄 강타', '피해 +40%', { mult: 0.4 }), O('흡혈', '흡혈 강타', '준 피해의 15%만큼 HP 회복', { lifesteal: 0.15 })],
      [O('연속', '연속 강타', '쿨타임 -35%', { cd: -0.35 }), O('충격파', '충격파', '대상 주변 90 범위에 60% 광역 피해', { splash: { r: 90, mult: 0.6 } })],
      [O('처형', '처형', '치명타 확률 +30%', { crit: 30 }), O('기절', '기절 강타', '대상을 1.5초 기절', { stun: 1.5 })],
    ],
    k_whirl: [
      [O('광역', '넓은 회오리', '범위 +35%', { radius: 0.35 }), O('강화', '예리한 회오리', '피해 +40%', { mult: 0.4 })],
      [O('폭풍', '칼날 폭풍', '3회 연속 회전 (각 60%)', { spins: 3 }), O('흡혈', '흡혈 회오리', '준 피해의 10% 회복', { lifesteal: 0.1 })],
      [O('진공', '진공 베기', '주변 적을 중심으로 끌어당김', { pull: true }), O('출혈', '피의 소용돌이', '바닥에 4초간 출혈 지대 (틱당 25%)', { ground: { mult: 0.25, dur: 4, kind: 'bleed' } })],
    ],
    k_rage: [
      [O('지속', '끝없는 분노', '지속시간 +10초', { buffDur: 10 }), O('격노', '격노', '공격력 +20% 추가', { buffAtk: 20 })],
      [O('회복', '투지', '발동 시 최대 HP 25% 회복', { healPct: 0.25 }), O('신속', '광전사의 속도', '공격속도 +20% 추가', { buffSpd: 20 })],
      [O('불굴', '불굴', '버프 중 받는 피해 -20', { buffDR: 20 }), O('광폭', '광폭화', '버프 중 치명타 +20%', { buffCrit: 20 })],
    ],
    k_doom: [
      [O('파멸', '완전한 파멸', '피해 +50%', { mult: 0.5 }), O('신속', '신속한 심판', '쿨타임 -30%', { cd: -0.3 })],
      [O('지옥불', '지옥불', '대상 위치에 4초간 불타는 바닥 (틱당 35%)', { ground: { mult: 0.35, dur: 4, kind: 'fire' } }), O('처단', '처단', '150 범위에 70% 광역 피해', { splash: { r: 150, mult: 0.7 } })],
      [O('연격', '파멸의 연격', '0.3초 후 60% 추가 타격', { echo: { delay: 300, mult: 0.6 } }), O('심판', '심판', '대상을 2초 기절', { stun: 2 })],
    ],
    k_charge: [
      [O('강타', '맹렬한 돌진', '피해 +40%', { mult: 0.4 }), O('신속', '번개 돌진', '쿨타임 -30%', { cd: -0.3 })],
      [O('관통', '관통 돌진', '돌진 경로의 모든 적에게 피해', { line: true }), O('충격', '착지 충격', '도착 지점 120 범위 80% 광역', { splash: { r: 120, mult: 0.8 } })],
      [O('기절', '기절 돌진', '대상을 1.5초 기절', { stun: 1.5 }), O('활력', '전투의 활력', '적중 시 MP 15 회복', { mpGain: 15 })],
    ],
    k_quake: [
      [O('광역', '대지 균열', '범위 +30%', { radius: 0.3 }), O('강화', '대지 강타', '피해 +40%', { mult: 0.4 })],
      [O('여진', '여진', '1초 후 60% 추가 폭발', { echo: { delay: 1000, mult: 0.6 } }), O('균열', '갈라진 대지', '4초간 균열 지대 (틱당 30% + 둔화)', { ground: { mult: 0.3, dur: 4, kind: 'crack' } })],
      [O('기절', '지진', '적중한 적 1초 기절', { stun: 1 }), O('흡혈', '대지의 생명력', '준 피해의 10% 회복', { lifesteal: 0.1 })],
    ],
    // ---------------- elf
    e_triple: [
      [O('다발', '다발 화살', '화살 +2발 (총 5발)', { count: 2 }), O('강화', '강궁', '피해 +40%', { mult: 0.4 })],
      [O('산탄', '산개 사격', '화살이 주변 여러 적에게 흩어짐', { scatter: true }), O('독', '독화살', '적중 시 4초간 독 (틱당 20%)', { dot: { mult: 0.2, dur: 4, kind: 'poison' } })],
      [O('속사', '속사', '쿨타임 -40%', { cd: -0.4 }), O('급소', '급소 사격', '치명타 확률 +25%', { crit: 25 })],
    ],
    e_rain: [
      [O('광역', '넓은 화살비', '범위 +35%', { radius: 0.35 }), O('강화', '날카로운 화살비', '피해 +40%', { mult: 0.4 })],
      [O('폭우', '폭우', '화살비 지속 2배 (6회)', { waves: 3 }), O('빙결', '빙결 화살비', '맞은 적 2초 둔화', { slow: 2 })],
      [O('화염', '화염 화살비', '바닥에 4초간 불타는 지대 (틱당 25%)', { ground: { mult: 0.25, dur: 4, kind: 'fire' } }), O('신속', '신속한 화살비', '쿨타임 -40%', { cd: -0.4 })],
    ],
    e_wind: [
      [O('지속', '긴 바람', '지속시간 +10초', { buffDur: 10 }), O('질풍', '질풍', '공격속도 +20% 추가', { buffSpd: 20 })],
      [O('순풍', '순풍', '이동속도 +15% 추가', { buffMove: 15 }), O('마나', '바람의 숨결', '발동 시 MP 30 회복', { mpGain: 30 })],
      [O('예리', '예리한 바람', '버프 중 치명타 +15%', { buffCrit: 15 }), O('흡혈', '피의 바람', '버프 중 준 피해의 5% 회복', { buffLS: 0.05 })],
    ],
    e_energy: [
      [O('강화', '압축 에너지', '피해 +50%', { mult: 0.5 }), O('신속', '빠른 충전', '쿨타임 -30%', { cd: -0.3 })],
      [O('폭발', '에너지 폭발', '끝에서 폭발하여 120 범위 80% 피해', { burst: { r: 120, mult: 0.8 } }), O('삼중', '삼중 볼트', '볼트 3발을 부채꼴로 발사', { spread: 3 })],
      [O('둔화', '중력 볼트', '맞은 적 2초 둔화', { slow: 2 }), O('급소', '관통 급소', '치명타 확률 +30%', { crit: 30 })],
    ],
    e_frost: [
      [O('강화', '혹한의 화살', '피해 +40%', { mult: 0.4 }), O('동결', '깊은 동결', '둔화 시간 2배', { slowMul: 2 })],
      [O('파편', '얼음 파편', '적중 시 주변 3명에게 파편 (60%)', { shards: { n: 3, mult: 0.6 } }), O('지대', '서리 지대', '4초간 얼음 지대 (틱당 20% + 둔화)', { ground: { mult: 0.2, dur: 4, kind: 'ice' } })],
      [O('빙결', '완전 빙결', '대상을 1초 얼림 (기절)', { stun: 1 }), O('신속', '연속 빙결', '쿨타임 -40%', { cd: -0.4 })],
    ],
    e_storm: [
      [O('다발', '화살 폭풍', '화살 +4발', { count: 4 }), O('강화', '강철 화살', '피해 +40%', { mult: 0.4 })],
      [O('광역', '넓은 폭풍', '범위 +40%', { radius: 0.4 }), O('화염', '불화살 폭풍', '적중 시 3초간 화상 (틱당 15%)', { dot: { mult: 0.15, dur: 3, kind: 'burn' } })],
      [O('신속', '연속 폭풍', '쿨타임 -35%', { cd: -0.35 }), O('급소', '저격 폭풍', '치명타 확률 +25%', { crit: 25 })],
    ],
    // ---------------- mage
    m_fire: [
      [O('거대', '거대 화염구', '피해 +50%', { mult: 0.5 }), O('용암', '용암 지대', '폭발 지점에 4초간 불타는 바닥 (틱당 35%)', { ground: { mult: 0.35, dur: 4, kind: 'fire' } })],
      [O('분열', '분열 화염구', '폭발 시 작은 화염구 3개가 주변 적에게 (각 50%)', { shards: { n: 3, mult: 0.5 } }), O('연사', '쌍둥이 화염구', '화염구 1개 추가 발사', { count: 1 })],
      [O('광역', '대폭발', '폭발 범위 +40%', { radius: 0.4 }), O('신속', '속사 화염구', '쿨타임 -40%', { cd: -0.4 })],
    ],
    m_ice: [
      [O('강화', '날카로운 창', '피해 +40%', { mult: 0.4 }), O('동결', '깊은 냉기', '둔화 시간 2배', { slowMul: 2 })],
      [O('관통', '관통 빙창', '일직선의 모든 적을 관통', { pierce: true }), O('지대', '빙결 지대', '4초간 얼음 지대 (틱당 20% + 둔화)', { ground: { mult: 0.2, dur: 4, kind: 'ice' } })],
      [O('파편', '얼음 폭발', '적중 시 주변 3명에게 파편 (60%)', { shards: { n: 3, mult: 0.6 } }), O('빙결', '절대 영도', '대상을 1.5초 얼림 (기절)', { stun: 1.5 })],
    ],
    m_heal: [
      [O('강화', '대치유', '회복량 +50%', { healMul: 0.5 }), O('신속', '빠른 치유', '쿨타임 -40%', { cd: -0.4 })],
      [O('재생', '재생', '추가로 5초간 최대 HP 30% 지속 회복', { hot: 0.3 }), O('마나', '마나 순환', 'MP도 30% 회복', { mpPct: 0.3 })],
      [O('보호막', '신성한 보호막', '8초간 받는 피해 -25', { shield: 25 }), O('신성', '성스러운 폭발', '주변 180 범위 적에게 200% 피해', { holy: { r: 180, mult: 2 } })],
    ],
    m_meteor: [
      [O('강화', '거대 운석', '피해 +40%', { mult: 0.4 }), O('광역', '넓은 충격', '범위 +35%', { radius: 0.35 })],
      [O('유성우', '유성우', '작은 운석 3개 추가 낙하 (각 120%)', { meteors: 3 }), O('화염', '불타는 대지', '4초간 불타는 바닥 (틱당 40%)', { ground: { mult: 0.4, dur: 4, kind: 'fire' } })],
      [O('신속', '연속 소환', '쿨타임 -35%', { cd: -0.35 }), O('기절', '충격파', '맞은 적 1.5초 기절', { stun: 1.5 })],
    ],
    m_chain: [
      [O('연쇄', '긴 연쇄', '연쇄 +2회', { chain: 2 }), O('강화', '고전압', '피해 +40%', { mult: 0.4 })],
      [O('감전', '감전', '맞은 적 1.5초 둔화', { slow: 1.5 }), O('증폭', '증폭 회로', '연쇄해도 피해가 줄지 않음', { noDecay: true })],
      [O('신속', '과충전', '쿨타임 -40%', { cd: -0.4 }), O('급소', '낙뢰', '치명타 확률 +30%', { crit: 30 })],
    ],
    m_blizzard: [
      [O('광역', '거대 눈보라', '범위 +30%', { radius: 0.3 }), O('지속', '긴 겨울', '지속시간 +2초', { durAdd: 2 })],
      [O('강화', '혹한', '피해 +50%', { mult: 0.5 }), O('빙결', '빙결', '매 틱 10% 확률로 1초 얼림', { freezeChance: 0.1 })],
      [O('신속', '빙하기', '쿨타임 -35%', { cd: -0.35 }), O('폭발', '빙하 붕괴', '종료 시 중심 폭발 (250%)', { endBlast: 2.5 })],
    ],
  };

  // ---------------------------------------------------------------- state
  const tree = (p, id) => (p.s.tree[id] = p.s.tree[id] || [null, null, null]);
  function migrate(p) { p.s.tree = p.s.tree || {}; }
  const unlocked = (p, id) => p.s.lv >= (D.SKILLS[id].unlock || 1);
  function spent(p) {
    let n = 0;
    for (const id in p.s.tree) p.s.tree[id].forEach((c, t) => { if (c) n += TIER_COST[t]; });
    return n;
  }
  const points = (p) => Math.max(0, p.s.lv - 1 + (p.s.spBonus || 0) - spent(p));
  function mods(p, id) {
    const m = {};
    (p.s.tree[id] || []).forEach((c, t) => {
      if (!c) return;
      const mm = TREE[id][t][c === 'a' ? 0 : 1].m;
      for (const k in mm) m[k] = typeof mm[k] === 'number' ? (m[k] || 0) + mm[k] : mm[k];
    });
    return m;
  }
  function eff(p, id) {
    const sk = D.SKILLS[id], m = mods(p, id);
    return Object.assign({}, sk, { cd: +(sk.cd * (1 + (m.cd || 0))).toFixed(2), mp: Math.round(sk.mp * (1 + (m.mp || 0))), m });
  }
  function displayName(p, id) {
    const tags = (p.s.tree[id] || []).map((c, t) => c && TREE[id][t][c === 'a' ? 0 : 1].tag).filter(Boolean);
    return D.SKILLS[id].name + (tags.length ? ` · ${tags.join('·')}` : '');
  }
  function canChoose(p, id, t) {
    if (!unlocked(p, id)) return `Lv.${D.SKILLS[id].unlock}에 스킬이 해금됩니다.`;
    const tr = tree(p, id);
    if (tr[t]) return '이미 선택했습니다.';
    if (t > 0 && !tr[t - 1]) return '이전 단계를 먼저 선택하세요.';
    if (p.s.lv < TIER_LV[t]) return `Lv.${TIER_LV[t]} 이상 필요합니다.`;
    if (points(p) < TIER_COST[t]) return `스킬 포인트가 부족합니다. (${TIER_COST[t]} 필요)`;
    return null;
  }
  function choose(p, id, t, c) {
    const err = canChoose(p, id, t);
    if (err) { UI.toast(err, '#ff8a80'); return false; }
    tree(p, id)[t] = c;
    const o = TREE[id][t][c === 'a' ? 0 : 1];
    U.sfx.success();
    UI.toast(`${D.SKILLS[id].name} → ${o.name}`, '#ffe38a');
    UI.chat(`[스킬] ${D.SKILLS[id].name}: ${o.name} (${o.desc})`, 'sys');
    return true;
  }
  const anyChoice = (p) => p.classDef.skills.some((id) => [0, 1, 2].some((t) => !canChoose(p, id, t)));

  // ---------------------------------------------------------------- runtime: ground effects & DoTs
  const hazards = [], dots = [];
  const KIND = {
    fire: { color: '#ff6a1a', name: '화염' }, bleed: { color: '#ff3050', name: '출혈' }, ice: { color: '#7fd4ff', name: '냉기', slow: 1 },
    crack: { color: '#d8a860', name: '균열', slow: 1 }, blizzard: { color: '#bfe8ff', name: '눈보라', slow: 1 },
    poison: { color: '#7dff5a' }, burn: { color: '#ff8a2a' },
  };
  function ground(x, y, r, mult, dur, kind, extra = {}) { hazards.push(Object.assign({ x, y, r, mult, dur, kind, t: 0, tick: 0.5 }, extra)); }
  function update(game, dt) {
    const p = game.player;
    if (!p) return;
    for (const h of hazards) {
      h.t += dt; h.tick -= dt;
      if (h.tick <= 0 && h.t <= h.dur) {
        h.tick = 0.5;
        for (const m of game.monsters) {
          if (m.dead || Math.hypot(m.x - h.x, (m.y - h.y) * 1.3) > h.r + m.radius) continue;
          hit(game, p, m, h.mult, h.m || {}, { noStun: true });
          if (KIND[h.kind].slow) m.slowT = Math.max(m.slowT, 1);
          if (h.freeze && Math.random() < h.freeze) { m.stunT = Math.max(m.stunT || 0, 1); game.fx.push(Combat.makeFx('ice', m.x, m.y)); }
        }
      }
      if (h.t > h.dur && h.endBlast && !h.blasted) {
        h.blasted = true;
        game.fx.push(Combat.makeFx('explode', h.x, h.y, { r: h.r * 1.2, color: '#bfe8ff' })); game.shake = 8; U.sfx.boom();
        area(game, p, h.x, h.y, h.r, h.endBlast, h.m || {});
      }
    }
    for (let i = hazards.length - 1; i >= 0; i--) if (hazards[i].t > hazards[i].dur + 0.4) hazards.splice(i, 1);
    for (const d of dots) {
      d.t += dt; d.tick -= dt;
      if (d.tick <= 0) { d.tick = 0.5; if (!d.mon.dead) Combat.damageMonster(game, p, d.mon, d.mult); }
    }
    for (let i = dots.length - 1; i >= 0; i--) if (dots[i].t >= dots[i].dur || dots[i].mon.dead) dots.splice(i, 1);
  }
  function drawGround(ctx, cam, t) {
    for (const h of hazards) {
      const x = h.x - cam.x, y = h.y - cam.y;
      const k = Math.min(1, h.t * 4) * Math.min(1, Math.max(0, h.dur + 0.4 - h.t) / 0.4);
      const col = KIND[h.kind].color;
      ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.55);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, h.r);
      g.addColorStop(0, Looks.hexA(col, 0.45 * k)); g.addColorStop(0.75, Looks.hexA(col, 0.25 * k)); g.addColorStop(1, Looks.hexA(col, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, h.r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = Looks.hexA(col, 0.6 * k); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, h.r * 0.98, 0, Math.PI * 2); ctx.stroke();
      if (h.kind === 'blizzard') { ctx.rotate(t * 2); for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(0, 0, h.r * (0.35 + i * 0.22), i, i + 2); ctx.stroke(); } }
      ctx.restore();
      // particles
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const n = h.kind === 'blizzard' ? 26 : 12;
      for (let i = 0; i < n; i++) {
        const a = i * 2.39996, rr = h.r * Math.sqrt(((i * 0.618) % 1));
        const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr * 0.55;
        const ph = (t * (h.kind === 'blizzard' ? 1.6 : 0.9) + i * 0.137) % 1;
        ctx.fillStyle = Looks.hexA(h.kind === 'blizzard' ? '#ffffff' : col, (1 - ph) * k);
        if (h.kind === 'blizzard') ctx.fillRect(px + ph * 30, py - 60 + ph * 60, 2.5, 2.5);
        else ctx.fillRect(px, py - ph * 24, 3, 3);
      }
      ctx.restore();
    }
    // DoT markers
    for (const d of dots) {
      const x = d.mon.x - cam.x, y = d.mon.y - cam.y - 30 * d.mon.scale;
      ctx.fillStyle = Looks.hexA(KIND[d.kind].color, 0.8);
      for (let i = 0; i < 3; i++) ctx.fillRect(x - 8 + i * 8, y - ((t * 30 + i * 9) % 20), 2.5, 2.5);
    }
  }

  // ---------------------------------------------------------------- damage helpers
  function hit(game, p, mon, mult, m, o = {}) {
    if (!mon || mon.dead) return 0;
    const dmg = Combat.damageMonster(game, p, mon, mult * (1 + (m.mult || 0)), { critBonus: m.crit || 0, slow: o.slow });
    const ls = (m.lifesteal || 0) + ((p.buffs.find((b) => b.lifesteal) || {}).lifesteal || 0);
    if (ls && dmg) p.hp = Math.min(p.maxHp, p.hp + dmg * ls);
    if (m.stun && !o.noStun && !mon.dead) { mon.stunT = Math.max(mon.stunT || 0, m.stun); }
    if (m.dot && !mon.dead) dots.push({ mon, mult: m.dot.mult, dur: m.dot.dur, kind: m.dot.kind, t: 0, tick: 0.5 });
    return dmg;
  }
  function area(game, p, x, y, r, mult, m, o = {}) {
    let n = 0;
    for (const mon of game.monsters) {
      if (mon.dead || Math.hypot(mon.x - x, (mon.y - y) * 1.3) > r + mon.radius) continue;
      hit(game, p, mon, mult, m, o); n++;
    }
    return n;
  }
  function nearby(game, from, r, exclude = []) {
    return game.monsters.filter((m) => !m.dead && !exclude.includes(m) && Math.hypot(m.x - from.x, m.y - from.y) < r)
      .sort((a, b) => Math.hypot(a.x - from.x, a.y - from.y) - Math.hypot(b.x - from.x, b.y - from.y));
  }
  function shards(game, p, from, n, mult, m, color) {
    const targets = nearby(game, from, 260, [from]).slice(0, n);
    for (const t of targets) {
      game.fx.push(Combat.makeFx('petbolt', from.x, from.y - 26, { to: t, color, dur: 0.3 }));
      setTimeout(() => hit(game, p, t, mult, Object.assign({}, m, { stun: 0, dot: null })), 300);
    }
  }
  const later = (ms, fn) => setTimeout(fn, ms);

  // ---------------------------------------------------------------- casting
  function cast(p, id, sk, target, game) {
    const m = sk.m, base = D.SKILLS[id];
    const dur = 0.55 / (1 + (p.cls === 'mage' ? p.stats.castSpd : p.stats.atkSpd) / 200);
    if (target) p.face(target);
    p.combatT = 5;
    UI.skillName(displayName(p, id));
    const R = (r) => r * (1 + (m.radius || 0));
    const doIt = IMPL[id];
    p.act(sk.anim, dur, () => doIt(p, sk, m, target, game, R, base));
  }
  const IMPL = {
    // ---- knight
    k_smash(p, sk, m, t, game) {
      game.fx.push(Combat.makeFx('bigslash', t.x, t.y - 26, { color: '#fff3c0' }));
      hit(game, p, t, sk.mult, Object.assign({}, m, { crit: (m.crit || 0) + 10 }));
      if (m.splash) { area(game, p, t.x, t.y, m.splash.r, sk.mult * m.splash.mult, Object.assign({}, m, { stun: 0 })); game.fx.push(Combat.makeFx('whirl', t.x, t.y, { r: m.splash.r })); }
      if (m.stun) game.fx.push(Combat.makeFx('glint', t.x, t.y - 50, { color: '#ffe28a' }));
      game.shake = 4; U.sfx.crit();
    },
    k_whirl(p, sk, m, t, game, R) {
      const r = R(sk.radius), spins = m.spins || 1, mult = spins > 1 ? sk.mult * 0.6 : sk.mult;
      for (let i = 0; i < spins; i++) later(i * 300, () => {
        if (m.pull) for (const mon of nearby(game, p, r + 60)) { mon.x += (p.x - mon.x) * 0.45; mon.y += (p.y - mon.y) * 0.45; }
        game.fx.push(Combat.makeFx('whirl', p.x, p.y, { r })); area(game, p, p.x, p.y, r, mult, m); U.sfx.swing();
      });
      if (m.ground) ground(p.x, p.y, r, m.ground.mult, m.ground.dur, m.ground.kind);
      game.shake = 5;
    },
    k_rage(p, sk, m, t, game) {
      const b = Object.assign({}, sk.buff);
      b.dur += m.buffDur || 0; b.atkPct += m.buffAtk || 0; b.atkSpd += m.buffSpd || 0;
      if (m.buffDR) b.dmgRed = m.buffDR;
      if (m.buffCrit) b.crit = m.buffCrit;
      p.addBuff(b);
      if (m.healPct) { const n = Math.round(p.maxHp * m.healPct); p.hp = Math.min(p.maxHp, p.hp + n); Combat.floatText(game, p, '+' + n, '#6cff7a', true); }
      game.fx.push(Combat.makeFx('buff', p.x, p.y, { follow: p, color: '#ff5a3a' })); U.sfx.magic(); UI.refreshHud();
    },
    k_doom(p, sk, m, t, game) {
      game.fx.push(Combat.makeFx('doom', t.x, t.y - 26, { color: '#ff4a2e' }));
      hit(game, p, t, sk.mult, Object.assign({}, m, { crit: (m.crit || 0) + 30 }));
      if (m.splash) area(game, p, t.x, t.y, m.splash.r, sk.mult * m.splash.mult, Object.assign({}, m, { stun: 0 }));
      if (m.ground) ground(t.x, t.y, 110, m.ground.mult, m.ground.dur, m.ground.kind);
      if (m.echo) later(m.echo.delay, () => { if (!t.dead) { game.fx.push(Combat.makeFx('doom', t.x, t.y - 26, { color: '#ffb02e' })); hit(game, p, t, sk.mult * m.echo.mult, m); } });
      game.shake = 10; U.sfx.crit();
    },
    k_charge(p, sk, m, t, game) {
      const from = { x: p.x, y: p.y };
      const a = Math.atan2(t.y - p.y, t.x - p.x), d = Math.max(0, U.dist(p, t) - 40);
      const dest = World.findFree(p.x + Math.cos(a) * d, p.y + Math.sin(a) * d, 14);
      p.x = dest.x; p.y = dest.y; p.face(t);
      game.fx.push(Combat.makeFx('dash', from.x, from.y, { to: [p.x, p.y], color: '#fff3c0' }));
      if (m.line) for (const mon of game.monsters) {
        if (mon.dead || mon === t) continue;
        const px = mon.x - from.x, py = mon.y - from.y, lx = p.x - from.x, ly = p.y - from.y, L2 = lx * lx + ly * ly || 1;
        const k = U.clamp((px * lx + py * ly) / L2, 0, 1);
        if (Math.hypot(px - lx * k, py - ly * k) < 40 + mon.radius) hit(game, p, mon, sk.mult * 0.7, m);
      }
      game.fx.push(Combat.makeFx('bigslash', t.x, t.y - 26, { color: '#fff3c0' }));
      hit(game, p, t, sk.mult, m);
      if (m.splash) { area(game, p, t.x, t.y, m.splash.r, sk.mult * m.splash.mult, Object.assign({}, m, { stun: 0 })); game.fx.push(Combat.makeFx('whirl', t.x, t.y, { r: m.splash.r })); }
      if (m.mpGain) p.mp = Math.min(p.maxMp, p.mp + m.mpGain);
      game.shake = 6; U.sfx.swing();
    },
    k_quake(p, sk, m, t, game, R) {
      const r = R(sk.radius);
      const blast = (mult) => { game.fx.push(Combat.makeFx('explode', p.x, p.y, { r: r * 1.1, color: '#d8a860' })); area(game, p, p.x, p.y, r, mult, m, { slow: 2 }); game.shake = 12; U.sfx.boom(); };
      blast(sk.mult);
      const cx = p.x, cy = p.y;
      if (m.echo) later(m.echo.delay, () => { game.fx.push(Combat.makeFx('explode', cx, cy, { r: r * 1.2, color: '#ffb46a' })); area(game, p, cx, cy, r, sk.mult * m.echo.mult, Object.assign({}, m, { stun: 0 })); game.shake = 8; U.sfx.boom(); });
      if (m.ground) ground(cx, cy, r, m.ground.mult, m.ground.dur, m.ground.kind);
    },
    // ---- elf
    e_triple(p, sk, m, t, game) {
      const n = sk.count + (m.count || 0);
      const pool = m.scatter ? [t, ...nearby(game, t, 300, [t])] : [t];
      for (let i = 0; i < n; i++) later(i * 80, () => {
        const tgt = pool[i % pool.length];
        if (tgt.dead) return;
        Combat.shoot(p, tgt, { kind: 'arrow', mult: sk.mult, onHit: (x) => hit(game, p, x, sk.mult, m) }); U.sfx.bow();
      });
    },
    e_rain(p, sk, m, t, game, R) {
      const r = R(sk.radius), tx = t.x, ty = t.y, waves = 3 + (m.waves || 0);
      game.fx.push(Combat.makeFx('rain', tx, ty, { r, dur: 0.3 * waves + 0.3 }));
      U.sfx.bow();
      for (let i = 0; i < waves; i++) later(250 + i * 200, () => area(game, p, tx, ty, r, (sk.mult / 3) * 1.2, m, { slow: m.slow }));
      if (m.ground) ground(tx, ty, r, m.ground.mult, m.ground.dur, m.ground.kind);
    },
    e_wind(p, sk, m, t, game) {
      const b = Object.assign({}, sk.buff);
      b.dur += m.buffDur || 0; b.atkSpd += m.buffSpd || 0; b.moveSpd += m.buffMove || 0;
      if (m.buffCrit) b.crit = m.buffCrit;
      if (m.buffLS) b.lifesteal = m.buffLS;
      p.addBuff(b);
      if (m.mpGain) { p.mp = Math.min(p.maxMp, p.mp + m.mpGain); Combat.floatText(game, p, '+' + m.mpGain, '#6cb6ff'); }
      game.fx.push(Combat.makeFx('buff', p.x, p.y, { follow: p, color: '#7dffcf' })); U.sfx.magic(); UI.refreshHud();
    },
    e_energy(p, sk, m, t, game) {
      const n = m.spread || 1;
      for (let i = 0; i < n; i++) {
        const a = Math.atan2(t.y - p.y, t.x - p.x) + (i - (n - 1) / 2) * 0.28;
        const fake = { x: p.x + Math.cos(a) * 300, y: p.y + Math.sin(a) * 300 };
        Combat.shoot(p, fake, { kind: 'arrow', mult: sk.mult * (1 + (m.mult || 0)), pierce: true });
        const pr = game.projectiles[game.projectiles.length - 1];
        pr.critBonus = 20 + (m.crit || 0); pr.slow = m.slow;
        if (m.burst) pr.onEnd = (x, y) => { game.fx.push(Combat.makeFx('explode', x, y, { r: m.burst.r, color: '#9fffd8' })); area(game, p, x, y, m.burst.r, sk.mult * m.burst.mult, m); U.sfx.boom(); };
      }
      U.sfx.magic();
    },
    e_frost(p, sk, m, t, game) {
      const slow = 3 * (m.slowMul || 1);
      Combat.shoot(p, t, { kind: 'arrow', mult: sk.mult, onHit: (x) => {
        hit(game, p, x, sk.mult, m, { slow }); game.fx.push(Combat.makeFx('ice', x.x, x.y));
        if (m.shards) shards(game, p, x, m.shards.n, sk.mult * m.shards.mult, m, '#bfefff');
        if (m.ground) ground(x.x, x.y, 100, m.ground.mult, m.ground.dur, m.ground.kind);
      } });
      U.sfx.bow();
    },
    e_storm(p, sk, m, t, game, R) {
      const r = R(sk.radius), n = sk.count + (m.count || 0);
      const pool = nearby(game, p, r);
      if (!pool.length) return;
      for (let i = 0; i < n; i++) later(i * 60, () => {
        const tgt = pool[i % pool.length];
        if (tgt.dead) return;
        Combat.shoot(p, tgt, { kind: 'arrow', mult: sk.mult, onHit: (x) => hit(game, p, x, sk.mult, m) });
        if (i % 2 === 0) U.sfx.bow();
      });
      game.fx.push(Combat.makeFx('whirl', p.x, p.y, { r: 90 }));
    },
    // ---- mage
    m_fire(p, sk, m, t, game, R) {
      const r = R(sk.radius), n = 1 + (m.count || 0);
      const targets = [t, ...nearby(game, t, 260, [t])];
      for (let i = 0; i < n; i++) later(i * 160, () => {
        const tgt = targets[i % targets.length];
        if (tgt.dead) return;
        Combat.shoot(p, tgt, { kind: 'bolt', mult: sk.mult, opts: { color: '#ff8a2e' }, onHit: (x) => {
          game.fx.push(Combat.makeFx('explode', x.x, x.y, { r, color: '#ff8a2e' }));
          area(game, p, x.x, x.y, r, sk.mult, m); U.sfx.boom(); game.shake = 5;
          if (m.ground) ground(x.x, x.y, r, m.ground.mult, m.ground.dur, m.ground.kind);
          if (m.shards) shards(game, p, x, m.shards.n, sk.mult * m.shards.mult, m, '#ff8a2e');
        } });
        game.projectiles[game.projectiles.length - 1].big = true;
      });
    },
    m_ice(p, sk, m, t, game) {
      const slow = 3 * (m.slowMul || 1);
      if (m.pierce) {
        Combat.shoot(p, t, { kind: 'bolt', mult: sk.mult * (1 + (m.mult || 0)), pierce: true, opts: { color: '#7fd4ff' } });
        const pr = game.projectiles[game.projectiles.length - 1];
        pr.slow = slow; pr.critBonus = m.crit || 0; pr.onPierce = (x) => { if (m.stun) x.stunT = Math.max(x.stunT || 0, m.stun); if (m.shards) shards(game, p, x, m.shards.n, sk.mult * m.shards.mult, m, '#bfefff'); };
      } else {
        Combat.shoot(p, t, { kind: 'bolt', mult: sk.mult, opts: { color: '#7fd4ff' }, onHit: (x) => {
          hit(game, p, x, sk.mult, m, { slow }); game.fx.push(Combat.makeFx('ice', x.x, x.y));
          if (m.shards) shards(game, p, x, m.shards.n, sk.mult * m.shards.mult, m, '#bfefff');
          if (m.ground) ground(x.x, x.y, 100, m.ground.mult, m.ground.dur, m.ground.kind);
        } });
      }
      U.sfx.magic();
    },
    m_heal(p, sk, m, t, game) {
      const n = Math.round(p.maxHp * sk.pct * (1 + (m.healMul || 0)));
      p.hp = Math.min(p.maxHp, p.hp + n);
      Combat.floatText(game, p, '+' + n, '#6cff7a', true);
      game.fx.push(Combat.makeFx('heal', p.x, p.y, { follow: p, color: '#7dff8a' })); U.sfx.potion();
      if (m.hot) for (let i = 1; i <= 5; i++) later(i * 1000, () => { if (!p.dead) { const h = Math.round((p.maxHp * m.hot) / 5); p.hp = Math.min(p.maxHp, p.hp + h); Combat.floatText(game, p, '+' + h, '#9dffab'); } });
      if (m.mpPct) { const mp = Math.round(p.maxMp * m.mpPct); p.mp = Math.min(p.maxMp, p.mp + mp); Combat.floatText(game, p, '+' + mp, '#6cb6ff'); }
      if (m.shield) { p.addBuff({ id: 'shield', name: '신성한 보호막', dmgRed: m.shield, dur: 8 }); UI.refreshHud(); }
      if (m.holy) { game.fx.push(Combat.makeFx('explode', p.x, p.y, { r: m.holy.r, color: '#ffe28a' })); area(game, p, p.x, p.y, m.holy.r, m.holy.mult, {}); U.sfx.boom(); }
    },
    m_meteor(p, sk, m, t, game, R) {
      const r = R(sk.radius), tx = t.x, ty = t.y;
      game.fx.push(Combat.makeFx('meteor', tx, ty, { r, onLand: () => {
        area(game, p, tx, ty, r, sk.mult, m); U.sfx.boom(); game.shake = 14;
        if (m.ground) ground(tx, ty, r, m.ground.mult, m.ground.dur, m.ground.kind);
      } }));
      for (let i = 0; i < (m.meteors || 0); i++) later(250 + i * 220, () => {
        const ox = tx + U.rand(-r, r), oy = ty + U.rand(-r, r) * 0.6;
        game.fx.push(Combat.makeFx('meteor', ox, oy, { r: 90, onLand: () => { area(game, p, ox, oy, 90, 1.2, Object.assign({}, m, { mult: 0 })); U.sfx.boom(); game.shake = 6; } }));
      });
    },
    m_chain(p, sk, m, t, game) {
      const jumps = 3 + (m.chain || 0);
      let cur = t, prev = p, mult = sk.mult;
      const hitList = [];
      for (let i = 0; i <= jumps && cur; i++) {
        const from = prev, to = cur, mm = mult;
        later(i * 110, () => {
          game.fx.push(Combat.makeFx('zap', from.x, from.y - 30, { to: [to.x, to.y - 30], color: '#aee6ff' }));
          hit(game, p, to, mm, m, { slow: m.slow });
        });
        hitList.push(cur);
        prev = cur;
        cur = nearby(game, cur, 240, hitList)[0];
        if (!m.noDecay) mult *= 0.8;
      }
      U.sfx.magic();
    },
    m_blizzard(p, sk, m, t, game, R) {
      const r = R(sk.radius);
      ground(t.x, t.y, r, sk.mult, 4 + (m.durAdd || 0), 'blizzard', { freeze: m.freezeChance || 0, endBlast: m.endBlast || 0, m });
      U.sfx.magic();
    },
  };

  // ---------------------------------------------------------------- panel (K)
  let selId = null;
  UI.OPENERS.skills = () => {
    const { el, body } = UI.makePanel('스킬 트리');
    el.style.width = 'min(980px, 97vw)';
    const p = Game.player;
    if (!selId || !p.classDef.skills.includes(selId)) selId = p.classDef.skills[0];
    const render = () => {
      const pts = points(p);
      const keys = ['1', '2', '3', '4', 'Q', 'E'];
      body.innerHTML = `<div class="sk-top"><div>남은 스킬 포인트 <b class="sk-pts">${pts}</b> <span class="sub">(레벨업마다 +1 · 단계별 비용 1/2/3 · 단계 개방 Lv.${TIER_LV.join('/')})</span></div>
        <button class="dark-btn" data-reset>트리 초기화 (${U.fmt(RESET_COST)} 아데나)</button></div>
        <div class="sk-wrap"><div class="sk-list">${p.classDef.skills.map((id, i) => {
          const sk = D.SKILLS[id], lock = !unlocked(p, id), tr = p.s.tree[id] || [];
          const n = tr.filter(Boolean).length;
          return `<div class="sk-item ${id === selId ? 'on' : ''} ${lock ? 'lock' : ''}" data-sk="${id}"><div class="slot skill">${ico(sk.icon)}<span class="n">${keys[i]}</span></div>
            <div><b>${esc(sk.name)}</b><div class="sub">${lock ? `🔒 Lv.${sk.unlock} 해금` : n ? esc(displayName(p, id).split(' · ')[1] || '') : '기본형'}</div><div class="pips">${[0, 1, 2].map((t) => `<i class="${tr[t] ? 'on' : ''}"></i>`).join('')}</div></div></div>`;
        }).join('')}</div>
        <div class="sk-detail">${detail(selId)}</div></div>`;
    };
    const detail = (id) => {
      const sk = D.SKILLS[id], e = eff(p, id), tr = tree(p, id);
      return `<div class="sk-head">${ico(sk.icon)}<div><h4>${esc(displayName(p, id))}</h4><div class="sub">${esc(sk.desc)}</div>
          <div class="sub">MP ${e.mp} · 쿨타임 ${e.cd}초${sk.unlock ? ` · Lv.${sk.unlock} 해금` : ''}</div></div></div>
        ${[0, 1, 2].map((t) => {
          const lockMsg = canChoose(p, id, t);
          return `<div class="sk-tier"><div class="sk-tier-h">${t + 1}단계 <span class="sub">Lv.${TIER_LV[t]} · ${TIER_COST[t]}포인트</span></div><div class="sk-opts">
            ${['a', 'b'].map((c, ci) => {
              const o = TREE[id][t][ci], picked = tr[t] === c, other = tr[t] && tr[t] !== c;
              return `<div class="sk-opt ${picked ? 'picked' : ''} ${other ? 'gone' : ''}"><div class="sk-opt-h"><b>${esc(o.name)}</b><span class="tag">${c.toUpperCase()}</span></div>
                <div class="sub">${esc(o.desc)}</div>
                ${picked ? '<div class="sk-state">✔ 선택됨</div>' : other ? '<div class="sk-state dim">다른 갈래 선택됨</div>' : `<button class="gold-btn" data-pick="${id}:${t}:${c}" ${lockMsg ? 'disabled' : ''} title="${esc(lockMsg || '')}">배우기</button>`}</div>`;
            }).join('<div class="sk-or">또는</div>')}</div></div>`;
        }).join('')}`;
    };
    body.onclick = (e) => {
      const s = e.target.closest('[data-sk]'); if (s) { selId = s.dataset.sk; U.sfx.ui(); return render(); }
      const pk = e.target.closest('[data-pick]');
      if (pk) { const [id, t, c] = pk.dataset.pick.split(':'); if (choose(p, id, +t, c)) { UI.refreshAll(); render(); } return; }
      if (e.target.closest('[data-reset]')) {
        if (!spent(p)) return UI.toast('초기화할 스킬이 없습니다.');
        if (p.s.gold < RESET_COST) return UI.toast('아데나가 부족합니다.', '#ff8a80');
        if (!confirm('스킬 트리를 초기화하고 포인트를 돌려받을까요?')) return;
        p.s.gold -= RESET_COST; p.s.tree = {}; U.sfx.coin(); UI.toast('스킬 트리를 초기화했습니다.'); UI.refreshAll(); render();
      }
    };
    render();
    return { rerender: render };
  };

  return { TREE, migrate, eff, mods, cast, update, drawGround, points, unlocked, displayName, anyChoice, choose, hazards, dots };
})();
