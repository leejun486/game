// 출석 보상: 하루 한 번(같은 날 두 번은 없음), 7일차에 달빛 구슬, 빠진 날이 있어도 처음으로 돌아가지 않음,
// 출석 카드를 닫으면 자리 비운 동안 수련 카드가 이어서 뜸, 오늘의 목표 창에 7칸, 영어 화면에 한글 없음
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '출석 보상 (누적 7일)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    const hangul = (s) => /[가-힣]/.test(s);
    const r = await g.eval(async () => {
      const G = window.game, out = {}, wait = (ms) => new Promise((res) => setTimeout(res, ms));
      if (G.story) G.endStory(); G.cut?.skip();
      const card = () => document.getElementById('att-card');
      const close = () => card().querySelector('[data-close]')?.click();
      // 첫날: 엽전 300
      const c0 = G.shop.coins;
      G.welcomeBack(0);
      await wait(80);
      out.day1 = { show: card().classList.contains('show'), coins: G.shop.coins - c0, n: G.ext.att.n, text: card().innerText };
      close();
      // 같은 날 다시: 없음
      const n0 = G.ext.att.n;
      G.welcomeBack(0);
      await wait(50);
      out.again = { show: card().classList.contains('show'), n: G.ext.att.n - n0 };
      // 며칠 빠졌다 와도 이어서 (2일차), 7일차에는 달빛 구슬 30
      G.ext.att.day = '2000-1-1';
      G.welcomeBack(0); await wait(50); close();
      out.day2 = G.ext.att.n;
      G.ext.att.n = 6; G.ext.att.day = '2000-1-2';
      const b0 = G.ext.beads || 0;
      G.welcomeBack(0); await wait(50);
      out.day7 = { beads: (G.ext.beads || 0) - b0, n: G.ext.att.n, big: !!card().querySelector('.at-c.big.now') };
      close();
      // 출석 → 닫으면 자리 비운 동안 수련 카드
      G.ext.att.day = '2000-1-3';
      document.getElementById('away').classList.remove('show');
      G.welcomeBack(3 * 3600000); await wait(50);
      out.chainBefore = document.getElementById('away').classList.contains('show');
      close(); await wait(50);
      out.chainAfter = document.getElementById('away').classList.contains('show');
      document.getElementById('away').classList.remove('show');
      // 오늘의 목표 창
      G.togglePause(true); G.pausePane('daily');
      await wait(80);
      out.pane = { cells: document.querySelectorAll('#pz-pane .at-c').length, text: document.querySelector('#pz-pane').innerText };
      G.togglePause(false);
      return out;
    });
    check(r.day1.show && r.day1.coins === 300 && r.day1.n === 1, `첫날 이상 ${JSON.stringify(r.day1)}`);
    check(!hangul(r.day1.text) && /Day 1/.test(r.day1.text), `출석 카드에 한글 ${JSON.stringify(r.day1.text)}`);
    check(!r.again.show && r.again.n === 0, `같은 날 두 번 ${JSON.stringify(r.again)}`);
    check(r.day2 === 2, `빠진 날 뒤 이어짐 이상 ${r.day2}`);
    check(r.day7.beads === 30 && r.day7.n === 7 && r.day7.big, `7일차 이상 ${JSON.stringify(r.day7)}`);
    check(!r.chainBefore && r.chainAfter, `출석 → 수련 카드 이어짐 이상 ${JSON.stringify(r)}`);
    check(r.pane.cells === 7 && !hangul(r.pane.text), `오늘의 목표 창 이상 ${JSON.stringify(r.pane)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`첫날 엽전 +${r.day1.coins} · 같은 날 두 번 없음 · 빠져도 이어짐 · 7일차 구슬 +${r.day7.beads} · 출석 → 수련 카드`);
    await g.close();
  },
};
