// 언어: 한국어(원문) / 영어 / 일본어 / 중국어(간체)
// 게임 코드는 한국어 그대로 두고, 화면에 나가는 글자를 여기서 번역함.
//  - tr(글): 사전 → 패턴(숫자·이름이 끼어든 문장) → 나눠서 번역 → 띄어쓰기 단위 조합 순으로 찾음
//  - watchDom(): 화면(DOM)에 글자가 생기거나 바뀌면 자동으로 번역
import { loadSettings } from './settings.js';
import EN_DATA from './lang/en_data.js';
import EN_ITEMS from './lang/en_items.js';
import { dict as EN_UI, pats as EN_PATS } from './lang/en_ui.js';
import JA_DATA from './lang/ja_data.js';
import JA_ITEMS from './lang/ja_items.js';
import JA_UI from './lang/ja_ui.js';
import JA_PATS from './lang/ja_pats.js';
import ZH_DATA from './lang/zh_data.js';
import ZH_ITEMS from './lang/zh_items.js';
import ZH_UI from './lang/zh_ui.js';
import ZH_PATS from './lang/zh_pats.js';

// 고를 수 있는 언어 (이름은 그 언어로)
export const LANGS = [['ko', '한국어'], ['en', 'English'], ['ja', '日本語'], ['zh', '简体中文']];
const PACKS = {
  en: [[EN_DATA, EN_ITEMS, EN_UI], EN_PATS],
  ja: [[JA_DATA, JA_ITEMS, JA_UI], JA_PATS],
  zh: [[ZH_DATA, ZH_ITEMS, ZH_UI], ZH_PATS],
};

const HANGUL = /[가-힣]/;
const norm = (s) => s.replace(/\s+/g, ' ').trim();
const strip = (s) => s.replace(/<[^>]+>/g, '');

export let LANG = 'ko';
let dict = null;
let pats = [];
const memo = new Map();
let quiet = false; // 통째로 번역해 보는 중엔 못 찾아도 기록하지 않음

export function initLang() {
  const s = loadSettings();
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'ko';
  const n = nav.toLowerCase();
  LANG = LANGS.some(([k]) => k === s.lang) ? s.lang : n.startsWith('ko') ? 'ko' : n.startsWith('ja') ? 'ja' : n.startsWith('zh') ? 'zh' : 'en';
  if (LANG !== 'ko') build();
  if (typeof document !== 'undefined') { document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : LANG; document.documentElement.dataset.lang = LANG; }
  return LANG;
}

function build() {
  dict = new Map();
  const add = (k, v) => { if (!dict.has(k)) dict.set(k, v); };
  const [dicts, P] = PACKS[LANG];
  for (const D of dicts) {
    for (const [k0, v] of Object.entries(D)) {
      const k = norm(k0);
      dict.set(k, v);
      // 태그를 뺀 모양 (퀘스트 설명을 글자로만 보여 줄 때)
      if (k.includes('<')) add(norm(strip(k)), strip(v));
      // "이름: 대사"는 대사만으로도 (대화창은 이름을 따로 보여 줌)
      const m = k.match(/^([^:<]{1,8}):\s*([\s\S]+)$/), n = v.match(/^([^::]{1,24})[::]\s*([\s\S]+)$/);
      if (m && n) add(m[2], n[2]);
    }
  }
  pats = P;
}

export function tr(s) {
  if (LANG === 'ko' || s == null) return s;
  s = String(s);
  if (!HANGUL.test(s)) return s;
  const hit = memo.get(s);
  if (hit !== undefined) return hit;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const out = m[1] + phrase(norm(m[2])) + m[3];
  if (memo.size > 4000) memo.clear();
  memo.set(s, out);
  return out;
}

const done = (s) => !HANGUL.test(s);

function phrase(s) {
  if (!HANGUL.test(s)) return s;
  const d = dict.get(s);
  if (d !== undefined) return d;
  for (const [re, rep] of pats) {
    const m = s.match(re);
    if (!m) continue;
    const g = m.slice(1).map((x) => x ?? '');
    return typeof rep === 'function' ? rep(tr, ...g) : rep.replace(/\$(\d)/g, (_, i) => tr(g[+i - 1] ?? ''));
  }
  // 앞뒤의 구분 기호(· — ,)와 문장 부호는 떼고 다시
  const pm = s.match(/^([·•—\-|,:\s]+)?([\s\S]*?)([·•—\-|,:!?.…~\s]+)?$/);
  if (pm && (pm[1] || pm[3]) && pm[2] && pm[2] !== s) {
    const inner = phrase(pm[2]);
    if (done(inner)) return (pm[1] || '') + inner + (pm[3] || '');
  }
  // 태그 하나로 감싼 말 (<em>…</em> 등)
  const tg = s.match(/^(<([a-z]+)\b[^>]*>)([^<]*)(<\/\2>)$/i);
  if (tg) return tg[1] + tr(tg[3]) + tg[4];
  // 괄호·대괄호로 감싼 말
  let w = s.match(/^\((.+)\)$/);
  if (w) return '(' + tr(w[1]) + ')';
  w = s.match(/^\[(.+)\]$/);
  if (w) return '[' + tr(w[1]) + ']';
  // 줄바꿈·구분 기호로 나눠서
  for (const sep of ['<br>', ' · ', ' — ', ' / ', ', ', ' → ']) {
    if (!s.includes(sep)) continue;
    const parts = s.split(sep).map((p) => (p.trim() ? tr(p) : p));
    return parts.join(sep);
  }
  // 띄어쓰기 단위로 사전에 있는 말들의 조합인지 (예: "푸른 은 가락지" → "Verdant Silver Ring")
  const seg = segment(s);
  if (seg) return seg;
  if (!quiet && typeof window !== 'undefined') (window.__i18nMissing ||= new Set()).add(s);
  return s;
}

function segment(s) {
  const w = s.split(' ');
  if (w.length < 2 || w.length > 9) return null;
  const n = w.length;
  const best = Array(n + 1).fill(null);
  best[0] = [];
  for (let i = 0; i < n; i++) {
    if (!best[i]) continue;
    for (let j = n; j > i; j--) {
      const k = w.slice(i, j).join(' ');
      const v = dict.get(k) ?? (HANGUL.test(k) ? undefined : k);
      if (v === undefined) continue;
      if (!best[j] || best[j].length > best[i].length + 1) best[j] = [...best[i], v];
    }
  }
  return best[n] ? best[n].join(LANG === 'ja' || LANG === 'zh' ? '' : ' ') : null;
}

// ---------- 화면 자동 번역 ----------
const SKIP = new Set(['SCRIPT', 'STYLE', 'CANVAS', 'TEXTAREA', 'INPUT', 'SELECT']);
const INLINE = new Set(['B', 'SMALL', 'EM', 'I', 'BR', 'STRONG', 'SPAN', 'U']);
const NO_TOUCH = new Set(['dialog-text']); // 한 글자씩 찍히는 대사 (넘겨받을 때 이미 번역됨)

function inlineOnly(el) {
  for (const c of el.querySelectorAll('*')) if (!INLINE.has(c.tagName) || c.id || c.children.length) return false;
  return el.children.length > 0;
}

function trText(node) {
  const v = node.nodeValue;
  if (!v || !HANGUL.test(v)) return;
  const p = node.parentElement;
  if (p && (NO_TOUCH.has(p.id) || SKIP.has(p.tagName))) return;
  const t = tr(v);
  if (t !== v) node.nodeValue = t;
}

function trAttrs(el) {
  for (const a of ['title', 'placeholder', 'aria-label']) {
    const v = el.getAttribute?.(a);
    if (v && HANGUL.test(v)) el.setAttribute(a, tr(v));
  }
}

export function translateEl(el) {
  if (LANG === 'ko' || !el || el.nodeType !== 1 || SKIP.has(el.tagName) || NO_TOUCH.has(el.id)) return;
  trAttrs(el);
  // 굵은 글씨 등이 섞인 한 문장은 통째로 (어순이 달라서 조각조각 번역하면 어색함)
  if (inlineOnly(el)) {
    const h = el.innerHTML;
    if (HANGUL.test(h)) {
      quiet = true;
      let t;
      try { t = phrase(norm(h)); } finally { quiet = false; }
      if (done(t)) { if (t !== h) el.innerHTML = t; return; }
    }
  }
  for (const c of [...el.childNodes]) {
    if (c.nodeType === 3) trText(c);
    else if (c.nodeType === 1) translateEl(c);
  }
}

export function watchDom() {
  if (LANG === 'ko' || typeof document === 'undefined') return;
  document.title = tr(document.title);
  translateEl(document.body);
  const mo = new MutationObserver((muts) => {
    const els = new Set();
    for (const m of muts) {
      if (m.type === 'characterData') {
        const p = m.target.parentElement;
        if (p && inlineOnly(p)) els.add(p); else trText(m.target);
      } else if (m.type === 'childList') {
        if (m.target.nodeType === 1) els.add(m.target);
      } else if (m.type === 'attributes') trAttrs(m.target);
    }
    for (const el of els) if (el.isConnected) translateEl(el);
  });
  mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['title', 'placeholder', 'aria-label'] });
}
