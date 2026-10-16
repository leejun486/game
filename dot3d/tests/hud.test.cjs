// MMO식 화면 배치 (컴퓨터): 1024×640 · 1280×720 · 1920×1080에서 화면 요소가 정해진 자리에 있고 서로 겹치지 않음
//  미니맵 왼쪽 위 · 메뉴 오른쪽 위 · 내 정보 아래 가운데 · 전투 단추 오른쪽 아래 · 경험치 맨 아래 · 알림 기록 왼쪽 아래
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: 'MMO식 화면 배치 (컴퓨터 세 크기)',
  async run(ctx) {
    const log = [];
    for (const [w, h] of [[1024, 640], [1280, 720], [1920, 1080]]) {
      const g = await openGame(ctx, { viewport: { width: w, height: h } });
      await g.newGame();
      const R = await g.eval(() => {
        const G = window.game;
        if (G.story) G.endStory(); G.cut?.skip();
        G.ui.toast('도감 ★ 도깨비불 — 능력치가 올랐어요', 5);
        for (const t of ['획득! [희귀] 청동 가락지', '엽전 +120']) G.ui.feed(t);
        document.getElementById('boss').classList.add('show'); document.getElementById('boss-name').textContent = '어둑시니';
        const r = (s) => { const b = document.querySelector(s)?.getBoundingClientRect(); return b && { l: b.left, t: b.top, r: b.right, b: b.bottom }; };
        const sels = ['#minimap', '#quest', '#boss', '#bag-btn', '#evo-btn', '#map-btn', '#menu-btn', '#hunt-btn', '#status', '#status .skills', '#feed', '#toast'];
        const out = {};
        for (const s of sels) out[s] = r(s);
        out.exp = r('#status .bar.exp');
        return out;
      });
      await g.page.waitForTimeout(300);
      const sels = Object.keys(R).filter((k) => k !== 'exp');
      for (const s of sels) check(R[s] && R[s].l >= -1 && R[s].r <= w + 1 && R[s].t >= -1 && R[s].b <= h + 1, `${w}×${h}: ${s}가 화면 밖 ${JSON.stringify(R[s])}`);
      const hit = (a, b) => a.l < b.r - 1 && b.l < a.r - 1 && a.t < b.b - 1 && b.t < a.b - 1;
      const bad = [];
      for (let i = 0; i < sels.length; i++) for (let j = i + 1; j < sels.length; j++) {
        if (sels[i] === '#status' && sels[j] === '#status .skills') continue;
        if (hit(R[sels[i]], R[sels[j]])) bad.push(`${sels[i]}↔${sels[j]}`);
      }
      check(!bad.length, `${w}×${h}: 겹침 ${bad.join(', ')}`);
      // 자리: 미니맵 왼쪽 위, 메뉴 오른쪽 위, 내 정보 아래 가운데, 전투 단추 오른쪽 아래, 경험치 맨 아래 전체 폭, 알림 기록 왼쪽 아래
      const cx = (x) => (x.l + x.r) / 2;
      check(R['#minimap'].l < w * 0.1 && R['#minimap'].t < h * 0.1, `${w}×${h}: 미니맵 자리`);
      check(R['#menu-btn'].r > w * 0.95 && R['#menu-btn'].t < h * 0.1, `${w}×${h}: 메뉴 자리`);
      check(Math.abs(cx(R['#status']) - w / 2) < 4 && R['#status'].b > h * 0.9, `${w}×${h}: 내 정보 자리 ${JSON.stringify(R['#status'])}`);
      check(R['#status .skills'].r > w * 0.95 && R['#status .skills'].b > h * 0.9, `${w}×${h}: 전투 단추 자리`);
      check(R.exp.l <= 1 && R.exp.r >= w - 1 && R.exp.b >= h - 1, `${w}×${h}: 경험치 바 자리 ${JSON.stringify(R.exp)}`);
      check(R['#feed'].l < w * 0.05 && R['#feed'].b > h * 0.9, `${w}×${h}: 알림 기록 자리`);
      check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
      log.push(`${w}×${h}`);
      await g.close();
    }
    ctx.log(`${log.join(' · ')}: 12개 요소 자리 맞고 겹침 없음`);
  },
};
