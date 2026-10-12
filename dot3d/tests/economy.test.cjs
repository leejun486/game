// 엽전·장터·공방·수호령·보스 도전: 처치·분해로 엽전과 가루가 들어오는지, 사고 나면 한도가 지켜지는지,
// 옵션 다시 굴리기·등급 올리기, 수호령이 능력치를 올리고 함께 싸우는지, 다시 싸우기·연속 도전이 끝까지 가고 보상이 오는지
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '엽전 · 장터 · 공방 · 수호령 · 보스 도전',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ko' });
    await g.newGame();
    const r = await g.eval(() => {
      const G = window.game, p = G.player, out = {};
      // 처치하면 엽전
      const c0 = G.ext.coins || 0;
      const e = G.spawnEnemyAt('blue', p.pos.x + 3, p.pos.z); G.onEnemyKilled(e);
      out.killCoins = (G.ext.coins || 0) - c0;
      // 분해: 엽전·가루, 잠근 것은 그대로
      const a = G.testGear('gloves', 2), b = G.testGear('belt', 1); G.pickupGear(a); G.pickupGear(b);
      b.lock = true;
      const c1 = G.ext.coins, d1 = G.mats.dust || 0;
      G.salvageGear([a.uid, b.uid]);
      out.salvCoins = G.ext.coins - c1; out.salvDust = (G.mats.dust || 0) - d1; out.lockKept = !!G.gearByUid(b.uid);
      // 장터: 엽전 모자람 → 거절, 넉넉하면 삼, 혼석은 하루 하나
      G.ext.coins = 10; out.poor = G.shop.buy('scrollW');
      G.ext.coins = 10000; out.buyW = G.shop.buy('scrollW'); out.scrollW = G.mats.scrollW;
      out.soul1 = G.shop.buy('soul'); out.soul2 = G.shop.buy('soul'); out.soul = G.mats.soul;
      const n0 = G.gear.length; out.box = G.shop.buy('box'); out.boxGot = G.gear.length - n0;
      // 공방: 다시 굴리기 (주 옵션은 그대로)
      const r0 = G.testGear('ring', 3); G.pickupGear(r0);
      const main0 = Object.keys(r0.stats)[0], v0 = r0.stats[main0], k0 = Object.keys(r0.stats).length;
      G.mats.dust = 100;
      out.reroll = G.shop.reroll(r0.uid);
      out.mainKept = Object.keys(r0.stats)[0] === main0 && r0.stats[main0] === v0 && Object.keys(r0.stats).length === k0;
      // 등급 올리기: 고급 각반 셋 → 희귀 각반 하나
      for (let i = 0; i < 3; i++) G.pickupGear(G.testGear('legs', 1));
      const before = G.gear.filter((x) => x.kind === 'legs').length;
      out.up = G.shop.upgrade('legs', 1);
      out.upGot = G.gear.filter((x) => x.kind === 'legs' && x.tier === 2).length;
      out.upUsed = before - G.gear.filter((x) => x.kind === 'legs').length;
      // 장터 창이 그려짐
      G.togglePause(true); G.pausePane('shop');
      out.shopRows = document.querySelectorAll('#pz-pane .shop-row').length;
      document.querySelector('#pz-pane [data-sh="craft"]').click(); out.craftRows = document.querySelectorAll('#pz-pane .craft-it').length;
      document.querySelector('#pz-pane [data-sh="pet"]').click(); out.petRows = document.querySelectorAll('#pz-pane .pet-row').length;
      // 수호령: 사서 데리고 다니면 능력치
      const hp0 = p.maxHp;
      document.querySelector('#pz-pane [data-pet="haetae"]').click();
      out.pet = G.ext.pet; out.petHp = p.maxHp - hp0; out.petMesh = !!G.pet.mesh;
      G.togglePause(false);
      return out;
    });
    check(r.killCoins > 0, `처치해도 엽전이 안 들어옴 ${JSON.stringify(r)}`);
    check(r.salvCoins > 0 && r.salvDust > 0 && r.lockKept, `분해 보상·잠금 이상 ${JSON.stringify(r)}`);
    check(r.poor && !r.buyW && r.scrollW >= 1, `장터 사기 이상 ${JSON.stringify(r)}`);
    check(!r.soul1 && r.soul2 && r.soul === 1, `혼석 하루 한도 이상 ${JSON.stringify(r)}`);
    check(!r.box && r.boxGot === 1, `장신구 꾸러미 이상 ${JSON.stringify(r)}`);
    check(!r.reroll && r.mainKept, `다시 굴리기 이상 ${JSON.stringify(r)}`);
    check(!r.up && r.upGot >= 1 && r.upUsed === 2, `등급 올리기 이상 ${JSON.stringify(r)}`);
    check(r.shopRows >= 6 && r.craftRows >= 1 && r.petRows >= 6, `장터 창 이상 ${JSON.stringify(r)}`);
    check(r.pet === 'haetae' && r.petHp >= 40 && r.petMesh, `수호령 이상 ${JSON.stringify(r)}`);
    ctx.log(`처치 엽전 ${r.killCoins} · 분해 엽전 ${r.salvCoins}/가루 ${r.salvDust} · 혼석 하루 한도 · 공방 · 수호령 확인`);

    // 수호령이 함께 공격
    const hit = await g.eval(() => {
      const G = window.game, p = G.player;
      G.enemies.forEach((x) => x.dispose()); G.enemies = [];
      G.ext.pets = ['haetae']; G.ext.pet = 'haetae';
      const e = G.spawnEnemyAt('red', p.pos.x + 3, p.pos.z); e.aggro = true; e.hp = e.maxHp = 99999; e.T = { ...e.T, speed: 0, dmg: 0 };
      window.__e = e; window.__pd = 0; const o = G.damageEnemy.bind(G); G.damageEnemy = (x, ...a) => { if (x === e) window.__pd++; return o(x, ...a); }; return 0;
    });
    await g.step(8, { input: { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null } });
    const dbg = await g.eval(() => { const G = window.game; return { paused: G.paused, pause: G.pauseOpen, bag: G.ui.bagOpen, pet: G.pet.id, cd: G.pet.cd, near: !!G.nearestEnemy(8, true), spawning: window.__e.spawning, d: Math.hypot(window.__e.pos.x - G.player.pos.x, window.__e.pos.z - G.player.pos.z) }; });
    const hit2 = await g.eval(() => { window.__e.hp = 0; window.__e.dead = true; return window.__pd; });
    check(hit2 > hit, `수호령이 공격하지 않음 (${hit} → ${hit2}) ${JSON.stringify(dbg)}`);

    // 보스 다시 싸우기: 끝나면 혼석·엽전, 돌아옴
    const pre = await g.eval(() => {
      const G = window.game;
      G.enemies.forEach((e) => e.dispose()); G.enemies = [];
      G.stats.killsBy = { ...(G.stats.killsBy || {}), boss: 1, gumiho: 1, reaper: 1 };
      G.ext.chDay = null;
      G.togglePause(true); G.pausePane('challenge');
      const cards = document.querySelectorAll('#pz-pane [data-re]').length;
      document.querySelector('#pz-pane [data-re="boss"]').click();
      return { cards, soul: G.mats.soul || 0, coins: G.ext.coins, mode: G.tower?.mode, paused: G.pauseOpen };
    });
    check(pre.cards === 3 && pre.mode === 'rematch' && !pre.paused, `다시 싸우기 시작 이상 ${JSON.stringify(pre)}`);
    await g.step(4);
    // 나온 적을 모두 쓰러뜨림
    for (let k = 0; k < 6; k++) {
      await g.eval(() => { const G = window.game; for (const e of G.enemies) if (!e.dead && !e.field) { e.hp = 1; G.damageEnemy(e, 99999, false, 0, 0); } });
      await g.step(1.5);
    }
    await g.step(6);
    const post = await g.eval(() => { const G = window.game; return { soul: G.mats.soul || 0, coins: G.ext.coins, tower: !!G.tower, left: 3 - (G.ext.chUsed || 0), rematch: G.stats.rematch }; });
    check(post.soul > pre.soul && post.coins > pre.coins && !post.tower && post.left === 2 && post.rematch === 1, `다시 싸우기 보상·귀환 이상 ${JSON.stringify(pre)} → ${JSON.stringify(post)}`);
    ctx.log(`다시 싸우기: 혼석 +${post.soul - pre.soul} · 엽전 +${post.coins - pre.coins} · 오늘 남은 보상 ${post.left}`);

    // 연속 도전: 셋을 차례로 넘고 기록
    await g.eval(() => { const G = window.game; G.togglePause(true); G.pausePane('challenge'); document.querySelector('#pz-pane [data-rush]').click(); });
    await g.step(4);
    for (let k = 0; k < 16; k++) {
      await g.eval(() => { const G = window.game; for (const e of G.enemies) if (!e.dead && !e.field) { e.hp = 1; G.damageEnemy(e, 99999, false, 0, 0); } });
      await g.step(1.5);
    }
    await g.step(8);
    const rush = await g.eval(() => { const G = window.game; return { best: G.ext.rushBest, tower: !!G.tower, crane: G.ext.rushBest >= 5 }; });
    check(rush.best === 3 && !rush.tower, `연속 도전 이상 ${JSON.stringify(rush)}`);
    ctx.log(`연속 도전 3/3 완주 · 기록 ${rush.best}`);

    // 저장했다 불러와도 그대로
    const saved = await g.eval(() => { const G = window.game; G.save(false); return { coins: G.ext.coins, pet: G.ext.pet, rush: G.ext.rushBest }; });
    await g.page.reload();
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    const loaded = await g.eval(() => { const G = window.game; return { coins: G.ext.coins, pet: G.ext.pet, rush: G.ext.rushBest }; });
    check(JSON.stringify(saved) === JSON.stringify(loaded), `저장·불러오기 이상 ${JSON.stringify(saved)} → ${JSON.stringify(loaded)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    await g.close();
  },
};
