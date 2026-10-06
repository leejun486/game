// 들판 몬스터: 다른 지역에서 따라오다 경계에 걸린 몬스터가 자리를 차지해서
// 이 지역 몬스터가 안 나오는(처치 퀘스트가 막히는) 일이 없는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '들판 몬스터 (경계에 걸린 다른 지역 몬스터)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ko' });
    await g.newGame();
    const placed = await g.eval(() => {
      const G = window.game;
      G.cleared = { palace: 1, bamboo: 1, temple: 1, swamp: 1, canyon: 1, fortress: 1, sea: 1 };
      for (let i = 0; i < 99; i++) { G.quest.step = i; if (G.curQuest()?.title === '골짜기 소동') break; }
      G.quest.prog = {}; G.updateGates(true); G.startStep();
      const R = G.world.regions.find((r) => r.id === 'valley');
      G.teleport(R.spawn[0], R.spawn[2]); G.updateRegion(true);
      for (const e of G.enemies) e.dispose(); G.enemies = [];
      // 용궁 게 여섯: 30칸쯤 떨어져 못 움직임 (경계에 걸린 상황)
      const p = G.player.pos; let n = 0;
      for (let k = 0; k < 60 && n < 6; k++) {
        const w = G.world.randomWalkable(p.x, p.z, 26, 32); if (!w) continue;
        const e = G.spawnEnemyAt('crab', w.x, w.z); e.field = true; e.aggro = true; e.homeRegion = 'sea'; e.spawning = false; e.T = { ...e.T, speed: 0 }; e.dmg = 0; n++;
      }
      return n;
    });
    check(placed === 6, `게를 ${placed}마리만 놓음`);
    // 몬스터는 1.2초마다 무작위 자리에 나오므로 최대 12초까지 기다림
    for (let k = 0; k < 6; k++) { await g.step(2, { input: {} }); if (await g.eval(() => window.game.enemies.some((e) => e.field && !e.dead && e.homeRegion === 'valley'))) break; }
    const r = await g.eval(() => { const G = window.game; const f = G.enemies.filter((e) => e.field && !e.dead); return { crabs: f.filter((e) => e.type === 'crab').length, local: f.filter((e) => e.homeRegion === 'valley').map((e) => e.type) }; });
    check(r.crabs === 0, `경계에 걸린 다른 지역 몬스터 ${r.crabs}마리가 남아 있음`);
    check(r.local.length > 0, '이 지역 몬스터가 나오지 않음');
    ctx.log('다른 지역 몬스터 정리, 이 지역 몬스터:', r.local.join(','));
    // 이 지역 몬스터가 덤불에 끼어 못 오면(쫓아오는 중, 12칸 밖) 10초쯤 뒤 치워짐
    const ids = await g.eval(() => {
      const G = window.game, p = G.player.pos, out = [];
      for (const e of G.enemies) e.dispose(); G.enemies = [];
      for (let k = 0; k < 60 && out.length < 3; k++) {
        const w = G.world.randomWalkable(p.x, p.z, 15, 20); if (!w) continue;
        const e = G.spawnEnemyAt('boar', w.x, w.z); e.field = true; e.aggro = true; e.homeRegion = 'valley'; e.spawning = false; e.T = { ...e.T, speed: 0 }; e.dmg = 0; e.__wedged = true; out.push(1);
      }
      return out.length;
    });
    check(ids === 3, '끼인 몬스터를 놓지 못함');
    await g.step(14, { input: {} });
    const left = await g.eval(() => window.game.enemies.filter((e) => e.__wedged && !e.dead).length);
    check(left === 0, `덤불에 끼인 몬스터 ${left}마리가 14초 뒤에도 남아 있음`);
    ctx.log('끼인 몬스터 정리');
    await clean(g);
    await g.close();
  },
};
