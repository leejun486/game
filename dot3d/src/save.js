// 자동 저장: 브라우저 localStorage에 진행 상황과 설정을 보관
// (사생활 보호 모드 등에서 저장소를 못 쓰면 조용히 건너뜀)
const KEY = 'dot3d-palace-save-v1';

export function loadSave() {
  try {
    let raw = localStorage.getItem(KEY);
    // 데스크톱 앱: 파일 쪽이 더 최근이면 그것을 씀 (브라우저 저장소가 지워졌을 때도 이어짐)
    const file = window.dot3dDesktop?.readSave?.();
    if (file) { try { const f = JSON.parse(file); const l = raw ? JSON.parse(raw) : null; if (!l || (f.savedAt || 0) > (l.savedAt || 0)) raw = file; } catch { /* 파일이 깨졌으면 무시 */ } }
    if (!raw) return null;
    const d = parse(raw);
    if (d) return d;
    // 저장이 깨졌으면 (쓰다가 꺼짐 등) 예비 기록으로
    const b = parse(localStorage.getItem(KEY + '-backup'));
    if (b) console.warn('저장 기록이 깨져서 예비 기록을 불러왔어요');
    return b;
  } catch {
    return null;
  }
}

function parse(raw) {
  try { const d = raw && JSON.parse(raw); return d && d.v === 1 && typeof d.progress === 'object' ? d : null; } catch { return null; }
}

export function writeSave(data) {
  try {
    const json = JSON.stringify({ v: 1, savedAt: Date.now(), ...data });
    localStorage.setItem(KEY, json);
    // 5분마다 예비 기록을 하나 더 남김 (잘못 덮어써도 되돌릴 수 있게)
    const bt = +(localStorage.getItem(KEY + '-bt') || 0);
    if (Date.now() - bt > 5 * 60 * 1000) { localStorage.setItem(KEY + '-backup', json); localStorage.setItem(KEY + '-bt', String(Date.now())); }
    // 데스크톱 앱: 파일로도 저장
    if (window.dot3dDesktop) window.dot3dDesktop.writeSave(json);
    return true;
  } catch {
    return false;
  }
}

// 저장 파일 내보내기용: 지금 기록의 JSON 문자열
export function exportSave() {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

// 저장 파일 불러오기: 형식을 확인한 뒤 덮어씀
export function importSave(text) {
  const d = JSON.parse(text);
  if (!d || d.v !== 1 || typeof d.progress !== 'object') throw new Error('월하궁 저장 파일이 아니에요');
  localStorage.setItem(KEY + '-backup', localStorage.getItem(KEY) || '');
  localStorage.setItem(KEY, JSON.stringify(d));
  if (window.dot3dDesktop) window.dot3dDesktop.writeSave(JSON.stringify(d));
  return d;
}

export function clearSave() {
  try {
    localStorage.removeItem(KEY);
    window.dot3dDesktop?.writeSave('');
  } catch {
    /* 무시 */
  }
}

// 기기 옮기기 코드: 저장 기록을 줄여(deflate) 글자로 바꾼 것. 다른 기기에서 붙여 넣으면 그대로 이어 함
//  서버 없이 복사·붙여넣기(메신저·메모)로 옮김. 앞머리 WH1: 로 알아봄
const b64u = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64u = (t) => { const s = atob(t.replace(/-/g, '+').replace(/_/g, '/')); const b = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; };
async function pipe(bytes, stream) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer()); }

export async function makeTransferCode() {
  const json = exportSave();
  if (!json) return null;
  const raw = new TextEncoder().encode(json);
  if (typeof CompressionStream === 'undefined') return 'WH0:' + b64u(raw);
  return 'WH1:' + b64u(await pipe(raw, new CompressionStream('deflate-raw')));
}

export async function readTransferCode(code) {
  const t = String(code || '').replace(/\s+/g, '');
  const m = /^WH([01]):([A-Za-z0-9_-]+)$/.exec(t);
  if (!m) throw new Error('코드가 올바르지 않아요 (WH1: 로 시작해야 해요)');
  let bytes = unb64u(m[2]);
  if (m[1] === '1') {
    if (typeof DecompressionStream === 'undefined') throw new Error('이 브라우저는 코드를 풀 수 없어요 — 저장 파일로 옮겨 주세요');
    bytes = await pipe(bytes, new DecompressionStream('deflate-raw'));
  }
  importSave(new TextDecoder().decode(bytes));
}
