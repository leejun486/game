// 시간 던전과 무기 세공: 잠김·열림, 들어가면 시간이 줄고 적이 계속 나오는지, 던전마다 그 보상(주문서·장비·세공석)만 나오는지,
// 수호자, 60분을 다 쓰면 밖으로 나오고 다시 못 들어가는지, 세공석 세 가지가 옵션을 새기는지, 세공 옵션이 능력치·보스 피해에 붙는지
const { openGame, check } = require('./harness.cjs');

const killAll = (g) => g.eval(() => { const G = window.game; let n = 0; for (const e of G.enemies) if (!e.dead && !e.field) { e.hp = 1; G.damageEnemy(e, 99999, false, 0, 0); n++; } return n; });

module.exports = {
  name: '시간 던전 · 무기 세공',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ko' });
    await g.newGame();
    const lock = await g.eval(() => {
      const G = window.game;
      G.togglePause(true); G.pausePane('dungeon');
      const cards = document.querySelectorAll('#pz-pane .dg-card').length, btns = document.querySelectorAll('#pz-pane [data-dg]').length;
      G.togglePause(false);
      G.stats.killsBy = { ...(G.stats.killsBy || {}), boss: 1, reaper: 1, bulgasari: 1 };
      G.togglePause(true); G.pausePane('dungeon');
      const open = document.querySelectorAll('#pz-pane [data-dg]').length;
      return { cards, btns, open };
    });
    check(lock.cards === 3 && lock.btns === 0 && lock.open === 3, `잠김·열림 이상 ${JSON.stringify(lock)}`);

    const R = {};
    for (const id of ['scroll', 'gear', 'stone']) {
      const before = await g.eval((id) => {
        const G = window.game;
        G.togglePause(true); G.pausePane('dungeon');
        document.querySelector(`#pz-pane [data-dg="${id}"]`).click();
        return { mats: { ...G.mats }, gear: G.gear.length, drops: G.drops.length, mode: G.tower?.mode, dg: G.tower?.dg, left: 3600 - (G.ext.dg.used[id] || 0) };
      }, id);
      check(before.mode === 'dungeon' && before.dg === id, `${id} 던전에 못 들어감 ${JSON.stringify(before)}`);
      await g.step(4);
      let kills = 0;
      for (let k = 0; k < 14; k++) { kills += await killAll(g); await g.step(1.2); }
      // 수호자를 바로 불러 잡기
      await g.eval(() => { const G = window.game; G.tower.guardAt = G.time; });
      await g.step(3);
      for (let k = 0; k < 4; k++) { kills += await killAll(g); await g.step(1.5); }
      await g.step(1.5); // 떨어진 것 줍기
      const after = await g.eval((id) => {
        const G = window.game, T = G.tower;
        const used = G.ext.dg.used[id];
        const out = { kills: T.kills, loot: { ...T.loot }, used, quest: document.getElementById('quest-title').textContent, theme: G.blendTheme ? true : false };
        G.leaveTower();
        out.out = !G.tower; out.mats = { ...G.mats }; out.gear = G.gear.length;
        return out;
      }, id);
      R[id] = { kills, ...after, before };
      check(after.kills >= 20 && after.used > 20 && /남은 시간/.test(after.quest) && after.out, `${id} 진행 이상 ${JSON.stringify(after)}`);
    }
    // 던전마다 그 보상만
    const L = (id) => R[id].loot;
    check(Object.keys(L('scroll')).some((k) => k.startsWith('scroll')) && !Object.keys(L('scroll')).some((k) => k.startsWith('stone') || k === 'gearN'), `서고 보상 이상 ${JSON.stringify(L('scroll'))}`);
    check((L('gear').gearN || 0) >= 3 && !Object.keys(L('gear')).some((k) => k.startsWith('scroll') || k.startsWith('stone')), `곳간 보상 이상 ${JSON.stringify(L('gear'))}`);
    check((L('stone').stoneR || 0) >= 3 && (L('stone').stoneC || 0) >= 2 && !Object.keys(L('stone')).some((k) => k.startsWith('scroll') || k === 'gearN'), `광맥 보상 이상 ${JSON.stringify(L('stone'))}`);
    ctx.log(`서고 ${JSON.stringify(L('scroll'))} · 곳간 ${JSON.stringify(L('gear'))} · 광맥 ${JSON.stringify(L('stone'))}`);

    // 60분을 다 쓰면 밖으로, 다시 못 들어감
    const lim = await g.eval(() => {
      const G = window.game;
      G.ext.dg.used.scroll = 3599.5;
      G.togglePause(true); G.pausePane('dungeon'); document.querySelector('#pz-pane [data-dg="scroll"]').click();
      return { mode: G.tower?.mode };
    });
    await g.step(5);
    const lim2 = await g.eval(() => {
      const G = window.game, out = { out: !G.tower };
      G.togglePause(true); G.pausePane('dungeon');
      out.btnDisabled = document.querySelector('#pz-pane [data-dg="scroll"]').disabled;
      G.togglePause(false);
      // 날이 바뀌면 다시 60분
      G.ext.dg.day = 'yesterday'; out.reset = 3600 - (G.ext.dg.used.scroll || 0) === 3600 || !G.ext.dg.used.scroll;
      G.togglePause(true); G.pausePane('dungeon'); out.reset = !document.querySelector('#pz-pane [data-dg="scroll"]').disabled; G.togglePause(false);
      return out;
    });
    check(lim.mode === 'dungeon' && lim2.out && lim2.btnDisabled && lim2.reset, `60분 제한 이상 ${JSON.stringify([lim, lim2])}`);

    // 세공: 거친 → 두 줄, 맑은 → 세 줄, 달빛 → 고른 줄만 바뀜, 옵션이 능력치에 붙음
    const ref = await g.eval(() => {
      const G = window.game, p = G.player, id = G.progressOf(p.cls).weapon, out = {};
      G.mats.stoneR = 2; G.mats.stoneC = 1; G.mats.stoneM = 2;
      G.toggleBag(true); G.ui.tab('refine');
      const click = (k) => document.querySelector(`#tab-refine [data-stone="${k}"]`).click();
      out.mDisabled = document.querySelector('#tab-refine [data-stone="stoneM"]').disabled;
      click('stoneR'); out.r = (G.ext.refine[id] || []).length;
      click('stoneC'); const three = JSON.stringify(G.ext.refine[id]); out.c = G.ext.refine[id].length;
      out.unique = new Set(G.ext.refine[id].map((l) => l.k)).size === 3;
      document.querySelector('#tab-refine [data-line="1"]').click();
      click('stoneM');
      const L0 = JSON.parse(three), L1 = G.ext.refine[id];
      out.keep = JSON.stringify(L0[0]) === JSON.stringify(L1[0]) && JSON.stringify(L0[2]) === JSON.stringify(L1[2]);
      out.left = { r: G.mats.stoneR, c: G.mats.stoneC, m: G.mats.stoneM };
      // 옵션이 능력치에: 보스 피해 줄을 넣어 보스에게 더 아픈지
      G.ext.refine[id] = [{ k: 'boss', v: 0.5 }, { k: 'hp', v: 100 }];
      const hp0 = p.maxHp; p.recalc(); out.hpUp = p.maxHp - hp0 >= 0; out.boss = p.gear.boss;
      G.toggleBag(false);
      return out;
    });
    check(ref.mDisabled && ref.r === 2 && ref.c === 3 && ref.unique && ref.keep && ref.left.r === 1 && ref.left.c === 0 && ref.left.m === 1 && ref.boss === 0.5, `세공 이상 ${JSON.stringify(ref)}`);
    // 저장했다 불러오기
    const saved = await g.eval(() => { const G = window.game; G.save(false); return JSON.stringify({ r: G.ext.refine, u: G.ext.dg.used }); });
    await g.page.reload({ timeout: 180000, waitUntil: 'domcontentloaded' });
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    const loaded = await g.eval(() => { const G = window.game; return JSON.stringify({ r: G.ext.refine, u: G.ext.dg.used }); });
    check(saved === loaded, '저장·불러오기 뒤 세공·던전 시간이 다름');
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log('60분 제한·날 바뀌면 초기화 · 세공 두 줄·세 줄·한 줄 다시 · 보스 피해 · 저장');
    await g.close();
  },
};
