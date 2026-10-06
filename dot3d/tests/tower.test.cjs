// 시련탑: 특수 규칙 층 여섯이 제대로 걸리고, 각성 보스가 나오고, 돌파 보상·기록·업적이 쌓이는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '시련탑 (규칙 층 · 각성 보스)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'zh' });
    await g.newGame();
    await g.eval(() => { const G = window.game; G.player.level = 30; G.enterTower(); });
    await g.step(3, { input: {} });
    const floor = async (n) => {
      await g.eval((n) => { const G = window.game; G.spawnQueue.length = 0; for (const e of G.enemies) e.dispose?.(); G.enemies = []; G.tower.cleared = true; G.startTowerFloor(n); }, n);
      await g.step(n % 5 ? 8 : 5, { input: {} });
      const info = await g.eval(() => { const G = window.game; G.updateDarkness(); // 어둠은 그리기 루프에서 갱신되므로 직접 한 번
        const es = G.enemies.filter((e) => !e.dead); return { rule: G.tower.rule?.key || null, n: es.length, elite: es.filter((e) => e.elite).length, dark: document.getElementById('darkness').className, boss: es.filter((e) => e.isBoss).map((e) => ({ name: e.name, awakened: !!e.awakened })) }; });
      for (let k = 0; k < 25 && !(await g.eval(() => window.game.tower.cleared)); k++) {
        await g.eval(() => { const G = window.game; for (const e of G.enemies) if (!e.dead && !e.spawning) G.damageEnemy(e, 9e6, false, 0, 0); });
        await g.step(2, { input: {} });
      }
      check(await g.eval(() => window.game.tower.cleared), `${n}층을 돌파하지 못함`);
      return info;
    };
    const want = { 7: 'swift', 8: 'elite', 11: 'dark', 13: 'fire', 14: 'swarm', 16: 'glass' };
    for (const [n, rule] of Object.entries(want)) {
      const r = await floor(+n);
      check(r.rule === rule, `${n}층 규칙이 ${r.rule} (${rule}이어야 함)`);
      if (rule === 'elite') check(r.n > 0 && r.elite === r.n, `정예의 층인데 정예가 아닌 적이 있음 ${r.elite}/${r.n}`);
      if (rule === 'dark') check(r.dark === 'on', '어둠의 층인데 화면이 어둡지 않음');
      ctx.log(`${n}층 ${rule} 확인`);
    }
    const plain = await floor(9);
    check(!plain.rule, `9층(3의 배수)에 규칙이 붙음 ${plain.rule}`);
    const boss = await floor(20);
    check(boss.boss.length === 1 && boss.boss[0].awakened, `20층 보스가 각성하지 않음 ${JSON.stringify(boss.boss)}`);
    const early = await floor(10);
    check(early.boss.length === 1 && !early.boss[0].awakened, '10층 보스가 각성함 (20층부터여야 함)');
    const st = await g.eval(() => ({ rf: window.game.stats.ruleFloors, aw: window.game.stats.awakened, ach: !!window.game.stats.ach.awake, best: window.game.towerBest }));
    check(st.rf === 6 && st.aw === 1 && st.ach && st.best === 20, `기록이 맞지 않음 ${JSON.stringify(st)}`);
    await clean(g);
    await g.close();
  },
};
