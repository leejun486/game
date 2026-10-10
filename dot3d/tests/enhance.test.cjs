// 강화와 도감: 주문서로 +10까지, +10부터는 요괴 혼석이 있어야, 실패하면 떨어지고 축복이면 그대로,
// 몬스터 처치·장신구 등록으로 도감 능력치가 오르는지, 저장했다 불러와도 그대로인지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '강화 · 도감 (주문서 · 요괴 혼석 · 능력치)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    const r = await g.eval(() => {
      const G = window.game, p = G.player, out = {};
      G.inv.add('sw3'); G.progressOf('sword').weapon = 'sw3'; p.recalc();
      out.atk0 = p.atkMul;
      G.mats = { scrollW: 40, scrollG: 3, bless: 1, soul: 0 };
      G.toggleBag(true); G.ui.tab('enh');
      const go = () => document.getElementById('enh-go');
      const rnd = Math.random;
      // 강화 확률 굴림 한 번만 v로 고정 (소리 고르기 같은 다른 Math.random은 그대로)
      const click = (v) => { let once = true; Math.random = () => (once ? ((once = false), v) : rnd()); go().click(); Math.random = rnd; };
      for (let i = 0; i < 12 && go() && !go().disabled; i++) click(0.001);
      out.at10 = G.enh.sw3; out.blocked = !!go()?.disabled;
      out.atk10 = p.atkMul;
      G.mats.soul = 1; G.ui.renderEnh(); click(0.001);
      out.at11 = G.enh.sw3; out.soulLeft = G.mats.soul;
      // 실패: 떨어짐 / 축복이면 그대로
      G.mats.soul = 5; G.ui.renderEnh(); click(0.999); out.failDrop = G.enh.sw3;
      G.ui.enhBless = true; G.ui.renderEnh(); click(0.999); out.failBless = G.enh.sw3; out.blessLeft = G.mats.bless;
      G.toggleBag(false);
      // 장신구 강화 → 옵션 배율
      const gear = G.testGear('gloves', 3); G.pickupGear(gear); G.equipGear(gear.uid);
      const c0 = p.gear.crit || 0; gear.enh = 5; p.recalc(); out.gearUp = (p.gear.crit || 0) > c0;
      // 도감: 몬스터 처치 ★ / 장신구 등록
      const s0 = JSON.stringify(G.codex.stats()), hp0 = p.maxHp;
      const e = G.spawnEnemyAt('blue', p.pos.x + 3, p.pos.z); G.onEnemyKilled(e);
      out.monUp = JSON.stringify(G.codex.stats()) !== s0 && p.maxHp > hp0;
      G.pickupGear(G.testGear('ring', 2));
      const atkBefore = p.atkMul;
      out.reg = G.codex.register('ring2'); out.regAtk = p.atkMul > atkBefore; out.regAgain = G.codex.register('ring2');
      G.save(false);
      return out;
    });
    check(r.at10 === 10 && r.blocked, `+10에서 멈추지 않음 ${JSON.stringify(r)}`);
    check(r.atk10 > r.atk0 * 1.15, `강화로 공격력이 오르지 않음 ${r.atk0} → ${r.atk10}`);
    check(r.at11 === 11 && r.soulLeft === 0, `요괴 혼석으로 +11이 안 됨 ${JSON.stringify(r)}`);
    check(r.failDrop === 10, `실패해도 안 떨어짐 ${r.failDrop}`);
    check(r.failBless === 10 && r.blessLeft === 0, `축복 주문서가 안 지켜 줌 ${JSON.stringify(r)}`);
    check(r.gearUp, '장신구 강화가 옵션을 안 올림');
    check(r.monUp, '몬스터 도감이 능력치를 안 올림');
    check(r.reg && r.regAtk && !r.regAgain, `장신구 등록 이상 ${JSON.stringify(r)}`);
    ctx.log('강화 +11 · 실패 · 축복 · 장신구 강화 · 도감 확인');
    g.page.setDefaultTimeout(30000);
    // 저장 → 다시 불러오기
    await g.page.reload();
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    await g.page.click('#btn-cont');
    await g.page.waitForTimeout(400);
    await g.eval(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); });
    await g.step(0.5);
    const k = await g.eval(() => ({ lv: window.game.enh.sw3, reg: !!window.game.codexReg.ring2, mats: window.game.mats.scrollW }));
    check(k.lv === 10 && k.reg && k.mats > 0, `불러온 뒤 달라짐 ${JSON.stringify(k)}`);
    await clean(g);
    await g.close();
  },
};
