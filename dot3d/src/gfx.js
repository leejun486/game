// 그래픽 설정: 'hd' = 고화질(부드러운 음영·고해상도·후처리), 'pixel' = 도트
// 바꾸면 페이지를 다시 불러와 적용 (재질·텍스처를 처음부터 다시 만들어야 하므로)
let mode = 'hd';
try { mode = localStorage.getItem('dot3d-gfx') === 'pixel' ? 'pixel' : 'hd'; } catch (e) { /* 저장소 없음 */ }
export const GFX = { hd: mode === 'hd', mode };
export function setGfx(m) {
  try { localStorage.setItem('dot3d-gfx', m); } catch (e) { /* 무시 */ }
  location.reload();
}
