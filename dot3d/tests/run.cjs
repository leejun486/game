// 테스트 실행기:  npm test                 → 모두 (여러 개를 동시에: 기본은 CPU 수만큼, 최대 4)
//                 npm test -- quests       → 이름에 quests가 들어간 테스트만
//                 npm test -- --jobs=1     → 하나씩 차례로
//  여러 테스트를 돌릴 때는 테스트마다 따로 node 프로세스를 띄워 나란히 돌리고, 끝나는 대로 결과를 모아 보여 줌
//  tests/*.test.cjs 는 { name, browser?, run(ctx) } 를 내보냄. 실패는 throw.
const fs = require('fs');
const path = require('path');
const { startServer, chromium, Failure } = require('./harness.cjs');

const { spawn } = require('child_process');
const os = require('os');

// 테스트 하나를 따로 프로세스로 돌림 → { ok, out, s }
function runChild(file) {
  return new Promise((ok) => {
    const t0 = Date.now();
    const ch = spawn(process.execPath, [__filename, '--child', file], { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    ch.stdout.on('data', (d) => { out += d; });
    ch.stderr.on('data', (d) => { out += d; });
    ch.on('close', (code) => ok({ ok: code === 0, out, s: ((Date.now() - t0) / 1000).toFixed(0) + 's' }));
  });
}

(async () => {
  const args = process.argv.slice(2);
  const child = args[0] === '--child';
  const jobsArg = args.find((a) => a.startsWith('--jobs='));
  const jobs = jobsArg ? Math.max(1, +jobsArg.slice(7)) : Math.min(4, os.cpus().length);
  const filter = child ? [args[1]] : args.filter((a) => !a.startsWith('--'));
  const files = fs.readdirSync(__dirname).filter((f) => f.endsWith('.test.cjs')).sort();
  const tests = files.map((f) => ({ file: f, ...require(path.join(__dirname, f)) }))
    .filter((t) => !filter.length || filter.some((k) => t.file.includes(k)));
  if (!tests.length) { console.log('실행할 테스트가 없어요'); process.exit(1); }
  if (!fs.existsSync(path.join(__dirname, '..', 'dist', 'game.js'))) { console.log('dist/game.js 가 없어요 — npm run build 먼저'); process.exit(1); }

  if (!child && tests.length > 1 && jobs > 1) {
    console.log(`테스트 ${tests.length}개를 ${jobs}개씩 동시에 돌려요`);
    const queue = [...tests], results = [];
    const T0 = Date.now();
    await Promise.all(Array.from({ length: jobs }, async () => {
      while (queue.length) {
        const t = queue.shift();
        const r = await runChild(t.file);
        results.push({ t, ...r });
        process.stdout.write(r.out.replace(/\n\d+\/\d+ 통과.*\n?$/s, '\n'));
      }
    }));
    const bad = results.filter((r) => !r.ok);
    console.log(`\n${results.length - bad.length}/${results.length} 통과 (${((Date.now() - T0) / 60000).toFixed(1)}분)` + (bad.length ? ` — 실패: ${bad.map((r) => r.t.name).join(', ')}` : ''));
    process.exit(bad.length ? 1 : 0);
  }

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
