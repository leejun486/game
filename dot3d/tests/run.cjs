// 테스트 실행기:  npm test            → 모두
//                 npm test -- quests  → 이름에 quests가 들어간 테스트만
//  tests/*.test.cjs 는 { name, browser?, run(ctx) } 를 내보냄. 실패는 throw.
const fs = require('fs');
const path = require('path');
const { startServer, chromium, Failure } = require('./harness.cjs');

(async () => {
  const filter = process.argv.slice(2);
  const files = fs.readdirSync(__dirname).filter((f) => f.endsWith('.test.cjs')).sort();
  const tests = files.map((f) => ({ file: f, ...require(path.join(__dirname, f)) }))
    .filter((t) => !filter.length || filter.some((k) => t.file.includes(k)));
  if (!tests.length) { console.log('실행할 테스트가 없어요'); process.exit(1); }
  if (!fs.existsSync(path.join(__dirname, '..', 'dist', 'game.js'))) { console.log('dist/game.js 가 없어요 — npm run build 먼저'); process.exit(1); }

  const srv = await startServer();
  const ctx = { base: `http://127.0.0.1:${srv.address().port}`, log: (...a) => console.log('   ', ...a) };
  if (tests.some((t) => t.browser !== false)) {
    ctx.browser = await chromium().launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  }
  const results = [];
  for (const t of tests) {
    const t0 = Date.now();
    process.stdout.write(`▶ ${t.name}\n`);
    let err = null;
    try { await t.run(ctx); } catch (e) { err = e; }
    const s = ((Date.now() - t0) / 1000).toFixed(0) + 's';
    results.push({ t, err, s });
    if (err) console.log(`  ✗ 실패 (${s}): ${err instanceof Failure ? err.message : err.stack}`);
    else console.log(`  ✓ 통과 (${s})`);
  }
  await ctx.browser?.close();
  srv.close();
  const bad = results.filter((r) => r.err);
  console.log(`\n${results.length - bad.length}/${results.length} 통과` + (bad.length ? ` — 실패: ${bad.map((r) => r.t.name).join(', ')}` : ''));
  process.exit(bad.length ? 1 : 0);
})();
