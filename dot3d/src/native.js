// 앱(안드로이드·iOS, Capacitor)에서만: 휴대폰 뒤로 가기 단추, 앱을 내렸다 올릴 때
//  웹판·데스크톱판에서는 아무것도 하지 않음 (window.Capacitor가 없음)
//  - 뒤로 가기: 대화는 넘기고, 열린 창은 닫고, 게임 중이면 두루마리 메뉴(Esc와 같음).
//    선택 화면에서는 두 번 눌러 끄기
//  - 앱을 내리면: 저장하고, 싸우던 중이면 메뉴를 열어 멈추고, 소리를 멈춤 → 다시 올리면 소리만 되살림
export function isNativeApp() {
  return !!(typeof window !== 'undefined' && window.Capacitor?.isNativePlatform?.());
}

export function setupNative(g) {
  if (!isNativeApp()) return false;
  document.body.classList.add('native');
  const App = window.Capacitor.Plugins?.App;
  if (!App) return true;
  let lastBack = 0;
  App.addListener('backButton', () => {
    const confirmOpen = document.getElementById('confirm')?.classList.contains('show');
    if (g.ui.inDialog && !g.story && !g.cut) { g.ui.advance(); return; }
    if (g.state === 'title' && !g.pauseOpen && !confirmOpen) {
      const now = Date.now();
      if (now - lastBack < 2000) { g.save(false); App.exitApp(); return; }
      lastBack = now;
      g.ui.toast('한 번 더 누르면 게임을 꺼요', 2);
      return;
    }
    if (g.state === 'dead') { g.retry(); return; }
    g.onKey('Escape');
  });
  App.addListener('appStateChange', ({ isActive }) => {
    if (!isActive) {
      if (g.state === 'play') g.save(false);
      if (g.state === 'play' && !g.paused && !g.story && !g.cut && !g.player.dead) g.hub.toggle(true);
      try { g.audio.ctx?.suspend(); } catch { /* 소리 없음 */ }
    } else {
      try { g.audio.ctx?.resume(); } catch { /* 소리 없음 */ }
    }
  });
  return true;
}
