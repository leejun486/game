// 꾸미기(수익 모델): 업적마다 달빛 구슬, 안 산 꾸밈은 입어 보기만, 구슬로 사면 입혀지고 저장됨,
// 결제 연결이 없으면 구슬이 생기지 않음, 결제가 되면(가짜 dot3dBilling) 구슬이 들어옴, 가방을 닫으면 입어 보기를 벗음, 영어 화면에 한글이 남지 않음
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '꾸미기 · 달빛 구슬',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    const r = await g.eval(async () => {
      const G = window.game, p = G.player, out = {};
      // 업적 → 구슬 (예전 기록은 한 번에)
      G.ext.beads = 0; G.ext.achPaid = 0;
      G.stats.ach = { a1: 1, a2: 1, a3: 1 };
      G.records.check();
      out.achBeads = G.ext.beads; out.achN = Object.keys(G.stats.ach).length;
      G.records.check();
      out.achAgain = G.ext.beads;
      const L = () => G.progressOf(p.cls).look || {};
      const lk = (k, v) => document.querySelector(`#tab-look [data-lk="${k}"][data-v="${v}"]`);
      const act = (a) => document.querySelector(`#tab-look [data-act="${a}"]`);
      G.toggleBag(true); G.ui.tab('look'); G.ui.renderLook();
      // 입어 보기: 리그에 오라가 붙지만 저장된 외형은 그대로
      lk('aura', 'gold').click();
      out.tryRig = !!p.rig.aura; out.tryLook = L().aura || null;
      out.tryBar = !!document.querySelector('#tab-look .lk-try');
      // 구슬이 모자라면 못 삼
      act('buy').click();
      await new Promise((res) => setTimeout(res, 30)); // 번역은 MutationObserver가 바로 뒤에
      out.failMsg = document.querySelector('#tab-look .enh-msg')?.textContent;
      out.notOwned = !G.ext.cos?.owned?.gold;
      out.packsOpen = !!document.querySelector('#tab-look [data-pack]');
      // 넉넉하면 삼 → 입혀짐
      G.ext.beads = 1000; G.ui.renderLook();
      act('buy').click();
      out.owned = !!G.ext.cos.owned.gold; out.look = L().aura; out.left = G.ext.beads;
      out.rigAura = !!p.rig.aura;
      // 날개: 입어 보다가 가방을 닫으면 벗음
      lk('back', 'wings').click();
      out.tryWings = !!p.rig.wings;
      G.toggleBag(false);
      out.closedWings = !!p.rig.wings; out.closedAura = !!p.rig.aura; out.tryCleared = !G.lookTry;
      // 구슬 염색: 사기 전엔 못 입음 (저장값을 억지로 넣어도 무시)
      G.progressOf(p.cls).look.dye = 'cherry';
      p.buildRig();
      out.dyeBlocked = p.rig.cfg.robe !== '#f4b8c8';
      return out;
    });
    check(r.dyeBlocked, '사지 않은 구슬 염색이 입혀짐');
    check(r.achN >= 3 && r.achBeads === r.achN * 10 && r.achAgain === r.achBeads, `업적 구슬 이상 ${JSON.stringify(r)}`);
    check(r.tryRig && r.tryLook === null && r.tryBar, `입어 보기 이상 ${JSON.stringify(r)}`);
    check(r.failMsg === 'Not enough Moon Beads' && r.notOwned && r.packsOpen, `모자랄 때 이상 ${JSON.stringify(r)}`);
    check(r.owned && r.look === 'gold' && r.left === 700 && r.rigAura, `사기 이상 ${JSON.stringify(r)}`);
    check(r.tryWings && !r.closedWings && r.closedAura && r.tryCleared, `가방 닫으면 벗기 이상 ${JSON.stringify(r)}`);

    // 결제: 연결이 없으면 구슬이 안 생기고, 연결되면 꾸러미만큼
    const pay = await g.eval(async () => {
      const G = window.game, out = {};
      G.toggleBag(true); G.ui.tab('look'); G.ui.lookPacks = true; G.ui.renderLook();
      const b0 = G.ext.beads;
      document.querySelector('#tab-look [data-pack="beads_300"]').click();
      await new Promise((r) => setTimeout(r, 50));
      out.noBilling = G.ext.beads === b0;
      out.noBillingMsg = document.querySelector('#tab-look .enh-msg')?.textContent;
      const asked = [];
      window.dot3dBilling = { buy: async (id) => { asked.push(id); return { ok: true }; } };
      document.querySelector('#tab-look [data-pack="beads_300"]').click();
      await new Promise((r) => setTimeout(r, 50));
      out.paid = G.ext.beads - b0; out.asked = asked;
      window.dot3dBilling = { buy: async () => ({ ok: false }) };
      document.querySelector('#tab-look [data-pack="beads_60"]').click();
      await new Promise((r) => setTimeout(r, 50));
      out.cancel = G.ext.beads - b0;
      delete window.dot3dBilling;
      out.missing = [...(window.__i18nMissing || [])].filter((s) => /[가-힣]/.test(s) && /구슬|꾸밈|입어|결제|꾸러미|샀어요/.test(s));
      out.hangul = /[가-힣]/.test(document.getElementById('tab-look').innerText);
      G.toggleBag(false);
      return out;
    });
    check(pay.noBilling && /store/.test(pay.noBillingMsg || ''), `결제 연결 없음 이상 ${JSON.stringify(pay)}`);
    check(pay.paid === 330 && pay.asked.join() === 'beads_300' && pay.cancel === 330, `결제 이상 ${JSON.stringify(pay)}`);
    check(!pay.missing.length && !pay.hangul, `번역 빠짐 ${JSON.stringify(pay)}`);

    // 사지 않은 구슬 염색은 저장값이 있어도 입혀지지 않음 + 저장·불러오기
    const saved = await g.eval(() => { const G = window.game; G.save(false); return JSON.stringify({ b: G.ext.beads, c: G.ext.cos, l: G.progressOf(G.player.cls).look }); });
    await g.page.reload({ timeout: 180000, waitUntil: 'domcontentloaded' });
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    const loaded = await g.eval(() => { const G = window.game; return JSON.stringify({ b: G.ext.beads, c: G.ext.cos, l: G.progressOf(G.player?.cls || 'sword').look }); });
    check(saved === loaded, `저장·불러오기 이상 ${saved} / ${loaded}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`업적 ${r.achN}개 → 구슬 ${r.achBeads} · 금빛 기운 300에 사기 · 결제 연결 없음/있음/취소 · 저장`);
    await g.close();
  },
};
