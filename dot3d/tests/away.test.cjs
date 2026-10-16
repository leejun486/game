// 자리 비운 동안 수련 (방치 보상): 3시간 비우고 이어하기 → 카드와 보상, 20시간이면 8시간으로 막힘,
// 5분이면 아무것도 없음, 앱을 내렸다 올려도(새로 고침 없이) 받음, 영어 화면에 한글이 남지 않음
const { openGame, check } = require('./harness.cjs');

const KEY = 'dot3d-palace-save-v1';

module.exports = {
  name: '자리 비운 동안 수련 (방치 보상)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    // 지금 상태를 저장하고, 저장 시각을 과거로 돌린 뒤 다시 불러와 이어하기
    const away = async (hours) => {
      await g.eval(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); G.quest.prologue = true; G.save(false); });
      await g.page.reload({ timeout: 180000, waitUntil: 'domcontentloaded' });
      await g.page.waitForFunction(() => window.game && document.getElementById('btn-cont'));
      // 새로 고칠 때 자동 저장이 저장 시각을 지금으로 덮으므로, 불러온 뒤 '마지막 저장 시각'을 과거로
      const okFrom = await g.page.evaluate(([k, h]) => { const G = window.game, ok = Math.abs(G.awayFrom - JSON.parse(localStorage.getItem(k)).savedAt) < 1000; G.awayFrom = Date.now() - h * 3600000; return ok; }, [KEY, hours]);
      const before = await g.eval(() => { const G = window.game; return { lv: G.player.level, exp: G.player.exp, coins: G.shop.coins, gear: G.gear.length }; });
      await g.eval(() => document.getElementById('btn-cont').click());
      await g.page.waitForTimeout(4500);
      const after = await g.eval(() => {
        const G = window.game, el = document.getElementById('away');
        return { show: el.classList.contains('show'), text: el.innerText, lv: G.player.level, exp: G.player.exp, coins: G.shop.coins, gear: G.gear.length };
      });
      return { before, after, okFrom };
    };
    const a = await away(3);
    check(a.okFrom, '불러온 저장 시각을 기억하지 않음');
    check(a.after.show, `3시간: 카드가 안 뜸 ${JSON.stringify(a)}`);
    check(a.after.coins > a.before.coins && (a.after.lv > a.before.lv || a.after.exp > a.before.exp), `3시간: 보상 없음 ${JSON.stringify(a)}`);
    check(!/[가-힣]/.test(a.after.text) && /3\s*h/.test(a.after.text), `3시간: 영어 카드 이상 ${JSON.stringify(a.after.text)}`);
    const b = await away(20);
    check(b.after.show && /8\s*h/.test(b.after.text) && /limit/.test(b.after.text), `20시간: 8시간으로 막히지 않음 ${JSON.stringify(b.after.text)}`);
    const c = await away(5 / 60);
    check(!c.after.show && c.after.coins === c.before.coins, `5분: 보상이 나옴 ${JSON.stringify(c)}`);
    // 앱을 내렸다 올림 (새로 고침 없이): 숨긴 시각을 2시간 전으로
    const d = await g.eval(() => {
      const G = window.game, c0 = G.shop.coins;
      document.getElementById('away').classList.remove('show');
      G.hiddenAt = Date.now() - 2 * 3600000;
      document.dispatchEvent(new Event('visibilitychange'));
      return { show: document.getElementById('away').classList.contains('show'), got: G.shop.coins - c0 };
    });
    check(d.show && d.got > 0, `앱 다시 열기: 보상 없음 ${JSON.stringify(d)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`3시간 → 엽전 +${a.after.coins - a.before.coins}, Lv.${a.before.lv}→${a.after.lv} · 20시간 → 8시간으로 막힘 · 5분 → 없음 · 앱 다시 열기 → 엽전 +${d.got}`);
    await g.close();
  },
};
