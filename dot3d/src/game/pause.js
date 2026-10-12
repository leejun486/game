// Game의 한 부분: 일시정지 창: 소리·화면·조작·저장 파일·각 창 그리기
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import { exportSave, importSave, makeTransferCode, readTransferCode } from '../save.js';
import { ACTIONS, keyOf, keyName } from '../settings.js';
import { GFX } from '../gfx.js';
import { LANG, LANGS } from '../i18n.js';
import { DIFFS, DIFF_ORDER } from '../difficulty.js';
import { renderCodex } from '../codex.js';
import { renderShop } from '../shop.js';
import { renderDevice } from '../device.js';
import { renderChallenge } from '../challenge.js';
import { DIFF_NOTE } from './shared.js';

import { renderDungeons } from '../dungeon.js';
export class PausePart {
  togglePause(open = !this.pauseOpen) {
    if (open && this.state === 'play') { if (this.ui.bagOpen) this.toggleBag(false); if (this.ui.skillsOpen) this.toggleSkills(false); if (this.mapOpen) this.minimap.toggle(false); if (this.autoMove) this.stopAutoMove(); }
    this.pauseOpen = open;
    if (!open) setTimeout(() => { this.pzFromHub = false; }, 0);
    if (open && this.hub?.open) { this.hub.open = false; this.hub.el.classList.remove('show'); }
    this.rebind = null;
    if (this.state === 'play') this.paused = open;
    document.getElementById('pause').classList.toggle('show', open);
    // 선택 화면에서 열면 '선택 화면으로'는 감춤
    document.querySelector('#pause [data-p="title"]').style.display = this.state === 'title' ? 'none' : '';
    document.querySelector('#pause [data-p="resume"]').textContent = this.state === 'title' ? '닫기' : '계속하기';
    if (open) this.pausePane(this.state === 'title' ? 'sound' : 'sound');
    this.audio.play('talk');
  }

  pausePane(tab) {
    this.pzTab = tab;
    for (const b of document.querySelectorAll('#pause .pz-menu button')) b.classList.toggle('on', b.dataset.p === tab);
    const el = document.getElementById('pz-pane');
    const S = this.settings;
    if (tab === 'sound') {
      const row = (k, name) => `<div class="pz-row"><label>${name}</label><input type="range" min="0" max="100" value="${Math.round(S.vol[k] * 100)}" data-v="${k}"><span class="val">${Math.round(S.vol[k] * 100)}</span></div>`;
      el.innerHTML = `<h3>소리</h3>${row('master', '전체')}${row('music', '배경음악')}${row('sfx', '효과음')}${row('amb', '환경음')}
        <div class="pz-row"><label>음악</label><div class="pz-seg"><button data-m="1" class="${this.audio.musicOn ? 'on' : ''}">켜기</button><button data-m="0" class="${this.audio.musicOn ? '' : 'on'}">끄기</button></div></div>`;
      for (const r of el.querySelectorAll('input[type=range]')) r.addEventListener('input', () => {
        r.nextElementSibling.textContent = r.value;
        this.setSetting((s) => { s.vol[r.dataset.v] = r.value / 100; });
      });
      for (const b of el.querySelectorAll('[data-m]')) b.addEventListener('click', () => { if ((b.dataset.m === '1') !== this.audio.musicOn) this.audio.toggleMusic(); this.save(false); this.pausePane('sound'); });
    } else if (tab === 'screen') {
      const seg = (key, opts, cur) => `<div class="pz-seg">${opts.map(([v, n]) => `<button data-k="${key}" data-val="${v}" class="${String(cur) === String(v) ? 'on' : ''}">${n}</button>`).join('')}</div>`;
      el.innerHTML = `<h3>화면</h3>
        <div class="pz-row"><label>언어</label>${seg('lang', LANGS, LANG)}</div>
        <div class="pz-row"><label>난이도</label>${seg('diff', DIFF_ORDER.map((k) => [k, DIFFS[k].name]), this.difficulty)}</div>
        <div class="pz-note" style="margin-top:-4px">${DIFF_NOTE[this.difficulty]}</div>
        <div class="pz-row"><label>화질</label>${seg('quality', [['high', '높음'], ['mid', '보통'], ['low', '낮음']], S.quality)}</div>
        <div class="pz-row"><label>화면 흔들림</label>${seg('shake', [[1, '보통'], [0.5, '약하게'], [0, '끔']], S.shake)}</div>
        <div class="pz-row"><label>도움말</label>${seg('tips', [[1, '보이기'], [0, '숨기기']], S.tips === false ? 0 : 1)}</div>
        <h3 style="margin-top:14px">보기 편하게</h3>
        <div class="pz-row"><label>글자·메뉴 크기</label>${seg('ui', [[1, '100%'], [1.15, '115%'], [1.3, '130%']], S.ui || 1)}</div>
        <div class="pz-row"><label>위험 표시 색</label>${seg('warn', [['', '원래 색'], ['#ffe600', '<i class="sw" style="background:#ffe600"></i>노랑'], ['#30c8ff', '<i class="sw" style="background:#30c8ff"></i>하늘색'], ['#ff3af0', '<i class="sw" style="background:#ff3af0"></i>자홍']], S.warn || '')}</div>
        <div class="pz-row"><label>화면 번쩍임</label>${seg('flash', [[1, '보통'], [0.3, '줄이기']], S.flash ?? 1)}</div>
        <div class="pz-note" style="margin-top:-4px">위험 표시 색: 보스·몬스터 공격이 떨어질 바닥 원과 돌진 경고선을 모두 한 색으로 칠해요. 빨강·초록이 잘 구분되지 않으면 노랑이나 하늘색을 골라 보세요.</div>
        <div class="pz-row"><label>데미지 숫자</label>${seg('numbers', [[1, '보이기'], [0, '숨기기']], S.numbers ? 1 : 0)}</div>
        ${GFX.hd ? '' : `<div class="pz-row"><label>외곽선</label>${seg('outline', [[1, '켜기'], [0, '끄기']], this.pixel.compMat.uniforms.outline.value ? 1 : 0)}</div>`}
        <div class="pz-note">화질 '낮음'은 해상도를 줄이고 그늘(AO)·계단 현상 제거·그림자 해상도를 낮춰 저사양 노트북·휴대폰에서 부드럽게 돌아가요. 버벅이면 화질이 저절로 한 단계씩 낮아지고, 직접 고르면 그대로 둡니다. 그래픽 모드는 새로고침해야 바뀝니다.</div>`;
      for (const b of el.querySelectorAll('[data-k]')) b.addEventListener('click', () => {
        const k = b.dataset.k, v = b.dataset.val;
        if (k === 'lang') { if (v !== LANG) this.setLang(v); return; }
        if (k === 'diff') this.setDifficulty(v);
        if (k === 'quality') { this.setSetting((s) => { s.quality = v; s.autoQ = false; }); this.applyQuality(v); }
        if (k === 'shake') this.setSetting((s) => { s.shake = +v; });
        if (k === 'numbers') this.setSetting((s) => { s.numbers = v === '1'; });
        if (k === 'tips') this.setSetting((s) => { s.tips = v === '1'; });
        if (k === 'ui') this.setSetting((s) => { s.ui = +v; });
        if (k === 'warn') this.setSetting((s) => { s.warn = v; });
        if (k === 'flash') this.setSetting((s) => { s.flash = +v; });
        if (k === 'outline') { this.pixel.compMat.uniforms.outline.value = +v; this.save(false); }
        this.pausePane('screen');
      });
      renderDevice(this, el);
    } else if (tab === 'daily') {
      this.dailyGoals.render(el);
    } else if (tab === 'records') {
      this.records.render(el);
    } else if (tab === 'codex') {
      renderCodex(this, el, this.codex.sub || 'mon');
    } else if (tab === 'shop') {
      renderShop(this, el);
    } else if (tab === 'dungeon') {
      renderDungeons(this, el);
    } else if (tab === 'challenge') {
      renderChallenge(this, el);
    } else if (tab === 'keys') {
      el.innerHTML = `<h3>조작 · 키 바꾸기</h3>${ACTIONS.map(([a, n]) => `<div class="pz-row"><label>${n}</label><button class="pz-key${this.rebind === a ? ' wait' : ''}" data-a="${a}">${this.rebind === a ? '키를 누르세요…' : keyName(keyOf(S, a))}</button></div>`).join('')}
        <div class="pz-row"><button class="pz-btn" id="pz-keyreset">기본 키로 되돌리기</button></div>
        ${this.state === 'play' ? '<div class="pz-row"><button class="pz-btn" id="pz-tut">튜토리얼 다시 하기</button></div>' : ''}
        <div class="pz-note">이동은 WASD·방향키 고정. 원래 키(J/Z, Space/Shift, K/X, L/Q, I/R 등)도 계속 쓸 수 있어요.<br>
        <b>게임패드</b> — 왼쪽 스틱 이동 · A 공격 · B 피하기 · X 기술1 · Y 기술2 · RB 기술3 · RT 고유 기술 · LB 대화 · LT 타겟 변경 · Back 가방 · Start 일시정지 · 십자키 ↑ 자동 이동 / ↓ 자동 사냥 / ← 기술 수련. 메뉴에서는 십자키로 고르고 A로 누르고 B로 닫아요.</div>`;
      for (const b of el.querySelectorAll('[data-a]')) b.addEventListener('click', () => { this.rebind = b.dataset.a; this.pausePane('keys'); });
      el.querySelector('#pz-keyreset').addEventListener('click', () => { this.setSetting((s) => { s.binds = {}; }); this.pausePane('keys'); });
      el.querySelector('#pz-tut')?.addEventListener('click', () => { this.flags.tut = 0; this.togglePause(false); this.coach.startTutorial(); });
    } else if (tab === 'data') {
      const has = !!exportSave();
      el.innerHTML = `<h3>저장 파일</h3>
        <div class="pz-note" style="margin-top:0">진행은 자동 저장되지만 브라우저 기록·캐시를 지우면 함께 사라질 수 있어요. 가끔 <b>저장 파일로 내보내 두면</b> 다른 기기·브라우저에서도 이어 할 수 있어요.</div>
        <div class="pz-row"><button class="pz-btn main" id="pz-export" ${has ? '' : 'disabled'}>저장 파일 내보내기 (.json)</button></div>
        <div class="pz-row"><button class="pz-btn" id="pz-import">저장 파일 불러오기</button></div>
        <div class="pz-row"><button class="pz-btn" id="pz-backup">5분 전 예비 기록으로 되돌리기</button></div>
        <h3 style="margin-top:14px">기기 옮기기 코드</h3>
        <div class="pz-note" style="margin-top:0">파일 없이 옮길 때: 이 기기에서 코드를 만들어 복사하고 메모·메신저로 다른 기기에 보낸 뒤 붙여 넣으세요. 코드에는 진행 기록만 들어 있어요.</div>
        <div class="pz-row"><button class="pz-btn" id="pz-code" ${has ? '' : 'disabled'}>코드 만들기 · 복사</button><button class="pz-btn" id="pz-paste">코드 붙여 넣어 불러오기</button></div>
        <textarea id="pz-codebox" class="pz-code hidden" rows="4" spellcheck="false" placeholder="WH1:… 코드를 여기에 붙여 넣으세요"></textarea>
        <div class="pz-row hidden" id="pz-coderow"><button class="pz-btn main" id="pz-codego">이 코드로 불러오기</button></div>
        <div class="pz-note" id="pz-msg"></div>`;
      const msg = (t) => { el.querySelector('#pz-msg').textContent = t; };
      el.querySelector('#pz-export').addEventListener('click', () => {
        if (this.state === 'play') this.save(false);
        const json = exportSave();
        if (!json) return msg('아직 저장된 기록이 없어요');
        const d = new Date(), pad = (n) => String(n).padStart(2, '0');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
        a.download = `${LANG !== 'ko' ? 'wolhagung-save' : '월하궁-저장'}-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        msg('저장 파일을 내려받았어요.');
      });
      el.querySelector('#pz-import').addEventListener('click', () => document.getElementById('save-file').click());
      const box = el.querySelector('#pz-codebox');
      el.querySelector('#pz-code').addEventListener('click', async () => {
        if (this.state === 'play') this.save(false);
        const code = await makeTransferCode();
        if (!code) return msg('아직 저장된 기록이 없어요');
        box.classList.remove('hidden'); box.readOnly = true; box.value = code; box.select();
        el.querySelector('#pz-coderow').classList.add('hidden');
        let ok = false;
        try { await navigator.clipboard.writeText(code); ok = true; } catch { try { ok = document.execCommand('copy'); } catch { /* 직접 복사 */ } }
        msg(ok ? `코드를 복사했어요 (${code.length}자). 다른 기기의 「코드 붙여 넣어 불러오기」에 넣으세요.` : '코드를 길게 눌러 모두 선택한 뒤 복사하세요.');
      });
      el.querySelector('#pz-paste').addEventListener('click', () => {
        box.classList.remove('hidden'); box.readOnly = false; box.value = ''; box.focus();
        el.querySelector('#pz-coderow').classList.remove('hidden');
        msg('코드를 붙여 넣고 「이 코드로 불러오기」를 누르세요. 지금 기록은 예비 기록으로 남아요.');
      });
      el.querySelector('#pz-codego').addEventListener('click', async () => {
        try { await readTransferCode(box.value); this.noSave = true; msg('불러왔어요. 다시 시작합니다…'); setTimeout(() => location.reload(), 900); } catch (e) { msg(e.message || '코드를 읽을 수 없어요'); }
      });
      el.querySelector('#pz-backup').addEventListener('click', () => {
        let b = null;
        try { b = localStorage.getItem('dot3d-palace-save-v1-backup'); } catch { /* 무시 */ }
        if (!b) return msg('예비 기록이 없어요');
        try { importSave(b); this.noSave = true; msg('예비 기록으로 되돌렸어요. 다시 불러옵니다…'); setTimeout(() => location.reload(), 900); } catch (e) { msg(e.message); }
      });
    }
  }

  finishRebind(code) {
    const a = this.rebind;
    this.rebind = null;
    if (code !== 'Escape' && !['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      this.setSetting((s) => {
        for (const k of Object.keys(s.binds)) if (s.binds[k] === code) delete s.binds[k]; // 같은 키는 하나에만
        s.binds[a] = code;
      });
    }
    this.pausePane('keys');
  }

  setupPause() {
    for (const b of document.querySelectorAll('#pause .pz-menu button')) b.addEventListener('click', () => {
      const p = b.dataset.p;
      if (p === 'resume') this.togglePause(false);
      else if (p === 'title') { this.save(false); location.reload(); }
      else this.pausePane(p);
    });
    document.getElementById('menu-btn').addEventListener('click', () => { if (this.state === 'play' && !this.player.dead) this.hub.toggle(!this.hub.open); });
    document.getElementById('btn-settings').addEventListener('click', (e) => { e.stopPropagation(); this.audio.unlock(); this.togglePause(true); });
    document.getElementById('save-file').addEventListener('change', (e) => {
      const f = e.target.files[0];
      e.target.value = '';
      if (!f) return;
      f.text().then((t) => {
        try {
          const d = importSave(t);
          this.noSave = true;
          const m = document.getElementById('pz-msg');
          if (m) m.textContent = `불러왔어요 (${new Date(d.savedAt || Date.now()).toLocaleString()} 기록). 다시 시작합니다…`;
          setTimeout(() => location.reload(), 1000);
        } catch (err) {
          const m = document.getElementById('pz-msg');
          if (m) m.textContent = '불러오지 못했어요: ' + (err.message || '파일이 깨졌어요');
        }
      });
    });
  }
}
