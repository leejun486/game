// 기기 점검: 실제 휴대폰·태블릿에서 해 볼 때 쓰는 도구
//  - 성능 표시: 화면 구석에 초당 프레임(평균·가장 느린 1%)과 화질 단계
//  - 점검 결과: 기기·화면·그래픽 칩·프레임·메모리·안전 영역(노치)을 글로 모아 복사 → 개발자에게 보내기
import { VERSION } from './version.js';
import { GFX } from './gfx.js';

export class DevStats {
  constructor(game) {
    this.game = game;
    this.ms = new Float32Array(600); // 최근 600프레임의 걸린 시간(ms)
    this.n = 0; this.i = 0;
    this.el = null; this.showT = 0;
  }

  tick(realDt) {
    if (!(realDt > 0) || realDt > 1) return;
    this.ms[this.i] = realDt * 1000;
    this.i = (this.i + 1) % this.ms.length;
    this.n = Math.min(this.ms.length, this.n + 1);
    if (!this.game.settings?.fps) { if (this.el) this.el.style.display = 'none'; return; }
    this.showT -= realDt;
    if (this.showT > 0) return;
    this.showT = 0.5;
    if (!this.el) { this.el = document.createElement('div'); this.el.id = 'fps'; document.getElementById('app').append(this.el); }
    const s = this.summary();
    this.el.style.display = '';
    this.el.textContent = `${s.fps} FPS · 느릴 때 ${s.low} · ${this.game.settings.quality || 'high'}`;
    this.el.className = s.fps >= 50 ? 'good' : s.fps >= 30 ? 'ok' : 'bad';
  }

  summary() {
    const a = Array.from(this.ms.subarray(0, this.n)).filter((v) => v > 0).sort((x, y) => x - y);
    if (!a.length) return { fps: 0, low: 0, p95: 0 };
    const avg = a.reduce((x, y) => x + y, 0) / a.length;
    const worst = a.slice(Math.floor(a.length * 0.99));
    const w = worst.reduce((x, y) => x + y, 0) / Math.max(1, worst.length);
    return { fps: Math.round(1000 / avg), low: Math.round(1000 / w), p95: +a[Math.floor(a.length * 0.95)].toFixed(1) };
  }

  gpu() {
    try {
      const gl = this.game.pixel.renderer.getContext();
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    } catch { return '알 수 없음'; }
  }

  safeArea() {
    const p = document.createElement('div');
    p.style.cssText = 'position:fixed;left:0;top:0;visibility:hidden;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)';
    document.body.append(p);
    const c = getComputedStyle(p);
    const v = [c.paddingTop, c.paddingRight, c.paddingBottom, c.paddingLeft].map((x) => parseInt(x, 10) || 0);
    p.remove();
    return v;
  }

  report() {
    const g = this.game, s = this.summary(), cv = g.pixel.renderer.domElement;
    const sa = this.safeArea();
    const mem = performance.memory ? `${Math.round(performance.memory.usedJSHeapSize / 1e6)}MB / ${Math.round(performance.memory.jsHeapSizeLimit / 1e6)}MB` : '알 수 없음';
    const standalone = matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches || navigator.standalone;
    return [
      `월하궁 v${VERSION} · ${GFX.hd ? '고화질' : '도트'} 모드 · 화질 ${g.settings.quality || 'high'}${g.settings.autoQ === false ? ' (직접 고름)' : ' (자동)'}`,
      `기기: ${navigator.userAgent}`,
      `화면: ${innerWidth}×${innerHeight} (CSS) × ${devicePixelRatio} · 그리는 크기 ${cv.width}×${cv.height} · ${innerWidth > innerHeight ? '가로' : '세로'}`,
      `안전 영역(노치·홈 바): 위 ${sa[0]} · 오른쪽 ${sa[1]} · 아래 ${sa[2]} · 왼쪽 ${sa[3]}`,
      `그래픽 칩: ${this.gpu()}`,
      `프레임: 평균 ${s.fps} FPS · 느릴 때(하위 1%) ${s.low} FPS · 95% 프레임 ${s.p95}ms (최근 ${this.n}프레임)`,
      `메모리: ${mem} · 기기 메모리 ${navigator.deviceMemory ? navigator.deviceMemory + 'GB' : '알 수 없음'} · CPU ${navigator.hardwareConcurrency || '?'}코어`,
      `터치 ${'ontouchstart' in window ? '있음' : '없음'} · 게임패드 ${g.padMode ? '쓰는 중' : '없음'} · 설치형 실행 ${standalone ? '예' : '아니오'} · 오프라인 준비 ${navigator.serviceWorker?.controller ? '됨' : '안 됨'}`,
      `지역 ${g.mapId} · 적 ${g.enemies.length} · Lv.${g.player.level} · 플레이 ${Math.round((g.playTime || 0) / 60)}분`,
    ].join('\n');
  }
}

// 설정 → 화면 창 아래에 붙는 '기기 점검' 칸
export function renderDevice(g, el) {
  const box = document.createElement('div');
  box.innerHTML = `<h3 style="margin-top:14px">기기 점검</h3>
    <div class="pz-row"><label>성능 표시</label><div class="pz-seg"><button data-fps="1" class="${g.settings.fps ? 'on' : ''}">보이기</button><button data-fps="0" class="${g.settings.fps ? '' : 'on'}">숨기기</button></div></div>
    <div class="pz-row"><button class="pz-btn" id="dev-report">점검 결과 보기 · 복사</button></div>
    <textarea id="dev-box" class="pz-code hidden" rows="9" readonly spellcheck="false"></textarea>
    <div class="pz-note" id="dev-msg">휴대폰에서 버벅이거나 화면이 잘리면 잠시 놀아 본 뒤 「점검 결과」를 복사해 보내 주세요. 기기·화면·그래픽 칩·프레임 기록이 들어 있어요 (개인 정보는 없어요).</div>`;
  el.append(box);
  for (const b of box.querySelectorAll('[data-fps]')) b.addEventListener('click', () => { g.setSetting((s) => { s.fps = b.dataset.fps === '1'; }); g.pausePane('screen'); });
  box.querySelector('#dev-report').addEventListener('click', async () => {
    const t = g.dev.report(), ta = box.querySelector('#dev-box');
    ta.classList.remove('hidden'); ta.value = t; ta.select();
    let ok = false;
    try { await navigator.clipboard.writeText(t); ok = true; } catch { try { ok = document.execCommand('copy'); } catch { /* 직접 복사 */ } }
    box.querySelector('#dev-msg').textContent = ok ? '복사했어요. 메신저·메일에 붙여 넣어 보내 주세요.' : '글을 길게 눌러 모두 선택한 뒤 복사하세요.';
  });
}
