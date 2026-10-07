// 그래픽: 고화질만 씀 (부드러운 음영·고해상도·후처리)
//  예전엔 도트 모드('pixel')를 고를 수 있었지만, 일부 기기에서 도트 모드로 바꾸면 게임이 시작되지 않아 없앰.
//  도트 모드용 코드(GFX.hd가 거짓일 때의 갈래)는 아직 남아 있으나 쓰이지 않음. 예전에 저장된 도트 설정은 지움.
try { if (localStorage.getItem('dot3d-gfx')) localStorage.removeItem('dot3d-gfx'); } catch (e) { /* 저장소 없음 */ }
export const GFX = { hd: true, mode: 'hd' };
