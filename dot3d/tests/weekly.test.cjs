// 주간 경연: 보스 셋을 물리친 뒤 도전 창에 이번 주 경연이 보이고, 완주하면 기록·코드·보상·카드,
// 친구 코드 붙여 넣기(맞는 코드는 순위표에, 틀린 코드·내 코드는 거절), 영어 화면에 한글이 남지 않음
const { openGame, check } = require('./harness.cjs');

module.exports = {
  name: '주간 경연 (같은 보스·규칙, 기록 코드로 친구와 겨루기)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'en' });
    await g.newGame();
    const hangul = (s) => /[가-힣]/.test(s);
    const pre = await g.eval(() => {
      const G = window.game, p = G.player;
      if (G.story) G.endStory(); G.cut?.skip();
      G.stats.killsBy = { boss: 1, gumiho: 1, reaper: 1 };
      p.level = 30; G.progressOf(p.cls).level = 30; p.recalc(true);
      G.togglePause(true); G.pausePane('challenge');
      const box = document.querySelector('#pz-pane .wk-box');
      return { box: !!box, text: box?.innerText || '', soul: G.mats.soul || 0 };
    });
    await g.step(0.3);
    const paneText = await g.eval(() => document.querySelector('#pz-pane .wk-box')?.innerText || '');
    check(pre.box && /Weekly Trial/.test(paneText) && /Week \d+/.test(paneText) && !hangul(paneText), `경연 칸 이상 ${JSON.stringify(paneText)}`);
    await g.eval(() => document.querySelector('#pz-pane [data-week]').click());
    await g.step(4);
    const mid = await g.eval(() => { const G = window.game; return { mode: G.tower?.mode, rule: G.tower?.rule?.key, n: G.tower?.list?.length }; });
    check(mid.mode === 'weekly' && mid.rule && mid.n === 3, `경연 시작 이상 ${JSON.stringify(mid)}`);
    for (let k = 0; k < 16; k++) {
      await g.eval(() => { const G = window.game; for (const e of G.enemies) if (!e.dead && !e.field) { e.hp = 1; G.damageEnemy(e, 99999, false, 0, 0); } });
      await g.step(1.5);
    }
    await g.step(2);
    await g.page.waitForTimeout(300);
    const done = await g.eval(() => {
      const G = window.game, el = document.getElementById('wk-card');
      return { best: G.ext.wk?.best || 0, show: el.classList.contains('show'), text: el.innerText, code: el.querySelector('.wk-code b')?.textContent || '', soul: G.mats.soul || 0, paid: G.ext.wk?.paid };
    });
    check(done.best > 0 && done.show && /^[2-9A-Z]{5}-[2-9A-Z]{5}-[2-9A-Z]{4}$/.test(done.code), `완주 기록·카드 이상 ${JSON.stringify(done)}`);
    check(done.soul > pre.soul && done.paid, `첫 완주 보상 이상 ${JSON.stringify(done)}`);
    check(!hangul(done.text), `완주 카드에 한글 ${JSON.stringify(done.text)}`);
    await g.step(4);
    // 친구 코드: 내 코드는 거절, 틀린 코드는 거절, 다른 사람(표식이 다름)으로 바꾼 뒤 예전 코드는 받아 줌
    const fr = await g.eval(async (code) => {
      const G = window.game, out = {};
      document.getElementById('wk-card').classList.remove('show');
      const add = async (v) => {
        G.togglePause(true); G.pausePane('challenge');
        document.querySelector('#pz-pane .wk-in').value = v;
        document.querySelector('#pz-pane [data-wk-add]').click();
        await new Promise((r) => setTimeout(r, 60));
        return document.querySelector('#pz-pane .enh-msg')?.textContent || '';
      };
      out.own = await add(code);
      out.bad = await add('ABCDE-FGHJK-LMNP');
      G.ext.tag = (G.ext.tag % 900000) + 7; // 다른 사람이 된 셈
      out.ok = await add(code);
      out.rows = document.querySelectorAll('#pz-pane .wk-board > div').length;
      out.pane = document.querySelector('#pz-pane .wk-box').innerText;
      G.togglePause(false);
      return out;
    }, done.code);
    check(/own record/.test(fr.own) && /doesn.t look right/.test(fr.bad) && /added/.test(fr.ok), `친구 코드 이상 ${JSON.stringify(fr)}`);
    check(fr.rows === 2 && !hangul(fr.pane), `순위표 이상 ${JSON.stringify(fr)}`);
    check(!g.errors.length, '페이지 오류: ' + g.errors.slice(0, 3).join(' / '));
    ctx.log(`규칙 ${mid.rule} · 완주 ${(done.best / 10).toFixed(1)}초 · 코드 ${done.code} · 친구 코드 넣기 → 순위표 ${fr.rows}줄`);
    await g.close();
  },
};
