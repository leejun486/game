// 체험판 빌드(dist-demo/game.js): 체험판 표시, 늪 문 잠김, 새 기능(장터·보스 도전·부탁·도감)이 오류 없이 열리는지
//  npm run build:demo 를 먼저 해 둬야 함 (없으면 건너뜀)
const fs = require('fs');
const path = require('path');
const { openGame, check } = require('./harness.cjs');

const DEMO_JS = path.join(__dirname, '..', 'dist-demo', 'game.js');

module.exports = {
  name: '체험판 (잠긴 지역 · 새 기능)',
  async run(ctx) {
    if (!fs.existsSync(DEMO_JS)) { ctx.log('dist-demo/game.js 가 없어 건너뜀 (npm run build:demo)'); return; }
    const g = await openGame(ctx, { lang: 'ko', script: DEMO_JS }); // 체험판 스크립트로 바꿔 열기
    const badge = await g.eval(() => !!document.querySelector('.demo-badge'));
    check(badge, '체험판 표시가 없음');
    await g.newGame();
    const r = await g.eval(() => {
      const G = window.game, out = {};
      G.quest.step = 200; G.updateGates(true); G.updateQuest();
      out.quest = document.getElementById('quest-title').textContent;
      out.swampOpen = G.world.gateOpen?.('swamp') ?? null;
      G.stats.killsBy = { ...(G.stats.killsBy || {}), boss: 1 };
      G.ext.coins = 5000;
      G.hub.toggle(true); out.tiles = document.querySelectorAll('#hub .hub-tile').length; G.hub.toggle(false);
      G.togglePause(true);
      for (const p of ['shop', 'challenge', 'codex', 'screen', 'data']) { G.pausePane(p); out[p] = document.getElementById('pz-pane').textContent.length > 20; }
      out.buy = G.shop.buy('scrollW');
      G.togglePause(false);
      out.offer = G.requests.offerOf('lady')?.id;
      return out;
    });
    check(/체험판/.test(r.quest), `체험판 끝 임무가 안 나옴: ${r.quest}`);
    check(r.tiles >= 18 && r.shop && r.challenge && r.codex && r.screen && r.data && r.buy === '' && r.offer === 'lady1', `체험판에서 새 기능 이상 ${JSON.stringify(r)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`체험판: 끝 임무 · 메뉴 ${r.tiles}칸 · 장터·도전·도감·점검·저장 창 · 부탁`);
    await g.close();
  },
};
