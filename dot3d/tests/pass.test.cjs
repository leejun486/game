// 수련 패스: 이번 주 과제를 마치면 점수 → 60점마다 한 칸, 칸 받기(재료·엽전·구슬·꾸밈), 모두 받기,
// 주가 바뀌면 새로 시작(꾸밈은 그대로), 저장 뒤 그대로, 유료 꾸러미 없음
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '수련 패스 (무료 30칸 · 주간 과제)',
  async run(ctx) {
    const g = await openGame(ctx);
    await g.newGame();
    await g.eval(async () => {
      const G = window.game, out = {};
      if (G.story) G.endStory(); G.cut?.skip();
      G.togglePause(true); G.pausePane('pass'); // 이번 주 시작 값을 지금 기록으로
      G.togglePause(false);
      // 적 1000 · 보스 5 · 강화 25 · 장비 20 → 150+200+150+100+100 = 700점 + 처치 100점 = 800점 → 13칸
      G.stats.kills += 1000; G.stats.bosses.dokkaebi = (G.stats.bosses.dokkaebi || 0) + 5;
      G.stats.enhTry = (G.stats.enhTry || 0) + 25; G.stats.gear = (G.stats.gear || 0) + 20;
      return out;
    });
    const r2 = await g.eval(async () => {
      const G = window.game, out = {};
      G.togglePause(true); G.pausePane('pass');
      const P = G.ext.pass;
      out.done = Object.keys(P.done).sort().join();
      const pane = document.getElementById('pz-pane');
      out.tier = +pane.querySelector('.ps-tier b').textContent;
      out.ready = pane.querySelectorAll('.ps-cell.ready').length;
      // 한 칸 받기 (2칸: 엽전 500)
      const c0 = G.shop.coins;
      pane.querySelector('[data-tier="2"]').click();
      out.coins = G.shop.coins - c0;
      // 모두 받기 → 10칸 꾸밈(수련 목도리)
      const b0 = G.ext.beads || 0, d0 = G.mats.dust || 0;
      document.querySelector('#ps-all').click();
      out.got = G.ext.pass.got.length; out.scarf = !!G.ext.cos?.owned?.passScarf;
      out.beads = (G.ext.beads || 0) - b0; out.dust = (G.mats.dust || 0) - d0;
      out.again = !!document.querySelector('#ps-all:not([disabled])');
      G.togglePause(false);
      // 외형 탭: 받은 꾸밈은 열리고, 유료 꾸러미 단추는 없음
      G.toggleBag(true); G.ui.tab('look'); G.ui.lookPacks = true; G.ui.renderLook();
      out.scarfOpen = !document.querySelector('#tab-look [data-lk="back"][data-v="passScarf"]').disabled;
      out.pinLocked = document.querySelector('#tab-look [data-lk="head"][data-v="passPin"]').disabled;
      out.noPacks = !document.querySelector('#tab-look [data-pack]') && !!document.querySelector('#tab-look .lk-free');
      G.toggleBag(false);
      G.save(false);
      out.week = P.week;
      return out;
    });
    const r = r2;
    check(r.done === 'b1,enh,gear,k1,k2', `과제 완료 이상 ${JSON.stringify(r)}`);
    check(r.tier === 13 && r.ready === 13, `칸 수 이상 ${JSON.stringify(r)}`);
    check(r.coins === 500, `칸 보상(엽전) 이상 ${r.coins}`);
    check(r.got === 13 && r.scarf && r.beads >= 20 && r.dust === 10 + 15 && !r.again, `모두 받기 이상 ${JSON.stringify(r)}`);
    check(r.scarfOpen && r.pinLocked && r.noPacks, `외형 탭 이상 ${JSON.stringify(r)}`);
    // 저장 → 불러오기 → 주가 바뀌면 새로 (꾸밈은 그대로)
    g.page.setDefaultTimeout(30000);
    await g.page.reload({ timeout: 180000, waitUntil: 'domcontentloaded' });
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-new'));
    await g.page.click('#btn-cont');
    await g.page.waitForTimeout(400);
    const k = await g.eval(() => {
      const G = window.game; if (G.story) G.endStory(); G.cut?.skip();
      const out = { got: G.ext.pass?.got?.length, week: G.ext.pass?.week };
      G.ext.pass.week -= 1;
      G.togglePause(true); G.pausePane('pass');
      out.reset = G.ext.pass.got.length === 0 && Object.keys(G.ext.pass.done).length === 0 && G.ext.pass.week === out.week;
      out.scarf = !!G.ext.cos?.owned?.passScarf;
      out.hub = (() => { G.togglePause(false); G.hub.toggle(true); const t = document.querySelector('#hub [data-h="pass"] small')?.textContent; G.hub.toggle(false); return t; })();
      return out;
    });
    check(k.got === 13 && k.reset && k.scarf && k.hub === '0/30', `저장·새 주 이상 ${JSON.stringify(k)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log('과제 5개 → 800점 · 13칸 · 한 칸/모두 받기 · 꾸밈 열림 · 유료 꾸러미 없음 · 저장 · 새 주');
    await g.close();
  },
};
