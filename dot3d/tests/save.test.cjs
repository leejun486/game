// 저장 · 불러오기
//  1) 여러 가지를 바꿔 저장 → 새로고침해서 이어하기 → 다시 저장한 기록이 처음과 같은지
//  2) 예전 버전(퀘스트 46단계 시절, qv 3) 기록이 새 단계 번호로 옮겨지는지
//  3) 찾기 퀘스트 도중 저장한 진행이 이어지는지
//  4) 저장이 깨졌을 때 예비 기록으로 이어지는지
const { openGame, check, clean } = require('./harness.cjs');
const KEY = 'dot3d-palace-save-v1';
const VOLATILE = ['savedAt', 'playTime', 'daily', 'night', 'pos'];

module.exports = {
  name: '저장 · 불러오기 (왕복 · 옛 기록 · 찾기 도중 · 깨진 저장)',
  async run(ctx) {
    const g = await openGame(ctx, { lang: 'ko' });
    const cont = async () => { await g.page.reload(); await g.page.waitForFunction(() => window.game && document.getElementById('btn-cont')); await g.page.waitForTimeout(400); await g.page.click('#btn-cont'); await g.page.waitForTimeout(400); await g.eval(() => { const G = window.game; if (G.story) G.endStory(); G.cut?.skip(); }); await g.step(0.3, { input: {} }); };
    const read = () => g.eval((k) => JSON.parse(localStorage.getItem(k)), KEY);

    // 1) 왕복
    await g.newGame();
    await g.eval(() => {
      const G = window.game;
      G.player.addExp(5000); G.kills = 77; G.bestCombo = 21; G.towerBest = 7; G.difficulty = 'hard';
      G.quest.step = 8; G.updateGates(true); G.cleared.palace = 1; G.cleared.bamboo = 1;
      G.stats.ruleFloors = 3; G.stats.awakened = 1;
      G.save(false);
    });
    const a = await read();
    await cont();
    await g.eval(() => window.game.save(false));
    const b = await read();
    const diff = [];
    const cmp = (x, y, p) => {
      if (VOLATILE.includes(p.split('.')[0])) return;
      if (typeof x !== typeof y || (x && y && typeof x === 'object') !== (x && typeof x === 'object')) { diff.push(p); return; }
      if (x && typeof x === 'object') { for (const k of new Set([...Object.keys(x), ...Object.keys(y)])) cmp(x[k], y[k], p ? `${p}.${k}` : k); return; }
      if (x !== y) diff.push(`${p}: ${JSON.stringify(x)} → ${JSON.stringify(y)}`);
    };
    cmp(a, b, '');
    check(!diff.length, `불러와서 다시 저장하니 달라진 값:\n    ${diff.slice(0, 12).join('\n    ')}`);
    check(a.quest.step === 8 && a.towerBest === 7 && a.difficulty === 'hard', '저장한 값이 기록에 없음');
    ctx.log('왕복 같음');

    // 2) 옛 기록 옮기기: [옛 단계, 옮겨진 뒤 퀘스트 이름]
    for (const [old, want] of [[20, '검은 쇳조각'], [12, '늪의 사공'], [2, '남문이 열리다'], [46, null]]) {
      await g.eval(([k, old]) => { const d = JSON.parse(localStorage.getItem(k)); d.quest.step = old; d.quest.qv = 3; d.quest.prog = {}; localStorage.setItem(k, JSON.stringify(d)); window.game.noSave = true; }, [KEY, old]);
      await cont();
      const r = await g.eval(() => [window.game.curQuest()?.title || null, window.game.quest.qv]);
      check(r[0] === want && r[1] >= 4, `옛 기록 ${old}단계 → ${r[0]} (qv ${r[1]}), ${want}이어야 함`);
    }
    ctx.log('옛 기록 옮기기 확인');

    // 3) 찾기 도중
    await g.eval(() => { const G = window.game; G.qk.clear(); G.quest.step = G.quest.step; for (let i = 0; i < 99; i++) { G.quest.step = i; const Q = G.curQuest(); if (Q?.type === 'search') break; } G.quest.prog = {}; G.updateGates(true); G.startStep(); });
    await g.step(1, { input: {} });
    const before = await g.eval(() => { const G = window.game, o = G.qk.objs[0]; G.teleport(o.x + 0.8, o.z); G.nearInteract = G.findInteract(); G.interact(); G.save(false); return { prog: JSON.stringify(G.quest.prog), left: G.qk.objs.length }; });
    await cont();
    const after = await g.eval(() => ({ prog: JSON.stringify(window.game.quest.prog), left: window.game.qk.objs.length }));
    check(before.prog === after.prog && before.left === after.left, `찾기 진행이 이어지지 않음 ${JSON.stringify([before, after])}`);
    ctx.log('찾기 도중 이어하기 확인');

    // 4) 깨진 저장 → 예비 기록
    await g.eval((k) => { const good = localStorage.getItem(k); localStorage.setItem(k + '-backup', good); localStorage.setItem(k, good.slice(0, good.length / 2)); window.game.noSave = true; }, KEY);
    await g.page.reload();
    await g.page.waitForFunction(() => window.game && document.getElementById('btn-cont'));
    const hasCont = await g.eval(() => { const b = document.getElementById('btn-cont'); return !!b && getComputedStyle(b).display !== 'none' && !b.disabled; });
    check(hasCont, '저장이 깨졌을 때 예비 기록으로 이어하기가 안 됨');
    ctx.log('깨진 저장 → 예비 기록 확인');
    g.errors.splice(0, g.errors.length, ...g.errors.filter((e) => !e.includes('예비 기록')));
    await clean(g, { i18n: false });
    await g.close();
  },
};
