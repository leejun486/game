// 번역 빠짐 찾기: 게임 자료(지역·퀘스트·몬스터·장비·업적·이야기)의 한국어 문장을 모두 모아
// 영어·일본어·중국어 사전으로 번역해 보고, 한글이 남는 것을 보여 줌
//  node tools/i18n/coverage.mjs [en|ja|zh]  (기본 셋 다)
import { build } from 'esbuild';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import fs from 'fs';
import os from 'os';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const entry = `
import { initLang, tr } from './src/i18n.js';
import { MAPS, BOSS_NAME, WIN_LINE } from './src/maps.js';
import { QUESTS, BOUNTIES, KILL_NAME } from './src/quests.js';
import { MONSTERS, ACHIEVEMENTS } from './src/records.js';
import { WEAPONS, OUTFITS, PERKS, ULTS, BOSS_SETS } from './src/items.js';
import { SETS } from './src/gear.js';
import { PROLOGUE, SHARD_LINES, ENDING } from './src/story.js';
export function run(lang, extra = []) {
  globalThis.localStorage = { getItem: (k) => k.startsWith('dot3d-settings') ? JSON.stringify({ lang }) : null, setItem() {}, removeItem() {} };
  initLang();
  const out = new Set();
  const g = { player: { cfg: { title: '검객', name: '이랑' } } };
  const seen = new Set();
  const walk = (v) => {
    if (v == null) return;
    if (typeof v === 'string') { if (/[가-힣]/.test(v)) { const t = tr(v); if (/[가-힣]/.test(t) && t !== '한국어') out.add(v); } return; }
    if (typeof v === 'function') { try { walk(v(g)); } catch {} return; }
    if (typeof v !== 'object' || seen.has(v)) return;
    seen.add(v);
    for (const x of Object.values(v)) walk(x);
  };
  walk(extra);
  walk([MAPS, BOSS_NAME, WIN_LINE, QUESTS, BOUNTIES, KILL_NAME, MONSTERS, ACHIEVEMENTS.map((a) => [a.name, a.desc]), WEAPONS, OUTFITS, PERKS, ULTS, BOSS_SETS, SETS, PROLOGUE, SHARD_LINES, ENDING]);
  return [...out];
}`;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cov-'));
const outfile = path.join(tmp, 'cov.mjs');
await build({ stdin: { contents: entry, resolveDir: root, loader: 'js' }, bundle: true, format: 'esm', platform: 'node', outfile, logLevel: 'error' });
const { run } = await import(pathToFileURL(outfile).href);
// 소스 코드의 한국어 문자열 ('…' 안, 템플릿 없이 통째로 화면에 나가는 것들: 대사·알림·이름)
const SRC = ['main.js', 'entities.js', 'questkinds.js', 'looks.js', 'scenes.js', 'world.js', 'worlds6.js'];
const lits = [];
for (const f of SRC) {
  const t = fs.readFileSync(path.join(root, 'src', f), 'utf8').split('\n').filter((l) => !/^\s*\/\//.test(l)).join('\n');
  for (const m of t.matchAll(/'((?:[^'\\\n]|\\.)*[가-힣](?:[^'\\\n]|\\.)*)'/g)) if (!m[1].includes('${')) lits.push(m[1].replace(/\\'/g, "'"));
}
const langs = process.argv.slice(2).filter((a) => !a.startsWith('-'));
if (!langs.length) langs.push('en', 'ja', 'zh');
let bad = 0;
for (const L of langs) {
  const miss = run(L, process.argv.includes('--src') ? lits : []);
  bad += miss.length;
  console.log(`${L}: ${miss.length}개 빠짐`);
  for (const m of miss) console.log('  ' + m);
}
process.exit(bad ? 1 : 0);
