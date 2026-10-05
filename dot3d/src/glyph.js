// 게임패드 버튼 그림 (엑스박스·스팀 덱 배치): A 초록, B 빨강, X 파랑, Y 노랑, 나머지는 회색 알약
//  패드를 쓰는 중이면(body.pad) 화면의 조작 안내를 이 그림으로 바꿈 (main.js setPadMode, ui.js 상호작용 안내)
export const padGlyph = (b) => `<i class="gp gp-${{ A: 'a', B: 'b', X: 'x', Y: 'y' }[b] || 'n'}">${b}</i>`;
export const padMode = () => document.body.classList.contains('pad');
