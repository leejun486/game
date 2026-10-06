// 밤 싸움: 북을 울려 세 파를 자동 사냥으로 끝까지 치르는지,
// 멀리 떨어져 못 오는 적이 있어도(길이 끊김 등) 싸움이 끝나는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '밤 싸움 (세 파 끝까지 · 멀리 남은 적)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ko' });
    await g.newGame();
    await g.eval(() => {
      const G = window.game, p = G.player;
      for (let k = 0; k < 400 && p.level < 12; k++) p.addExp(200);
      G.quest.step = 1; G.updateGates(true); G.startStep();
      const d = G.world.drums.find((x) => x.region === 'palace');
      G.teleport(d.pos.x + 2, d.pos.z + 2);
      G.drumHit(d, true);
      G.setAutoHunt(true);
    });
    check(await g.eval(() => window.game.waveActive), '북을 울려도 밤 싸움이 시작되지 않음');
    // 첫 파가 나오면 한 마리를 멀리 떼어 놓음
    for (let k = 0; k < 20 && !(await g.eval(() => window.game.enemies.some((e) => !e.dead && !e.spawning && !e.field))); k++) await g.step(0.5);
    const far = await g.eval(() => {
      const G = window.game, p = G.player.pos, e = G.enemies.find((e) => !e.dead && !e.spawning && !e.field);
      let w = null; for (let k = 0; k < 30 && !w; k++) w = G.world.randomWalkable(p.x, p.z, 28, 30 + k); if (!w) return null;
      e.pos.x = w.x; e.pos.z = w.z; e.pos.y = e.y = G.world.heightAt(w.x, w.z); e.__far = true; e.dmg = 0; e.T = { ...e.T, speed: 0 }; // 길이 끊겨 못 오는 상황
      return Math.round(Math.hypot(w.x - p.x, w.z - p.z));
    });
    check(far, '멀리 떼어 놓을 자리를 못 찾음');
    let back = false;
    for (let k = 0; k < 40 && !back; k++) {
      await g.step(0.5);
      back = await g.eval(() => { const G = window.game, e = G.enemies.find((e) => e.__far); return !e || e.dead || Math.hypot(e.pos.x - G.player.pos.x, e.pos.z - G.player.pos.z) < 22; });
    }
    check(back, `${far}칸 떨어진 밤 싸움 적이 20초가 지나도 돌아오지 않음`);
    // 세 파 끝까지 (최대 게임 4분)
    for (let k = 0; k < 48 && (await g.eval(() => window.game.waveActive)); k++) await g.step(5);
    const r = await g.eval(() => ({ active: window.game.waveActive, cleared: !!window.game.cleared.palace, wave: window.game.wave, left: window.game.enemies.filter((e) => !e.dead && !e.field).map((e) => e.type) }));
    check(!r.active && r.cleared, `밤 싸움이 4분 안에 끝나지 않음 ${JSON.stringify(r)}`);
    ctx.log(`멀리(${far}칸) 떨어진 적 복귀, 세 파 완료`);
    // 이긴 직후(퀘스트 완료가 일어나기 전 2초) 쓰러져 다시 해도 퀘스트는 넘어가야 함 — 예전엔 완료가 사라져 같은 밤 싸움을 다시 해야 했음
    const before = await g.eval(() => { const G = window.game; G.quest.step = 1; G.mapId = 'palace'; G.waveActive = true; G.victory(); G.state = 'play'; G.onPlayerDeath(); G.retry(); return G.quest.step; });
    await g.step(3, { input: {} });
    const after = await g.eval(() => window.game.quest.step);
    check(after > before, `이긴 직후 쓰러졌더니 퀘스트가 넘어가지 않음 (${before} → ${after})`);
    ctx.log('이긴 직후 쓰러져도 퀘스트 완료');
    await clean(g);
    await g.close();
  },
};
