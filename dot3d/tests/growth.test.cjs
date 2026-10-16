// 성장 사다리: +15에서 멈춤 → 한계돌파(무기는 혼석·엽전, 장신구는 같은 장비) → +16 강화 → 초월 ★ → ★5 각성
// 능력치가 오르는지, 저장했다 불러와도 그대로인지
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '성장 사다리 (한계돌파 · 초월 · 각성)',
  async run(ctx) {
    const g = await openGame(ctx);
    await g.newGame();
    const r = await g.eval(() => {
      const G = window.game, p = G.player, out = {};
      if (G.story) G.endStory(); G.cut?.skip();
      G.inv.add('sw4'); G.progressOf('sword').weapon = 'sw4'; G.enh.sw4 = 15; p.recalc();
      G.mats = { scrollW: 5, scrollG: 5, soul: 60, dust: 200, bless: 5 };
      G.shop.gain(20000);
      G.toggleBag(true); G.ui.enhPick = { kind: 'weapon', id: 'sw4' }; G.ui.tab('enh');
      const $ = (s) => document.querySelector('#tab-enh ' + s);
      out.enhBlocked = !$('#enh-go');
      out.growBtn = $('#grow-go')?.textContent;
      const atk0 = p.atkMul, c0 = G.shop.coins;
      $('#grow-go').click();
      out.lb = G.ext.grow.sw4?.lb; out.paid = c0 - G.shop.coins; out.soul1 = G.mats.soul;
      out.canEnh = !!$('#enh-go') && !$('#enh-go').disabled;
      const rnd = Math.random; let once = true; Math.random = () => (once ? ((once = false), 0.001) : rnd());
      $('#enh-go').click(); Math.random = rnd;
      out.at16 = G.enh.sw4;
      // 초월 ★1~5 → 각성
      const atk16 = p.atkMul;
      for (let i = 0; i < 5; i++) $('#grow-go').click();
      out.star = G.ext.grow.sw4.star; out.atkStar = p.atkMul / atk16;
      out.awkBtn = $('#grow-go')?.textContent;
      $('#grow-go').click();
      out.awk = G.ext.grow.sw4.awk; out.atkUp = p.atkMul > atk0;
      out.tag = document.querySelector('#tab-enh .enh-name').textContent;
      // 장신구: 같은 종류·등급 장비를 먹고 한계돌파
      const a = G.testGear('ring', 4), b = G.testGear('ring', 4);
      G.pickupGear(a); G.pickupGear(b); G.equipGear(a.uid); a.enh = 15;
      G.ui.enhPick = { kind: 'gear', uid: a.uid }; G.ui.renderEnh();
      const n0 = G.gear.length;
      $('#grow-go').click();
      out.gearLb = a.lb; out.fodderGone = G.gear.length === n0 - 1 && !G.gearByUid(b.uid);
      a.enh = 20; G.ui.renderEnh(); out.noFodder = !!$('#grow-go')?.disabled; // 두 번째 한계돌파: 재료 장비 없음
      a.enh = 19; a.star = 5; G.ui.renderEnh(); const hadPerk = !!a.perk;
      $('#grow-go').click(); out.gearAwk = a.awk && !!a.perk; out.hadPerk = hadPerk;
      G.toggleBag(false);
      G.save(false);
      return out;
    });
    check(r.enhBlocked && r.growBtn === '한계돌파', `+15에서 한계돌파가 안 나옴 ${JSON.stringify(r)}`);
    check(r.lb === 1 && r.paid === 400 && r.soul1 === 58, `무기 한계돌파 비용 이상 ${JSON.stringify(r)}`);
    check(r.canEnh && r.at16 === 16, `한계돌파 뒤 +16 강화가 안 됨 ${JSON.stringify(r)}`);
    check(r.star === 5 && r.atkStar > 1.15, `초월 ★5 이상 ${JSON.stringify(r)}`);
    check(r.awkBtn === '각성하기' && r.awk === 1 && r.atkUp, `각성 이상 ${JSON.stringify(r)}`);
    check(/★5/.test(r.tag) && /각성/.test(r.tag), `이름 표시 이상 ${r.tag}`);
    check(r.gearLb === 1 && r.fodderGone && r.noFodder, `장신구 한계돌파 이상 ${JSON.stringify(r)}`);
    check(r.gearAwk, `장신구 각성 이상 ${JSON.stringify(r)}`);
    // 저장 → 다시 불러오기
    g.page.setDefaultTimeout(30000);
    await g.page.reload({ timeout: 180000, waitUntil: 'domcontentloaded' });
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    await g.page.click('#btn-cont');
    await g.page.waitForTimeout(400);
    await g.eval(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); });
    await g.step(0.5);
    const k = await g.eval(() => ({ w: window.game.ext.grow?.sw4, lv: window.game.enh.sw4, ring: window.game.gear.find((x) => x.lb)?.awk }));
    check(k.w?.lb === 1 && k.w?.star === 5 && k.w?.awk === 1 && k.lv === 16 && k.ring === 1, `불러온 뒤 달라짐 ${JSON.stringify(k)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log('무기 한계돌파 → +16 → ★5 → 각성 · 장신구 한계돌파(재료 장비) · 각성 고유 효과 · 저장 유지');
    await g.close();
  },
};
