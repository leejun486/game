// 자동 완주: 새 게임부터 엔딩(메인 퀘스트 → 시련탑 10층 염라대왕)까지 봇이 실제로 싸우며 진행
//  단계마다 걸린 게임 시간·레벨·쓰러짐을 재고, 오래 막히는 단계를 찾음.
//  node tools/playthrough.cjs [직업…] [--max=분] [--diff=normal] [--out=파일.json]
//    직업: sword mage elf lancer (생략하면 넷 모두)
//  봇이 하는 일 (사람이 할 법한 것만):
//   - 자동 이동·자동 사냥으로 진행, 쓰러지면 다시 하기
//   - 수련점은 기술 1·2·3에 고르게, 각인은 첫 번째 것, 30초마다 장비 자동 착용
//   - 찾기·순서 퀘스트는 정답 위치를 알고 걸어감 (사람은 소리·점을 보고 찾음 — 시간은 짧게 잡힘)
//   - 추격은 도둑을 쫓아 때림, 호위는 NPC 곁에 붙음, 버티기는 원 안에 머묾
//  화면은 그리지 않고 게임 시간만 돌림 (그리기 루프를 멈춤)
const path = require('path');
const fs = require('fs');
const { startServer, chromium, openGame } = require('../tests/harness.cjs');

const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : d; };
const CLASSES = args.filter((a) => !a.startsWith('--'));
const MAX_MIN = +opt('max', 240); // 직업마다 게임 시간 상한 (분)
const DIFF = opt('diff', 'normal');
const OUT = opt('out', null);
const STUCK_MIN = +opt('stuck', 12);
const FROM = +opt('from', 0), FROM_LV = +opt('lv', 0); // 이 단계부터 (레벨도 맞춰서) — 막힌 곳만 다시 볼 때 // 한 단계에 이만큼(게임 분) 넘게 머물면 막힘으로 기록하고 건너뜀

// 페이지 안에서 도는 봇
function installBot({ diff }) {
  const g = window.game;
  window.requestAnimationFrame = () => 0; // 그리기 루프 멈춤 (아래 tick이 대신 돌림)
  g.difficulty = diff;
  const B = (window.__bot = { t: 0, deaths: 0, log: [], stuck: [], step: g.quest.step, stepT: 0, decideT: 0, equipT: 0, phase: 'main', floorWait: 0, firstDeathAt: {} });
  // 측정: 단계마다 가장 낮았던 체력(%), 레벨업으로 찬 체력, 보스를 잡는 데 걸린 시간
  B.minHp = 1; B.lvHeal = 0; B.bossT = {}; B.bosses = [];
  const olu = g.onLevelUp.bind(g);
  g.onLevelUp = (pl, n) => { B.lvHeal += Math.max(0, pl.maxHp - B.hpBefore) / pl.maxHp; olu(pl, n); };
  const ose = g.spawnEnemy.bind(g);
  g.spawnEnemy = (type, o) => { ose(type, o); const e = g.enemies[g.enemies.length - 1]; if (e?.isBoss) e.__born = B.t; };
  const oek = g.onEnemyKilled.bind(g);
  g.onEnemyKilled = (e) => { if (e.isBoss && e.__born != null) B.bosses.push({ type: e.type, sec: Math.round(B.t - e.__born), awakened: !!e.awakened, step: g.quest.step, tower: g.tower?.active ? g.tower.floor : 0, minHp: Math.round(B.bossMin * 100) }); oek(e); };
  const od = g.onPlayerDeath.bind(g);
  g.onPlayerDeath = () => { B.deaths++; B.firstDeathAt[g.quest.step] = (B.firstDeathAt[g.quest.step] || 0) + 1; od(); };
  const near = (x, z) => Math.hypot(g.player.pos.x - x, g.player.pos.z - z);
  const walkTo = (x, z, obj = true) => {
    if (g.autoMove && Math.hypot(g.autoMove.pos.x - x, g.autoMove.pos.z - z) < 0.5) return;
    const pos = g.player.pos.clone(); pos.set(x, 0, z);
    g.autoMove = { pos, obj, stuck: 0, last: g.player.pos.clone() };
    g.world.updateFlow(x, z, 0, 2, 4000);
  };
  const useHere = () => { g.nearInteract = g.findInteract(); if (g.nearInteract) g.interact(); };
  const spend = () => {
    const pr = g.progressOf(g.player.cls);
    for (let k = 0; k < 6; k++) for (const s of [1, 2, 3]) { if (!pr.evo?.[s]) g.chooseEvo(s, 'a'); g.trainEvo(s); }
    for (const s of [1, 2, 3]) for (let r = 2; r <= 5; r++) if ((pr.rank?.[s] || 0) >= r && !pr.rune?.[s]?.[r]) { const RO = window.__RUNES?.[r]; g.chooseRune(s, r, RO ? RO[0] : ['fire', 'echo', 'swift', 'frenzy'][r - 2]); }
  };
  // 무엇을 할지 (0.5초마다)
  B.decide = () => {
    if (g.state !== 'play' || g.cut || g.story || g.killCam || g.cine) return;
    if (!g.autoHunt) g.setAutoHunt(true);
    const Q = g.curQuest();
    const P = g.quest.prog || {};
    // 메인 퀘스트를 마치면 시련탑 1층부터 10층(염라대왕)까지
    if (!Q) {
      if (g.quest.ended) { B.phase = 'done'; return; }
      B.phase = 'tower';
      if (!g.tower?.active) {
        const portal = g.world.portals.find((x) => x.kind === 'enter');
        const it = g.findInteract(); // 사람처럼: 문 앞까지 가서 E
        if (it?.kind === 'portal' && it.portal === portal) { g.stopAutoMove(); g.nearInteract = it; g.interact(); } else walkTo(portal.x, portal.z, true);
        return;
      }
      if (g.tower.cleared && !g.enemies.some((e) => !e.dead)) {
        B.floorWait += 0.5;
        if (B.floorWait > 3) { B.floorWait = 0; g.startTowerFloor(g.tower.floor + 1); } // 돌파 뒤 보상을 줍고 다음 층
      }
      return;
    }
    if (g.waveActive) return; // 밤 싸움은 자동 사냥에 맡김
    switch (Q.type) {
      case 'chase': {
        const e = g.qk.thief;
        if (e && !e.dead) { g.target = e; if (near(e.pos.x, e.pos.z) > 6) walkTo(e.pos.x, e.pos.z, true); else if (g.autoMove) g.stopAutoMove(); return; }
        break;
      }
      case 'search': {
        const o = g.qk.objs?.[0];
        if (o) { if (near(o.x, o.z) < 2.1) { g.stopAutoMove(); useHere(); } else walkTo(o.x, o.z); return; } // 줍는 거리 2.2
        break;
      }
      case 'order': {
        const o = g.qk.objs?.find((o) => P.dots?.[o.i] === P.next);
        if (o) { if (near(o.x, o.z) < 2.1) { g.stopAutoMove(); useHere(); } else walkTo(o.x, o.z); return; }
        break;
      }
      case 'escort': {
        const n = g.qk.escort?.npc;
        if (n) { if (near(n.pos.x, n.pos.z) > 2.5) walkTo(n.pos.x, n.pos.z, true); return; }
        break;
      }
      case 'hold': {
        const c = P.c;
        if (c) { if (near(c[0], c[1]) > (P.r || 4) * 0.6) walkTo(c[0], c[1], true); return; }
        break;
      }
    }
    // 그 밖: 덤벼드는 적이 없으면 퀘스트 목표로
    if (!g.autoMove && !g.nearestEnemy(7, true)) { try { g.startAutoMove(); } catch { /* 무시 */ } }
  };
  B.tick = (dt) => {
    if (g.ui.inDialog) g.ui.advance();
    if (g.story) g.endStory();
    if (g.state === 'dead') g.retry();
    if (g.ui.bagOpen) g.toggleBag(false);
    if (g.ui.skillsOpen) g.toggleSkills(false);
    if (g.mapOpen) g.minimap.toggle(false);
    if (g.paused) g.togglePause?.(false);
    let wdt = dt;
    if (g.hitstop > 0) { g.hitstop -= dt; wdt = dt * 0.05; }
    if (g.killCam) { g.updateKillCam(dt); if (g.killCam && g.killCam.t < 1.2) wdt *= 0.25; }
    g.time += wdt;
    g.night = g.nightTarget;
    let inp = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null };
    if (g.state === 'play') inp = g.autoControl(inp, wdt);
    if (g.cine) { inp = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null }; g.updateCine(dt); }
    if (g.cut) inp = g.cut.update(wdt);
    if (g.slowmoT > 0) g.slowmoT -= dt;
    if (g.state !== 'title') g.simulate(wdt, inp);
    for (const n of g.npcs) n.update(wdt);
    g.world.update(wdt, g.time);
    g.fx.update(wdt);
    g.records.update(dt); g.dailyGoals.update(dt);
    g.playTime = (g.playTime || 0) + dt;
    B.t += dt; B.stepT += dt;
    const hf = g.player.hp / g.player.maxHp;
    if (g.state === 'play') { B.minHp = Math.min(B.minHp, hf); if (g.enemies.some((e) => e.isBoss && !e.dead)) B.bossMin = Math.min(B.bossMin ?? 1, hf); else B.bossMin = 1; }
    B.hpBefore = g.player.hp;
    B.decideT -= dt; if (B.decideT <= 0) { B.decideT = 0.5; B.decide(); }
    B.equipT -= dt; if (B.equipT <= 0) { B.equipT = 30; try { spend(); g.autoEquip(); } catch { /* 무시 */ } }
    const key = B.phase === 'tower' ? 'T' + (g.tower?.best || 0) : g.quest.step;
    if (key !== B.step) {
      const Q0 = typeof B.step === 'number' ? window.__QUESTS[B.step] : null;
      B.log.push({ step: B.step, title: Q0 ? Q0.title : `시련탑 ${String(B.step).slice(1)}층`, type: Q0?.type || 'tower', sec: Math.round(B.stepT), at: Math.round(B.t), lv: g.player.level, deaths: B.deaths, minHp: Math.round(B.minHp * 100), lvHeal: Math.round(B.lvHeal * 100) });
      B.minHp = 1; B.lvHeal = 0;
      B.step = key; B.stepT = 0;
    }
  };
  B.skipStuck = () => {
    const Q = g.curQuest();
    B.stuck.push({ step: g.quest.step, title: Q?.title, type: Q?.type, prog: JSON.stringify(g.quest.prog).slice(0, 160), pos: [+g.player.pos.x.toFixed(1), +g.player.pos.z.toFixed(1)], region: g.world.regionAt(g.player.pos.x, g.player.pos.z).id, wave: g.waveActive, waveN: g.wave, hunt: g.autoHunt, auto: !!g.autoMove, target: g.target?.type || null,
      enemies: g.enemies.filter((e) => !e.dead).slice(0, 6).map((e) => ({ type: e.type, hp: Math.round(e.hp), max: e.maxHp, state: e.state, d: +near(e.pos.x, e.pos.z).toFixed(1), y: +(e.y - g.player.y).toFixed(1), field: !!e.field, skip: e.huntSkipT > g.time })) });
    g.stopAutoMove(); g.qk.clear();
    if (g.waveActive) { for (const e of g.enemies) e.dispose(); g.enemies = []; g.spawnQueue.length = 0; g.waveActive = false; g.stage = 3; g.nightTarget = 0; g.ui.setBoss(null); }
    g.quest.step++; g.quest.prog = {}; g.updateGates(true); g.startStep();
  };
}

async function runClass(ctx, cls) {
  const g = await openGame(ctx, { lang: 'ko', viewport: { width: 480, height: 270 } });
  await g.eval((cls) => window.game.selectClass(cls), cls);
  await g.newGame({ god: false });
  await g.eval(() => {
    // 퀘스트 목록 (단계 이름 기록용)
    const G = window.game, Q = [], s0 = G.quest.step;
    for (let i = 0; i < 99; i++) { G.quest.step = i; const q = G.curQuest(); if (!q) break; Q.push({ title: q.title, type: q.type, region: q.region }); }
    G.quest.step = s0; window.__QUESTS = Q;
  });
  if (FROM) await g.eval(([from, lv]) => {
    const G = window.game, p = G.player;
    if (lv) { for (let k = 0; k < 4000 && p.level < lv; k++) p.addExp(200); }
    G.quest.step = from; G.quest.prog = {}; G.updateGates(true);
    for (let i = 0; i < from; i++) { const q = window.__QUESTS[i]; if (q.type === 'wave') G.cleared[q.region] = 1; }
    const Q = G.curQuest(), reg = Q.region && G.world.regions.find((r) => r.id === Q.region);
    if (reg) { G.teleport(reg.spawn[0], reg.spawn[2]); G.updateRegion(true); }
    G.startStep();
  }, [FROM, FROM_LV]);
  await g.eval(installBot, { diff: DIFF });
  const t0 = Date.now();
  let last = -1;
  for (;;) {
    const s = await g.eval((STUCK) => {
      const B = window.__bot, G = window.game;
      for (let i = 0; i < 30 * 30; i++) { B.tick(1 / 30); if (B.phase === 'done') break; }
      if (B.phase === 'main' && B.stepT > STUCK * 60) B.skipStuck();
      // 시련탑에 5분 넘게 못 들어가면 상태 기록 (한 번만)
      if (B.phase === 'tower' && !G.tower?.active && B.stepT > 300 && !B.gateLogged) {
        B.gateLogged = true; const P = G.world.portals.find((x) => x.kind === 'enter');
        B.stuck.push({ gate: true, pos: [+G.player.pos.x.toFixed(1), +G.player.pos.z.toFixed(1)], portal: [P.x, P.z], unlocked: G.towerUnlocked(), auto: G.autoMove ? [+G.autoMove.pos.x.toFixed(1), +G.autoMove.pos.z.toFixed(1)] : null, wave: G.waveActive, state: G.state, region: G.world.regionAt(G.player.pos.x, G.player.pos.z).id });
      }
      // 시련탑: 한 층에 5분 넘게 머물면 남은 적을 기록하고 치움
      if (B.phase === 'tower' && G.tower?.active && !G.tower.cleared && B.stepT > 300) {
        B.stuck.push({ tower: G.tower.floor, pos: [+G.player.pos.x.toFixed(1), +G.player.pos.z.toFixed(1)], queue: G.spawnQueue.length, enemies: G.enemies.filter((e) => !e.dead).map((e) => ({ type: e.type, hp: Math.round(e.hp), state: e.state, spawning: !!e.spawning, d: +Math.hypot(e.pos.x - G.player.pos.x, e.pos.z - G.player.pos.z).toFixed(1), y: +(e.y - G.player.y).toFixed(1), field: !!e.field })) });
        for (const e of G.enemies) e.dispose(); G.enemies = []; G.spawnQueue.length = 0; B.stepT = 0;
      }
      return { t: B.t, step: G.quest.step, phase: B.phase, lv: G.player.level, deaths: B.deaths, floor: G.tower?.floor || 0 };
    }, STUCK_MIN);
    if (s.step !== last) { last = s.step; process.stdout.write(`  [${cls}] ${(s.t / 60).toFixed(1)}분 · ${s.phase === 'tower' ? `시련탑 ${s.floor}층` : `${s.step}단계`} · Lv.${s.lv} · 쓰러짐 ${s.deaths} (실제 ${((Date.now() - t0) / 60000).toFixed(1)}분)\n`); }
    if (s.phase === 'done' || s.t > MAX_MIN * 60) break;
  }
  const r = await g.eval(() => { const B = window.__bot, G = window.game; return { log: B.log, bosses: B.bosses, stuck: B.stuck, minutes: +(B.t / 60).toFixed(1), level: G.player.level, deaths: B.deaths, deathsByStep: B.firstDeathAt, kills: G.kills, ended: !!G.quest.ended, towerBest: G.towerBest || 0, step: G.quest.step }; });
  r.cls = cls; r.errors = g.errors.slice(0, 10);
  await g.close();
  return r;
}

(async () => {
  const srv = await startServer();
  const ctx = { base: `http://127.0.0.1:${srv.address().port}` };
  ctx.browser = await chromium().launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const list = CLASSES.length ? CLASSES : ['sword', 'mage', 'elf', 'lancer'];
  const all = [];
  for (const cls of list) {
    console.log(`▶ ${cls} (난이도 ${DIFF}, 최대 ${MAX_MIN}분)`);
    const r = await runClass(ctx, cls);
    all.push(r);
    console.log(`  → ${r.ended ? '엔딩까지 완주' : `미완주 (${r.step}단계)`} · ${r.minutes}분 · Lv.${r.level} · 쓰러짐 ${r.deaths} · 막힘 ${r.stuck.length} · 오류 ${r.errors.length}`);
    for (const s of r.stuck) console.log('    막힘:', JSON.stringify(s));
    for (const e of r.errors) console.log('    오류:', e);
  }
  await ctx.browser.close();
  srv.close();
  if (OUT) { fs.writeFileSync(OUT, JSON.stringify(all, null, 1)); console.log('저장:', path.resolve(OUT)); }
})();
