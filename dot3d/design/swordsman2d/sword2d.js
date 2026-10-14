// 검객 이랑 · 귀여운 2D (약 2.5등신) — 정면·측면·뒷면 + 표정. viewBox 0 0 240 420, 바닥 y=404
(function () {
  const L = '#2a1e28';
  const s = (w) => `stroke="${L}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const C = {
    hair: '#3b2a26', hairHi: '#5e4338', skin: '#fde3cf', skinS: '#f3c9b0', white: '#f8f6f1', whiteS: '#d9d8e6',
    navy: '#2c3c72', navyS: '#1e2a54', red: '#d43a38', redS: '#a52a2a', gold: '#dcae46', black: '#2a2530', brown: '#6e4c34', blush: '#ff8f8f',
  };

  // ---------- 얼굴 ----------
  function eye(cx, cy, expr, flip) {
    const d = flip ? -1 : 1;
    if (expr === 'hurt') return `<path d="M${cx - 11 * d},${cy - 8} L${cx + 9 * d},${cy} L${cx - 11 * d},${cy + 8}" fill="none" ${s(3.4)}/>`;
    if (expr === 'smile') return `<path d="M${cx - 11},${cy + 3} Q${cx},${cy - 10} ${cx + 11},${cy + 3}" fill="none" ${s(3.6)}/>`;
    const lid = expr === 'fight' ? 7 : 0, ry = expr === 'surprise' ? 17 : 15, rx = expr === 'surprise' ? 11 : 11.5;
    const id = `ey${Math.round(cx)}${expr}`;
    return `<defs><clipPath id="${id}"><path d="M${cx - 16},${cy - 20 + lid + (expr === 'fight' ? 4 * d : 0)} L${cx + 16},${cy - 20 + lid - (expr === 'fight' ? 4 * d : 0)} L${cx + 16},${cy + 22} L${cx - 16},${cy + 22} Z"/></clipPath></defs>
      <g clip-path="url(#${id})">
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fffaf4" ${s(2)}/>
        <ellipse cx="${cx}" cy="${cy + 1}" rx="${rx * 0.86}" ry="${ry * 0.9}" fill="#3a2420"/>
        <ellipse cx="${cx}" cy="${cy + 6}" rx="${rx * 0.66}" ry="${ry * 0.5}" fill="#7a4a34"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.36}" ry="${ry * 0.4}" fill="#160c0c"/>
        <ellipse cx="${cx - 4}" cy="${cy - 6}" rx="${expr === 'surprise' ? 3 : 4.2}" ry="${expr === 'surprise' ? 3.6 : 5}" fill="#fff"/>
        <circle cx="${cx + 4.5}" cy="${cy + 7}" r="2" fill="#fff"/>
      </g>
      <path d="M${cx - 14},${cy - ry + 4 + lid + (expr === 'fight' ? 4 * d : 0)} Q${cx},${cy - ry - 4 + lid} ${cx + 14},${cy - ry + 4 + lid - (expr === 'fight' ? 4 * d : 0)}" fill="none" ${s(4)}/>`;
  }
  function mouth(x, y, expr) {
    if (expr === 'fight') return `<path d="M${x - 9},${y - 3} Q${x},${y - 6} ${x + 9},${y - 3} Q${x + 6},${y + 9} ${x},${y + 10} Q${x - 6},${y + 9} ${x - 9},${y - 3} Z" fill="#8a2430" ${s(2.4)}/><path d="M${x - 6},${y + 6} Q${x},${y + 2} ${x + 6},${y + 6}" fill="#ff8a8a"/>`;
    if (expr === 'hurt') return `<path d="M${x - 8},${y + 2} q4,-4 8,0 q4,4 8,0" fill="none" ${s(2.6)}/>`;
    if (expr === 'surprise') return `<ellipse cx="${x}" cy="${y + 2}" rx="5" ry="6.5" fill="#8a2430" ${s(2.4)}/>`;
    if (expr === 'smile') return `<path d="M${x - 8},${y - 2} Q${x},${y + 9} ${x + 8},${y - 2} Z" fill="#8a2430" ${s(2.2)}/>`;
    return `<path d="M${x - 6},${y} Q${x},${y + 5} ${x + 6},${y}" fill="none" ${s(2.6)}/>`;
  }
  function brows(expr) {
    const k = expr === 'fight' ? 6 : expr === 'hurt' || expr === 'surprise' ? -5 : 0;
    return `<path d="M88,${118 - Math.min(0, k)} Q98,${113} 108,${116 + k}" fill="none" ${s(3.2)}/><path d="M152,${118 - Math.min(0, k)} Q142,${113} 132,${116 + k}" fill="none" ${s(3.2)}/>`;
  }
  const sweat = (x, y) => `<path d="M${x},${y} q7,11 0,15 q-7,-4 0,-15 Z" fill="#c8ecff" ${s(1.8)}/>`;

  // ---------- 공통: 머리띠 리본 (나부낌) ----------
  const ribbons = (x, y, dir) => `<path d="M${x},${y} Q${x + 40 * dir},${y + 6} ${x + 60 * dir},${y + 50} Q${x + 66 * dir},${y + 80} ${x + 50 * dir},${y + 120} Q${x + 46 * dir},${y + 84} ${x + 40 * dir},${y + 62} Q${x + 30 * dir},${y + 30} ${x},${y + 12} Z" fill="${C.red}" ${s(2.6)}/>
    <path d="M${x},${y + 6} Q${x + 26 * dir},${y + 20} ${x + 34 * dir},${y + 60} Q${x + 36 * dir},${y + 92} ${x + 20 * dir},${y + 130} Q${x + 18 * dir},${y + 96} ${x + 20 * dir},${y + 70} Q${x + 16 * dir},${y + 38} ${x},${y + 16} Z" fill="${C.redS}" ${s(2.4)}/>`;

  // ---------- 정면 ----------
  function front(expr = 'calm') {
    return `<ellipse cx="120" cy="404" rx="52" ry="8" fill="#000" opacity=".2"/>
    ${ribbons(176, 104, 1)}
    <!-- 칼집: 왼쪽 허리에서 뒤로 비스듬히 -->
    <g transform="rotate(-24 120 300)"><rect x="18" y="292" width="150" height="14" rx="7" fill="${C.black}" ${s(2.6)}/><rect x="40" y="294" width="10" height="10" fill="${C.gold}"/><rect x="84" y="294" width="8" height="10" fill="${C.gold}"/></g>
    <!-- 장화 -->
    <path d="M78,356 L102,356 L104,394 Q104,402 96,402 L72,402 Q66,402 70,394 L78,384 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M138,356 L162,356 L170,384 L174,394 Q178,402 170,402 L146,402 Q138,402 138,394 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M70,398 L104,398 M138,398 L172,398" stroke="${C.brown}" stroke-width="4"/>
    <path d="M82,366 L100,372 M82,376 L100,382 M142,366 L160,372 M142,376 L160,382" stroke="#8a7a70" stroke-width="2"/>
    <!-- 통 넓은 바지 -->
    <path d="M88,300 Q66,336 78,360 L104,360 Q110,336 116,312 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M152,300 Q174,336 162,360 L136,360 Q130,336 124,312 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M152,300 Q174,336 162,360 L150,360 Q162,334 146,306 Z" fill="${C.whiteS}"/>
    <!-- 도포 자락: 앞이 갈라지고 남색 단 -->
    <path d="M86,262 Q66,300 58,336 Q80,344 104,336 Q110,300 118,270 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M154,262 Q174,300 184,336 Q160,344 136,336 Q130,300 122,270 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M154,262 Q174,300 184,336 Q172,340 164,340 Q160,300 146,268 Z" fill="${C.whiteS}"/>
    <path d="M58,336 Q80,344 104,336 L104,328 Q80,336 61,328 Z" fill="${C.navy}" ${s(2.2)}/>
    <path d="M184,336 Q160,344 136,336 L136,328 Q160,336 181,328 Z" fill="${C.navy}" ${s(2.2)}/>
    <path d="M104,336 Q110,300 118,270 L112,270 Q104,300 98,334 Z" fill="${C.navy}"/>
    <!-- 저고리 몸통 -->
    <path d="M88,196 Q80,232 86,266 L154,266 Q160,232 152,196 Q120,186 88,196 Z" fill="${C.white}" ${s(3)}/>
    <path d="M152,196 Q160,232 154,266 L140,266 Q148,232 140,198 Z" fill="${C.whiteS}"/>
    <!-- 깃: 남색 V (왼쪽이 위로) -->
    <path d="M102,194 L128,240 L138,234 L114,192 Z" fill="${C.navy}" ${s(2.2)}/>
    <path d="M138,194 L118,226 L110,220 L128,192 Z" fill="${C.navy}" ${s(2.2)}/>
    <!-- 허리띠: 넓은 남색 + 갈색 띠 + 금 고리 + 붉은 술 -->
    <path d="M84,242 Q120,250 156,242 L156,268 Q120,276 84,268 Z" fill="${C.navy}" ${s(2.8)}/>
    <path d="M84,252 Q120,260 156,252 L156,258 Q120,266 84,258 Z" fill="${C.brown}"/>
    <circle cx="120" cy="257" r="8" fill="${C.gold}" ${s(2.2)}/><circle cx="120" cy="257" r="3" fill="${C.redS}"/>
    <path d="M96,264 L94,292" stroke="${C.gold}" stroke-width="2.4"/><path d="M90,292 L98,292 L100,312 L88,312 Z" fill="${C.red}" ${s(2)}/>
    <!-- 팔: 넓은 소매 + 검은 토시, 두 손이 왼쪽 허리 칼자루 -->
    <path d="M90,200 Q62,214 60,248 Q64,262 82,260 Q86,236 98,222 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M60,246 Q64,262 82,260 L84,252 Q68,254 64,240 Z" fill="${C.navy}" ${s(2)}/>
    <path d="M66,256 L84,256 L90,280 L74,284 Z" fill="${C.black}" ${s(2.4)}/>
    <path d="M150,200 Q178,214 180,248 Q176,262 158,260 Q154,236 142,222 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M180,246 Q176,262 158,260 L156,252 Q172,254 176,240 Z" fill="${C.navy}" ${s(2)}/>
    <path d="M174,256 L156,256 L150,280 L166,284 Z" fill="${C.black}" ${s(2.4)}/>
    <!-- 칼자루 (왼쪽 허리) + 두 손 -->
    <g transform="rotate(-24 120 300)"><rect x="166" y="290" width="10" height="18" rx="2" fill="${C.gold}" ${s(2)}/><rect x="174" y="293" width="34" height="12" rx="4" fill="${C.black}" ${s(2.2)}/><path d="M182,293 l4,12 M192,293 l4,12" stroke="${C.gold}" stroke-width="2"/></g>
    <circle cx="82" cy="288" r="9" fill="${C.skin}" ${s(2.4)}/>
    <circle cx="158" cy="288" r="9" fill="${C.skin}" ${s(2.4)}/>
    <!-- 뒷머리 덩어리 + 높이 묶은 말총 -->
    <path d="M120,52 Q92,46 78,22 Q96,30 102,26 Q94,8 108,0 Q110,16 118,18 Q120,0 136,-4 Q132,14 138,20 Q150,4 166,8 Q152,18 154,28 Q172,24 182,36 Q164,38 156,48 Q140,40 120,52 Z" fill="${C.hair}" ${s(2.8)}/><path d="M112,30 Q120,22 132,26" fill="none" stroke="${C.hairHi}" stroke-width="4" stroke-linecap="round"/>
    <path d="M64,148 Q48,92 82,66 Q120,40 160,64 Q194,90 178,150 Q186,184 168,206 Q164,176 158,160 L82,160 Q76,180 72,206 Q54,184 64,148 Z" fill="${C.hair}" ${s(3)}/>
    <path d="M110,50 Q114,38 128,40 Q136,46 130,58 Z" fill="${C.red}" ${s(2.4)}/>
    <!-- 얼굴 -->
    <path d="M70,128 Q70,186 120,192 Q170,186 170,128 Q170,88 120,86 Q70,88 70,128 Z" fill="${C.skin}" ${s(3)}/>
    <!-- 앞머리: 삐죽한 가닥이 이마를 덮고 옆머리가 길게 -->
    <path d="M66,130 Q60,72 120,62 Q182,72 174,130 L166,104 L160,126 L150,98 L140,122 L128,94 L120,118 L108,94 L100,122 L90,98 L82,126 L74,106 Z" fill="${C.hair}" ${s(3)}/>
    <path d="M68,110 Q62,156 70,198 Q78,170 82,134 Z" fill="${C.hair}" ${s(2.6)}/>
    <path d="M172,110 Q178,156 170,198 Q162,170 158,134 Z" fill="${C.hair}" ${s(2.6)}/>
    <path d="M92,72 Q120,62 146,72" fill="none" stroke="${C.hairHi}" stroke-width="5" stroke-linecap="round"/>
    <!-- 머리띠 -->
    <path d="M68,100 Q120,84 172,100 L172,114 Q120,98 68,114 Z" fill="${C.red}" ${s(2.6)}/>
    <!-- 표정 -->
    ${brows(expr)}
    ${eye(98, 142, expr, false)}${eye(142, 142, expr, true)}
    ${mouth(120, 172, expr)}
    <ellipse cx="84" cy="164" rx="9" ry="5" fill="${C.blush}" opacity=".45"/><ellipse cx="156" cy="164" rx="9" ry="5" fill="${C.blush}" opacity=".45"/>
    ${expr === 'hurt' ? sweat(166, 112) : ''}`;
  }

  // ---------- 측면 (오른쪽을 봄, 왼쪽은 뒤집어 씀) ----------
  function side() {
    return `<ellipse cx="120" cy="404" rx="48" ry="8" fill="#000" opacity=".2"/>
    ${ribbons(80, 104, -1)}
    <!-- 장화 (앞뒤로 벌림) -->
    <path d="M88,356 L110,356 L112,394 Q112,402 104,402 L86,402 Q78,402 82,394 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M128,356 L150,356 L156,388 L168,394 Q174,402 164,402 L132,402 Q126,402 126,394 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M80,398 L112,398 M126,398 L170,398" stroke="${C.brown}" stroke-width="4"/>
    <!-- 바지 -->
    <path d="M92,300 Q78,336 88,360 L112,360 Q116,330 118,306 Z" fill="${C.whiteS}" ${s(2.8)}/>
    <path d="M118,300 Q132,330 128,360 L152,360 Q156,330 140,300 Z" fill="${C.white}" ${s(2.8)}/>
    <!-- 도포 자락: 뒤로 퍼짐 -->
    <path d="M94,262 Q70,300 62,338 Q92,346 118,336 Q122,300 120,266 Z" fill="${C.whiteS}" ${s(2.8)}/>
    <path d="M118,262 Q134,300 150,334 Q132,342 116,338 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M62,338 Q92,346 118,336 L118,328 Q92,338 65,330 Z" fill="${C.navy}" ${s(2.2)}/>
    <!-- 칼: 허리에서 뒤로 길게 -->
    <g transform="rotate(14 120 262)"><rect x="22" y="252" width="104" height="13" rx="6" fill="${C.black}" ${s(2.6)}/><rect x="124" y="249" width="9" height="19" rx="2" fill="${C.gold}" ${s(2)}/><rect x="132" y="253" width="34" height="11" rx="4" fill="${C.black}" ${s(2.2)}/></g>
    <!-- 몸통 -->
    <path d="M96,196 Q88,232 94,266 L146,266 Q152,232 144,196 Q120,188 96,196 Z" fill="${C.white}" ${s(3)}/>
    <path d="M132,194 L144,230 L136,232 L126,196 Z" fill="${C.navy}" ${s(2)}/>
    <path d="M92,242 Q120,250 148,242 L148,268 Q120,276 92,268 Z" fill="${C.navy}" ${s(2.8)}/>
    <path d="M92,252 Q120,260 148,252 L148,258 Q120,266 92,258 Z" fill="${C.brown}"/>
    <path d="M104,264 L102,292" stroke="${C.gold}" stroke-width="2.4"/><path d="M98,292 L106,292 L108,312 L96,312 Z" fill="${C.red}" ${s(2)}/>
    <!-- 팔: 앞으로 칼자루를 잡음 -->
    <path d="M110,200 Q96,226 110,252 Q126,262 140,252 Q132,232 128,210 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M116,246 L144,246 L150,270 L126,274 Z" fill="${C.black}" ${s(2.4)}/>
    <circle cx="150" cy="268" r="9" fill="${C.skin}" ${s(2.4)}/>
    <!-- 말총 + 뒷머리 -->
    <path d="M120,44 Q100,20 70,22 Q84,28 82,34 Q60,30 46,48 Q66,46 72,52 Q52,62 48,82 Q70,66 90,62 Q100,46 120,44 Z" fill="${C.hair}" ${s(2.8)}/>
    <path d="M60,150 Q44,92 80,64 Q120,42 160,64 Q186,88 176,130 L156,160 Q150,178 140,196 L100,196 Q72,190 60,150 Z" fill="${C.hair}" ${s(3)}/>
    <path d="M104,38 Q112,30 122,36 Q124,48 112,50 Z" fill="${C.red}" ${s(2.4)}/>
    <!-- 옆얼굴: 앞(오른쪽)으로 볼과 작은 코 -->
    <path d="M104,96 Q160,84 178,118 Q186,136 180,142 Q186,148 178,150 Q176,178 150,188 Q118,196 104,180 Z" fill="${C.skin}" ${s(3)}/>
    <!-- 귀 -->
    <ellipse cx="116" cy="142" rx="9" ry="12" fill="${C.skin}" ${s(2.4)}/>
    <!-- 앞머리: 이마 쪽으로 삐죽 -->
    <path d="M96,124 Q92,66 146,66 Q186,74 180,112 L170,100 L166,120 L156,96 L148,118 L138,96 L130,116 L118,98 L112,130 Z" fill="${C.hair}" ${s(3)}/>
    <path d="M100,108 Q92,150 104,190 Q110,160 112,128 Z" fill="${C.hair}" ${s(2.6)}/>
    <path d="M112,72 Q140,64 164,74" fill="none" stroke="${C.hairHi}" stroke-width="5" stroke-linecap="round"/>
    <!-- 머리띠 (옆으로 감기고 뒤에서 매듭) -->
    <path d="M86,104 Q130,88 180,100 L180,114 Q130,102 86,118 Z" fill="${C.red}" ${s(2.6)}/>
    <circle cx="84" cy="112" r="7" fill="${C.redS}" ${s(2.2)}/>
    <!-- 눈 하나 (앞쪽), 눈썹, 입 -->
    ${eye(158, 140, 'calm', false)}
    <path d="M146,116 Q156,111 168,115" fill="none" ${s(3.2)}/>
    <path d="M164,170 Q170,174 176,170" fill="none" ${s(2.6)}/>
    <ellipse cx="150" cy="162" rx="9" ry="5" fill="${C.blush}" opacity=".45"/>`;
  }

  // ---------- 뒷면 ----------
  function back() {
    return `<ellipse cx="120" cy="404" rx="52" ry="8" fill="#000" opacity=".2"/>
    <!-- 장화 -->
    <path d="M78,356 L102,356 L104,394 Q104,402 96,402 L72,402 Q66,402 70,394 L78,384 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M138,356 L162,356 L170,384 L174,394 Q178,402 170,402 L146,402 Q138,402 138,394 Z" fill="${C.black}" ${s(2.8)}/>
    <path d="M70,398 L104,398 M138,398 L172,398" stroke="${C.brown}" stroke-width="4"/>
    <path d="M88,300 Q66,336 78,360 L104,360 Q110,336 116,312 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M152,300 Q174,336 162,360 L136,360 Q130,336 124,312 Z" fill="${C.white}" ${s(2.8)}/>
    <!-- 도포 뒷자락: 한 장으로 넓게 + 가운데 트임 -->
    <path d="M86,262 Q64,300 56,338 Q120,352 184,338 Q176,300 154,262 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M120,290 L120,346" ${s(2.4)}/>
    <path d="M56,338 Q120,352 184,338 L182,328 Q120,342 59,328 Z" fill="${C.navy}" ${s(2.2)}/>
    <!-- 칼 손잡이 (몸 왼쪽 뒤로 살짝 보임) -->
    <g transform="rotate(24 120 300)"><rect x="140" y="290" width="70" height="13" rx="6" fill="${C.black}" ${s(2.6)}/></g>
    <!-- 등 -->
    <path d="M88,196 Q80,232 86,266 L154,266 Q160,232 152,196 Q120,186 88,196 Z" fill="${C.white}" ${s(3)}/>
    <path d="M100,196 Q120,204 140,196 L140,206 Q120,214 100,206 Z" fill="${C.navy}" ${s(2)}/>
    <!-- 허리띠 + 뒤 매듭 -->
    <path d="M84,242 Q120,250 156,242 L156,268 Q120,276 84,268 Z" fill="${C.navy}" ${s(2.8)}/>
    <path d="M110,256 L96,290 L108,292 L120,262 Z M130,256 L144,290 L132,292 L120,262 Z" fill="${C.navy}" ${s(2.2)}/>
    <!-- 팔 -->
    <path d="M90,200 Q62,214 60,248 Q64,262 82,260 Q86,236 98,222 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M150,200 Q178,214 180,248 Q176,262 158,260 Q154,236 142,222 Z" fill="${C.white}" ${s(2.8)}/>
    <path d="M60,246 Q64,262 82,260 L84,252 Q68,254 64,240 Z M180,246 Q176,262 158,260 L156,252 Q172,254 176,240 Z" fill="${C.navy}" ${s(2)}/>
    <path d="M66,256 L84,256 L84,280 L68,280 Z M174,256 L156,256 L156,280 L172,280 Z" fill="${C.black}" ${s(2.4)}/>
    <!-- 머리: 뒷머리가 다 덮음 + 말총 + 머리띠 매듭과 리본 -->
    <path d="M60,150 Q44,86 84,62 Q120,44 156,62 Q196,86 180,150 Q184,190 164,214 Q150,196 140,200 Q130,214 120,206 Q110,214 100,200 Q90,196 76,214 Q56,190 60,150 Z" fill="${C.hair}" ${s(3)}/>
    <path d="M86,90 Q120,70 154,90" fill="none" stroke="${C.hairHi}" stroke-width="5" stroke-linecap="round"/>
    <path d="M120,52 Q92,46 78,22 Q96,30 102,26 Q94,8 108,0 Q110,16 118,18 Q120,0 136,-4 Q132,14 138,20 Q150,4 166,8 Q152,18 154,28 Q172,24 182,36 Q164,38 156,48 Q140,40 120,52 Z" fill="${C.hair}" ${s(2.8)}/><path d="M112,30 Q120,22 132,26" fill="none" stroke="${C.hairHi}" stroke-width="4" stroke-linecap="round"/>
    <path d="M110,50 Q114,38 128,40 Q136,46 130,58 Z" fill="${C.red}" ${s(2.4)}/>
    <path d="M62,116 Q120,132 178,116 L178,104 Q120,120 62,104 Z" fill="${C.red}" ${s(2.6)}/>
    <circle cx="120" cy="122" r="8" fill="${C.redS}" ${s(2.2)}/>
    <path d="M116,126 Q96,170 104,230 Q112,190 122,132 Z" fill="${C.red}" ${s(2.4)}/>
    <path d="M124,126 Q148,170 140,234 Q132,190 120,132 Z" fill="${C.redS}" ${s(2.4)}/>`;
  }

  window.SWORD2D = { front, side, back, EXPRS: [['calm', '기본'], ['smile', '웃음'], ['fight', '기합'], ['surprise', '놀람'], ['hurt', '아픔']] };
  window.svg2d = (inner, h, vb = '0 -12 240 432', flip = false) => `<svg viewBox="${vb}" height="${h}" width="${Math.round(h * +vb.split(' ')[2] / +vb.split(' ')[3])}" style="overflow:hidden${flip ? ';transform:scaleX(-1)' : ''}">${inner}</svg>`;
})();
