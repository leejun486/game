// 다섯째 직업 무희(부채): 선택 화면 5번, 기본 무기, 바람 칼날·회오리 부채질, 기술 셋(갈래·각성까지), 적을 밀고 끌어모으는지, 꽃바람 회복
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '무희 (부채 · 바람 제어)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    const t = await g.eval(() => { const G = window.game; G.onKey('Digit5'); return { cls: G.selectedCls, card: !!document.querySelector('.cls[data-cls="fan"]') }; });
    check(t.cls === 'fan' && t.card, `선택 화면 5번 이상 ${JSON.stringify(t)}`);
    await g.newGame();
    const r = await g.eval(() => {
      const G = window.game, p = G.player, out = {};
      if (G.story) G.endStory(); G.cut?.skip();
      out.cls = p.cls; out.weapon = G.progressOf('fan').weapon; out.title = document.querySelector('#status')?.innerText.includes('Dancer');
      // 바람 칼날: 앞 6칸의 적까지 닿음
      p.yaw = 0;
      const far = G.spawnEnemyAt('blue', p.pos.x, p.pos.z + 6);
      far.hp = far.maxHp = 9999;
      out.far0 = far.hp;
      return out;
    });
    await g.step(1.2); // 나타나는 중인 적은 맞지 않음
    await g.eval(() => { const p = window.game.player; p.yaw = 0; window.game.onKey('atk'); });
    await g.step(0.6);
    const r2 = await g.eval(() => {
      const G = window.game, p = G.player, out = {};
      const far = G.enemies.find((e) => e.maxHp === 9999);
      out.farHit = far.hp < 9999;
      // 기술: Lv.40, 갈래 b/a/b Ⅴ단계
      p.level = 40; G.progressOf('fan').level = 40;
      const pr = G.progressOf('fan'); pr.evo = { 1: 'b', 2: 'a', 3: 'a' }; pr.rank = { 1: 5, 2: 5, 3: 5 };
      p.recalc(true);
      for (const e of G.enemies) e.dead = true;
      G.enemies.length = 0;
      out.ring = [];
      for (let i = 0; i < 5; i++) { const e = G.spawnEnemyAt('blue', p.pos.x + 4 + (i % 2), p.pos.z + i - 2); e.hp = e.maxHp = 5000; out.ring.push(e); }
      out.d0 = out.ring.map((e) => Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z));
      return { farHit: out.farHit, d0: out.d0 };
    });
    await g.step(1.2);
    Object.assign(r2, await g.eval(() => {
      const G = window.game, p = G.player;
      G.target = null; p.yaw = Math.PI / 2; p.hp = Math.round(p.maxHp * 0.5);
      G.onKey('skill');
      return { hp0: p.hp };
    }));
    await g.step(1.2);
    const r3 = await g.eval(() => {
      const G = window.game, p = G.player;
      const L = G.enemies.filter((e) => !e.dead);
      const pushed = L.map((e) => Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z));
      const hurt = L.filter((e) => e.hp < 5000).length;
      p.cd2 = 0; G.onKey('skill2');
      return { pushed, hurt };
    });
    await g.step(3.2);
    const r4 = await g.eval(() => {
      const G = window.game, p = G.player;
      const L = G.enemies.filter((e) => !e.dead);
      p.cd3 = 0; G.onKey('skill3');
      return { left: L.length, minHp: Math.min(...L.map((e) => e.hp)), cluster: L.length > 1 ? Math.max(...L.map((a) => Math.max(...L.map((b) => Math.hypot(a.pos.x - b.pos.x, a.pos.z - b.pos.z))))) : 0 };
    });
    await g.step(5); // 꽃보라 Ⅴ단계는 4.5초
    const r5 = await g.eval(() => ({ hp: window.game.player.hp, fx: window.game.lancerFx.length }));
    check(r.cls === 'fan' && r.weapon === 'fn0', `무희 시작 이상 ${JSON.stringify(r)}`);
    check(r2.farHit, '바람 칼날이 6칸 앞 적에 안 닿음');
    check(r3.hurt >= 3 && Math.max(...r3.pushed) > Math.max(...r2.d0) + 1.5, `광풍이 밀어내지 않음 ${JSON.stringify({ r2, r3 })}`);
    check(r4.minHp < 5000, `회오리 피해 없음 ${JSON.stringify(r4)}`);
    check(r5.hp > r2.hp0, `꽃바람 회복 없음 ${r2.hp0} → ${r5.hp}`);
    check(r5.fx === 0, `이펙트가 남음 ${r5.fx}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`5번 선택 · 바람 칼날 6칸 · 광풍 밀어내기 ${Math.max(...r2.d0).toFixed(1)}→${Math.max(...r3.pushed).toFixed(1)} · 쌍회오리 · 꽃보라 회복 ${r2.hp0}→${r5.hp}`);
    await g.close();
  },
};
