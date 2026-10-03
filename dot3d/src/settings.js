// 설정: 음량, 화질, 화면 흔들림, 데미지 숫자, 키 배치. 브라우저(또는 데스크톱 앱)에 따로 저장
const KEY = 'dot3d-settings-v1';

// 바꿀 수 있는 동작과 기본 키 (이동 WASD·방향키는 고정)
export const ACTIONS = [
  ['atk', '기본 공격', 'KeyJ'],
  ['dash', '피하기', 'Space'],
  ['skill', '기술 1', 'KeyK'],
  ['skill2', '기술 2', 'KeyL'],
  ['skill3', '기술 3', 'KeyI'],
  ['ult', '고유 기술', 'KeyU'],
  ['act', '대화·조사', 'KeyE'],
  ['bag', '가방', 'KeyB'],
  ['skills', '기술 수련', 'KeyT'],
  ['auto', '자동 이동', 'KeyF'],
  ['hunt', '자동 사냥', 'KeyH'],
];

export const DEFAULTS = {
  vol: { master: 0.7, music: 0.55, sfx: 0.95, amb: 0.6 },
  quality: 'high',     // high | mid | low (고화질 모드에서만)
  shake: 1,            // 0 끔, 0.5 약하게, 1 보통
  numbers: true,       // 데미지 숫자
  binds: {},           // 동작 → 사용자가 바꾼 키 코드
  lang: 'auto',        // ko | en | auto (브라우저 언어)
};

export function loadSettings() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!d) return structuredClone(DEFAULTS);
    return { ...structuredClone(DEFAULTS), ...d, vol: { ...DEFAULTS.vol, ...(d.vol || {}) }, binds: { ...(d.binds || {}) } };
  } catch {
    return structuredClone(DEFAULTS);
  }
}

export function saveSettings(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* 저장소를 못 쓰면 이번 실행 동안만 */ }
}

// 지금 키 배치에서 동작에 쓰이는 키 (바꾼 키가 있으면 그것)
export function keyOf(s, action) {
  const a = ACTIONS.find((x) => x[0] === action);
  return s.binds[action] || (a ? a[2] : '');
}

// 바꾼 키 → 동작 이름 (키를 누르면 이 표를 먼저 봄)
export function bindMap(s) {
  const m = {};
  for (const [act] of ACTIONS) if (s.binds[act]) m[s.binds[act]] = act;
  return m;
}

// 키 코드를 사람이 읽는 이름으로
export function keyName(code) {
  if (!code) return '-';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  return { Space: 'Space', ShiftLeft: 'Shift', ShiftRight: '오른 Shift', Enter: 'Enter', Tab: 'Tab', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', ControlLeft: 'Ctrl', AltLeft: 'Alt', Backquote: '`', Semicolon: ';', Comma: ',', Period: '.', Slash: '/' }[code] || code;
}
