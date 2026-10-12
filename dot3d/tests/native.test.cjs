// 앱(Capacitor) 연결: 가짜 window.Capacitor를 심고 휴대폰 뒤로 가기 단추와 앱 내리기를 흉내 냄
//  선택 화면에서 두 번 눌러 끄기, 게임 중 메뉴 열고 닫기, 가방 닫기, 대화 넘기기, 앱을 내리면 저장하고 멈춤
const { check } = require('./harness.cjs');

module.exports = {
  name: '앱 (뒤로 가기 단추 · 앱 내리기)',
  async run(ctx) {
    const c = await ctx.browser.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true });
    await c.addInitScript(() => {
      window.__cap = {}; window.__exited = 0;
      window.Capacitor = { isNativePlatform: () => true, Plugins: { App: { addListener: (ev, fn) => { (window.__cap[ev] ||= []).push(fn); return { remove() {} }; }, exitApp: () => { window.__exited++; } } } };
      window.__back = () => (window.__cap.backButton || []).forEach((f) => f());
      window.__state = (a) => (window.__cap.appStateChange || []).forEach((f) => f({ isActive: a }));
    });
    const p = await c.newPage(); p.setDefaultTimeout(300000);
    const errors = []; p.on('pageerror', (e) => errors.push(e.message));
    await p.goto(ctx.base + '/index.html');
    await p.evaluate(() => { localStorage.clear(); localStorage.setItem('dot3d-settings-v1', JSON.stringify({ lang: 'ko', quality: 'low', tips: false, autoQ: false })); });
    await p.reload(); await p.waitForFunction(() => window.game && document.getElementById('btn-new'), null, { timeout: 180000 });
    const t = await p.evaluate(async () => {
      const out = { native: document.body.classList.contains('native'), sw: !!navigator.serviceWorker?.controller };
      window.__back(); out.afterOne = window.__exited; out.toast = document.getElementById('toast').textContent;
      window.__back(); out.afterTwo = window.__exited;
      return out;
    });
    check(t.native && t.afterOne === 0 && t.afterTwo === 1 && /한 번 더/.test(t.toast), `선택 화면 뒤로 가기 이상 ${JSON.stringify(t)}`);
    await p.tap('#btn-new'); await p.waitForTimeout(600);
    await p.evaluate(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); G.flags.tut = 1; G.coach.finish(true); G.godMode = true; });
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => {
      const G = window.game, out = {};
      window.__back(); out.hubOpen = G.hub.open;
      window.__back(); out.hubClosed = !G.hub.open;
      G.toggleBag(true); window.__back(); out.bagClosed = !G.ui.bagOpen;
      let done = 0; G.ui.dialog('수문장', ['하나', '둘'], () => { done = 1; });
      for (let i = 0; i < 6 && !done; i++) window.__back(); out.dialogDone = done; out.hubAfterDialog = G.hub.open;
      // 앱을 내리면 저장하고 메뉴를 열어 멈춤
      localStorage.removeItem('dot3d-palace-save-v1');
      window.__state(false); out.saved = !!localStorage.getItem('dot3d-palace-save-v1'); out.pausedOnHide = G.hub.open && G.paused;
      window.__state(true);
      out.exportHidden = (() => { G.hub.toggle(false); G.togglePause(true); G.pausePane('data'); const b = document.getElementById('pz-export'); return getComputedStyle(b).display === 'none'; })();
      G.togglePause(false);
      return out;
    });
    check(r.hubOpen && r.hubClosed && r.bagClosed && r.dialogDone === 1 && !r.hubAfterDialog, `게임 중 뒤로 가기 이상 ${JSON.stringify(r)}`);
    check(r.saved && r.pausedOnHide && r.exportHidden, `앱 내리기·저장 파일 이상 ${JSON.stringify(r)}`);
    check(!errors.length, '페이지 오류: ' + errors.slice(0, 3).join(' / '));
    ctx.log('선택 화면 두 번 눌러 끄기 · 메뉴 열고 닫기 · 가방 닫기 · 대화 넘기기 · 앱 내리면 저장하고 멈춤');
    await c.close();
  },
};
