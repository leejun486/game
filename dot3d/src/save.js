// 자동 저장: 브라우저 localStorage에 진행 상황과 설정을 보관
// (사생활 보호 모드 등에서 저장소를 못 쓰면 조용히 건너뜀)
const KEY = 'dot3d-palace-save-v1';

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    return d && d.v === 1 ? d : null;
  } catch {
    return null;
  }
}

export function writeSave(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: 1, savedAt: Date.now(), ...data }));
    return true;
  } catch {
    return false;
  }
}

export function clearSave() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* 무시 */
  }
}
