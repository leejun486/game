// 타이틀 화면: 네 언어 모두 오류 없이 뜨고, 외부 서버에 아무것도 요청하지 않으며(오프라인),
// 제목 명조체가 실제로 불러와지는지
const { openGame, check, clean } = require('./harness.cjs');

module.exports = {
  name: '타이틀 · 오프라인 · 네 언어',
  async run(ctx) {
    for (const lang of ['ko', 'en', 'ja', 'zh']) {
      const g = await openGame(ctx, { lang });
      await g.page.waitForTimeout(1200);
      const r = await g.eval(() => ({
        lang: document.documentElement.dataset.lang,
        serif: [...document.fonts].filter((f) => f.family.includes('WolhaSerif') && f.status === 'loaded').map((f) => f.family),
        state: window.game.state,
        hasNew: !!document.getElementById('btn-new'),
      }));
      check(r.lang === lang, `${lang}: 화면 언어가 ${r.lang}`);
      check(r.serif.length > 0, `${lang}: 제목 명조체를 못 불러옴`);
      check(r.state === 'title' && r.hasNew, `${lang}: 타이틀 상태가 아님 (${r.state})`);
      check(!g.external.length, `${lang}: 외부 요청 ${g.external.length}개 — ${g.external.slice(0, 3).join(', ')}`);
      await clean(g);
      ctx.log(lang, 'ok', r.serif.join(','));
      await g.close();
    }
  },
};
