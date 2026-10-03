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
    const d = JSON.parse(raw);
    return d && d.v === 1 ? d : null;
  } catch {
    return null;
  }
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
