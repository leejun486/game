// 검객 이랑 디자인 시안 세 가지 (손으로 그린 벡터). draw(id, expr) → SVG 문자열 (viewBox 0 0 240 420, 바닥 y=400)
// expr: 'calm' 기본 · 'fight' 기합 · 'hurt' 아픔
(function () {
  const L = '#2a1e2e'; // 선 색
  const sw = (w) => `stroke="${L}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

  // ---------- 공통 얼굴 부품 ----------
  function animeEye(cx, cy, rx, ry, iris, flip, expr, sharp) {
    if (expr === 'hurt') {
      // >_< 질끈 감은 눈
      const d = flip ? -1 : 1;
      return `<path d="M${cx - rx * d},${cy - ry * 0.5} L${cx + rx * 0.8 * d},${cy} L${cx - rx * d},${cy + ry * 0.45}" fill="none" ${sw(3.2)}/>`;
    }
    const lid = expr === 'fight' ? ry * 0.45 : 0; // 기합: 위 눈꺼풀이 내려와 날카롭게
    const top = cy - ry + lid;
    const clip = `e${Math.round(cx)}${Math.round(cy)}${expr}`;
    const tilt = expr === 'fight' ? (flip ? -1 : 1) * ry * 0.25 : 0;
    const lidPath = sharp
      ? `M${cx - rx * 1.25},${cy - ry * 0.2 + lid * 0.6 + tilt} Q${cx},${top - ry * 0.35} ${cx + rx * 1.25},${cy - ry * 0.35 + lid * 0.6 - tilt}`
      : `M${cx - rx * 1.15},${top + ry * 0.35 + tilt} Q${cx},${top - ry * 0.3} ${cx + rx * 1.15},${top + ry * 0.35 - tilt}`;
    return `<defs><clipPath id="${clip}"><path d="M${cx - rx * 1.3},${top + ry * 0.2 + tilt} Q${cx},${top - ry * 0.4} ${cx + rx * 1.3},${top + ry * 0.2 - tilt} L${cx + rx * 1.3},${cy + ry * 1.2} L${cx - rx * 1.3},${cy + ry * 1.2} Z"/></clipPath></defs>
      <g clip-path="url(#${clip})">
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fffaf4" ${sw(2)}/>
        <ellipse cx="${cx}" cy="${cy + ry * 0.08}" rx="${rx * 0.78}" ry="${ry * 0.86}" fill="${iris[0]}"/>
        <ellipse cx="${cx}" cy="${cy + ry * 0.35}" rx="${rx * 0.62}" ry="${ry * 0.48}" fill="${iris[1]}"/>
        <ellipse cx="${cx}" cy="${cy + ry * 0.05}" rx="${rx * 0.36}" ry="${ry * 0.42}" fill="#120c18"/>
        <ellipse cx="${cx - rx * 0.3}" cy="${cy - ry * 0.3}" rx="${rx * 0.28}" ry="${ry * 0.24}" fill="#fff"/>
        <circle cx="${cx + rx * 0.32}" cy="${cy + ry * 0.42}" r="${rx * 0.13}" fill="#fff"/>
      </g>
      <path d="${lidPath}" fill="none" stroke="${L}" stroke-width="${sharp ? 4.2 : 3.6}" stroke-linecap="round"/>`;
  }
  function brows(xl, xr, y, w, expr, thick) {
    const k = expr === 'fight' ? 7 : expr === 'hurt' ? -6 : 0;
    const t = thick || 3;
    return `<path d="M${xl - w},${y - 1 + (expr === 'hurt' ? 4 : 0)} Q${xl},${y - 5} ${xl + w},${y + k * 0.6}" fill="none" ${sw(t)}/>
      <path d="M${xr + w},${y - 1 + (expr === 'hurt' ? 4 : 0)} Q${xr},${y - 5} ${xr - w},${y + k * 0.6}" fill="none" ${sw(t)}/>`;
  }
  function mouth(x, y, s, expr) {
    if (expr === 'fight') return `<path d="M${x - 9 * s},${y - 2 * s} Q${x},${y - 5 * s} ${x + 9 * s},${y - 2 * s} Q${x + 6 * s},${y + 9 * s} ${x},${y + 10 * s} Q${x - 6 * s},${y + 9 * s} ${x - 9 * s},${y - 2 * s} Z" fill="#7a2030" ${sw(2.4)}/><path d="M${x - 6 * s},${y + 6 * s} Q${x},${y + 2 * s} ${x + 6 * s},${y + 6 * s}" fill="#ff8a8a"/>`;
    if (expr === 'hurt') return `<path d="M${x - 8 * s},${y + 2 * s} q${4 * s},${-4 * s} ${8 * s},0 q${4 * s},${4 * s} ${8 * s},0" fill="none" ${sw(2.6)}/>`;
    return `<path d="M${x - 5 * s},${y} Q${x},${y + 4 * s} ${x + 5 * s},${y}" fill="none" ${sw(2.4)}/>`;
  }
  const blush = (x1, x2, y, r) => `<ellipse cx="${x1}" cy="${y}" rx="${r}" ry="${r * 0.55}" fill="#ff8a9a" opacity=".45"/><ellipse cx="${x2}" cy="${y}" rx="${r}" ry="${r * 0.55}" fill="#ff8a9a" opacity=".45"/>`;
  const sweat = (x, y) => `<path d="M${x},${y} q6,10 0,14 q-6,-4 0,-14 Z" fill="#bfe8ff" ${sw(1.8)}/>`;
  const shadowFloor = (rx) => `<ellipse cx="120" cy="402" rx="${rx}" ry="8" fill="#000" opacity=".18"/>`;

  // ---------- A: SD 꼬마 무사 (2.5등신) ----------
  function A(expr) {
    const skin = '#fde3cc', skinS = '#f2c4a8', hair = '#2c2440', hairS = '#3e3558', robe = '#f7f3ea', robeS = '#dcd6e6', blue = '#3a62b8', red = '#d8343a';
    return `${shadowFloor(54)}
    <!-- 칼: 등에 비스듬히 큰 칼 -->
    <g transform="rotate(-38 120 300)"><rect x="40" y="292" width="170" height="13" rx="6" fill="#2a2430" ${sw(2.5)}/><rect x="196" y="288" width="12" height="21" rx="3" fill="#e8b440" ${sw(2.2)}/><rect x="206" y="292" width="36" height="13" rx="5" fill="#f0ece4" ${sw(2.2)}/><path d="M212,292 l6,13 M222,292 l6,13 M232,292 l6,13" stroke="#2a2430" stroke-width="2.5"/></g>
    <!-- 발 -->
    <ellipse cx="102" cy="392" rx="16" ry="9" fill="#3a3550" ${sw(2.5)}/><ellipse cx="140" cy="392" rx="16" ry="9" fill="#3a3550" ${sw(2.5)}/>
    <!-- 도포 몸통 (사다리꼴, 아래가 넓게 퍼짐) -->
    <path d="M92,250 Q84,320 66,374 Q120,388 174,374 Q156,320 148,250 Z" fill="${robe}" ${sw(3)}/>
    <path d="M120,256 Q150,320 168,370 Q156,380 140,382 Q132,320 120,256 Z" fill="${robeS}"/>
    <path d="M67,370 Q120,386 173,370 L171,378 Q120,394 69,378 Z" fill="${blue}" ${sw(2.4)}/>
    <!-- 깃 (V자로 여민 파란 동정) -->
    <path d="M100,250 L120,292 L140,250" fill="none" stroke="${blue}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M100,250 L120,292 L140,250" fill="none" ${sw(2)} opacity=".5"/>
    <!-- 띠: 붉은 매듭 -->
    <rect x="86" y="300" width="68" height="14" rx="6" fill="${blue}" ${sw(2.4)}/>
    <path d="M128,307 l14,22 l-8,2 Z M128,307 l-4,24 l-7,-3 Z" fill="${red}" ${sw(2)}/>
    <!-- 큰 소매 (둥글게 늘어짐) -->
    <path d="M92,256 Q60,262 58,300 Q58,330 84,330 Q96,312 98,290 Z" fill="${robe}" ${sw(3)}/>
    <path d="M60,318 Q66,334 86,330 L88,322 Q70,326 62,312 Z" fill="${blue}" ${sw(2)}/>
    <path d="M148,256 Q180,262 182,300 Q182,330 156,330 Q144,312 142,290 Z" fill="${robe}" ${sw(3)}/>
    <path d="M180,318 Q174,334 154,330 L152,322 Q170,326 178,312 Z" fill="${blue}" ${sw(2)}/>
    <circle cx="76" cy="336" r="9" fill="${skin}" ${sw(2.4)}/><circle cx="164" cy="336" r="9" fill="${skin}" ${sw(2.4)}/>
    <!-- 머리 뒤쪽 -->
    <ellipse cx="120" cy="150" rx="74" ry="70" fill="${hair}" ${sw(3)}/>
    <!-- 머리띠 꼬리 (나부낌) -->
    <path d="M178,128 Q214,124 226,150 Q212,146 196,150 Q214,160 218,182 Q198,166 176,150 Z" fill="${red}" ${sw(2.6)}/>
    <!-- 얼굴 (아래가 넓고 둥근 떡 모양) -->
    <path d="M60,150 Q60,222 120,224 Q180,222 180,150 Q180,110 120,108 Q60,110 60,150 Z" fill="${skin}" ${sw(3)}/>
    <!-- 앞머리: 둥근 뭉텅이 다섯 -->
    <path d="M54,156 Q52,98 120,84 Q188,98 186,156 Q178,132 166,124 Q164,146 150,150 Q148,126 134,120 Q128,142 116,146 Q112,124 100,122 Q94,144 80,146 Q80,128 72,128 Q62,138 54,156 Z" fill="${hair}" ${sw(3)}/>
    <path d="M86,104 Q110,94 132,98" fill="none" stroke="${hairS}" stroke-width="6" stroke-linecap="round"/>
    <!-- 머리띠 -->
    <path d="M58,126 Q120,104 182,126 L182,138 Q120,116 58,138 Z" fill="${red}" ${sw(2.6)}/>
    <!-- 상투 + 동곳 -->
    <circle cx="120" cy="72" r="20" fill="${hair}" ${sw(3)}/><path d="M98,66 L142,62" stroke="#e8b440" stroke-width="5" stroke-linecap="round"/><path d="M98,66 L142,62" ${sw(1.5)} fill="none" opacity=".6"/>
    <!-- 얼굴 -->
    ${animeEye(94, 168, 13, 18, ['#5a4a9a', '#8a7ad8'], false, expr, false)}
    ${animeEye(146, 168, 13, 18, ['#5a4a9a', '#8a7ad8'], true, expr, false)}
    ${brows(94, 146, 142, 10, expr, 3)}
    ${mouth(120, 200, 1, expr)}
    ${blush(78, 162, 192, 10)}
    ${expr === 'hurt' ? sweat(174, 132) : ''}`;
  }

  // ---------- B: 소년 만화 주인공 (4등신) ----------
  function B(expr) {
    const skin = '#f8d9bd', skinS = '#e8b896', hair = '#1e1a2c', hairS = '#3a3456', jeo = '#f6f2ea', vest = '#2e4f8f', vestS = '#24407a', pants = '#c8ccd8', pantsS = '#a8acc0', red = '#d8343a';
    return `${shadowFloor(46)}
    <!-- 뒤로 나부끼는 머리띠 꼬리 -->
    <path d="M90,74 Q40,70 18,96 Q36,92 50,96 Q28,110 24,136 Q48,110 86,92 Z" fill="${red}" ${sw(2.6)}/>
    <!-- 다리: 통 넓은 바지 + 행전 + 짚신 -->
    <path d="M92,262 Q80,320 86,352 L114,352 L118,290 L122,290 L126,352 L154,352 Q160,320 148,262 Z" fill="${pants}" ${sw(3)}/>
    <path d="M128,300 L126,352 L154,352 Q158,322 150,280 Z" fill="${pantsS}"/>
    <rect x="88" y="350" width="26" height="30" rx="6" fill="#f2eee6" ${sw(2.5)}/><rect x="126" y="350" width="26" height="30" rx="6" fill="#f2eee6" ${sw(2.5)}/>
    <path d="M90,358 L112,364 M90,368 L112,374 M128,358 L150,364 M128,368 L150,374" stroke="#9aa0b8" stroke-width="2"/>
    <path d="M82,392 Q100,378 118,390 L118,398 L82,398 Z" fill="#b8915a" ${sw(2.5)}/><path d="M122,390 Q140,378 158,392 L158,398 L122,398 Z" fill="#b8915a" ${sw(2.5)}/>
    <!-- 저고리 몸통 -->
    <path d="M90,148 Q82,200 88,266 L152,266 Q158,200 150,148 Q120,136 90,148 Z" fill="${jeo}" ${sw(3)}/>
    <!-- 쾌자(소매 없는 겉옷): 앞이 트임 -->
    <path d="M90,150 Q80,210 86,292 L108,292 Q104,220 112,156 Z" fill="${vest}" ${sw(3)}/>
    <path d="M150,150 Q160,210 154,292 L132,292 Q136,220 128,156 Z" fill="${vest}" ${sw(3)}/>
    <path d="M150,150 Q160,210 154,292 L144,292 Q150,220 142,154 Z" fill="${vestS}"/>
    <!-- 붉은 허리띠 + 매듭 꼬리 -->
    <path d="M86,250 Q120,258 154,250 L154,266 Q120,274 86,266 Z" fill="${red}" ${sw(2.6)}/>
    <path d="M100,262 l-6,34 l8,0 l4,-30 Z" fill="${red}" ${sw(2.2)}/>
    <!-- 칼: 왼쪽 허리에 차고 오른손이 칼자루에 -->
    <g transform="rotate(16 120 262)"><rect x="40" y="258" width="104" height="11" rx="5" fill="#2a2430" ${sw(2.5)}/><rect x="142" y="254" width="9" height="19" rx="2" fill="#e8b440" ${sw(2)}/><rect x="150" y="258" width="40" height="11" rx="4" fill="#f0ece4" ${sw(2.2)}/><path d="M158,258 l5,11 M168,258 l5,11 M178,258 l5,11" stroke="#2a2430" stroke-width="2.2"/></g>
    <!-- 팔: 왼팔 내림, 오른팔 칼자루 -->
    <path d="M92,154 Q72,190 74,236 L90,238 Q92,200 104,166 Z" fill="${jeo}" ${sw(3)}/>
    <circle cx="82" cy="244" r="9" fill="${skin}" ${sw(2.4)}/>
    <path d="M148,154 Q172,186 170,226 Q166,250 172,270 L158,276 Q150,248 152,226 Q150,196 136,170 Z" fill="${jeo}" ${sw(3)}/>
    <circle cx="168" cy="276" r="9" fill="${skin}" ${sw(2.4)}/>
    <!-- 목 -->
    <path d="M110,130 L110,150 L130,150 L130,130 Z" fill="${skinS}" ${sw(2.5)}/>
    <!-- 깃 -->
    <path d="M108,146 L120,176 L132,146" fill="none" stroke="#f6f2ea" stroke-width="9" stroke-linejoin="round"/><path d="M108,146 L120,176 L132,146" fill="none" ${sw(2.2)}/>
    <!-- 뒷머리 (삐죽) -->
    <path d="M76,92 L62,70 L84,74 L80,46 L102,62 L110,30 L124,56 L144,32 L146,62 L170,52 L160,78 L182,84 L162,98 Z" fill="${hair}" ${sw(3)}/>
    <!-- 얼굴: 각진 턱 -->
    <path d="M82,82 Q82,118 96,130 Q110,142 120,142 Q130,142 144,130 Q158,118 158,82 Q120,64 82,82 Z" fill="${skin}" ${sw(3)}/>
    <!-- 앞머리: 날카로운 가닥 -->
    <path d="M76,96 Q74,50 120,44 Q170,48 166,96 L156,74 L150,96 L140,68 L132,94 L120,66 L112,92 L100,66 L96,96 L86,74 Z" fill="${hair}" ${sw(3)}/>
    <path d="M100,54 Q120,48 140,54" fill="none" stroke="${hairS}" stroke-width="5" stroke-linecap="round"/>
    <!-- 머리띠 -->
    <path d="M78,78 Q120,64 162,78 L162,88 Q120,74 78,88 Z" fill="${red}" ${sw(2.4)}/>
    <!-- 얼굴 -->
    ${animeEye(102, 106, 9.5, 11, ['#6a3a28', '#c8783a'], false, expr, true)}
    ${animeEye(138, 106, 9.5, 11, ['#6a3a28', '#c8783a'], true, expr, true)}
    ${brows(102, 138, 92, 10, expr, 4)}
    ${mouth(120, 128, 0.8, expr)}
    ${expr === 'hurt' ? sweat(160, 86) : ''}
    <path d="M118,116 l2,5 l-3,0" fill="none" ${sw(1.6)} opacity=".6"/>`;
  }

  // ---------- C: 수묵풍 미소년 검객 (5등신) ----------
  function C(expr) {
    const skin = '#fbe6d4', skinS = '#eac4ac', hair = '#141220', hairS = '#2e2a44', coat = '#f4f2f8', coatS = '#d4d2e4', ind = '#2a3a78', silver = '#c8d0e0', red = '#c8303a';
    return `${shadowFloor(42)}
    <!-- 긴 말총머리: 등 뒤로 흘러내림 -->
    <path d="M124,30 Q186,40 180,120 Q176,200 196,262 Q168,240 160,180 Q156,120 140,70 Z" fill="${hair}" ${sw(3)}/>
    <path d="M150,70 Q172,120 168,190" fill="none" stroke="${hairS}" stroke-width="5" stroke-linecap="round"/>
    <!-- 도포: 길게 내려와 끝이 퍼짐 -->
    <path d="M98,128 Q80,250 64,386 Q120,398 176,386 Q160,250 142,128 Q120,120 98,128 Z" fill="${coat}" ${sw(3)}/>
    <path d="M124,132 Q148,260 170,384 Q160,390 146,392 Q132,260 124,132 Z" fill="${coatS}"/>
    <path d="M66,374 Q120,388 174,374 L176,386 Q120,400 64,386 Z" fill="${ind}" ${sw(2.4)}/>
    <!-- 넓은 남색 깃이 비스듬히 -->
    <path d="M100,130 L150,250 L138,254 L104,150 Z" fill="${ind}" ${sw(2.4)}/>
    <path d="M140,130 L118,186 L112,176 L132,128 Z" fill="${ind}" ${sw(2.2)}/>
    <!-- 세조대(가는 띠) + 술 -->
    <path d="M90,220 Q120,230 150,220 L150,230 Q120,240 90,230 Z" fill="${ind}" ${sw(2.2)}/>
    <path d="M108,232 L104,290 M112,232 L114,296" stroke="${red}" stroke-width="3" stroke-linecap="round"/><circle cx="104" cy="292" r="4" fill="${red}" ${sw(1.5)}/><circle cx="114" cy="298" r="4" fill="${red}" ${sw(1.5)}/>
    <!-- 넓은 소매가 아래로 늘어짐 -->
    <path d="M100,136 Q66,170 62,236 Q58,262 80,266 Q92,230 104,196 Z" fill="${coat}" ${sw(3)}/>
    <path d="M140,136 Q176,170 178,226 Q182,256 160,260 Q148,226 136,196 Z" fill="${coat}" ${sw(3)}/>
    <path d="M178,226 Q182,256 160,260 L162,248 Q174,246 174,228 Z" fill="${coatS}"/>
    <!-- 칼: 칼집째 왼손에 세워 듦 (은빛) -->
    <rect x="166" y="150" width="9" height="200" rx="4" fill="${silver}" ${sw(2.4)}/><rect x="162" y="236" width="17" height="7" rx="2" fill="${ind}" ${sw(2)}/><rect x="167" y="120" width="7" height="32" rx="3" fill="${ind}" ${sw(2)}/>
    <circle cx="170" cy="256" r="8" fill="${skin}" ${sw(2.2)}/>
    <circle cx="72" cy="268" r="8" fill="${skin}" ${sw(2.2)}/>
    <!-- 목 -->
    <path d="M112,104 L112,128 L128,128 L128,104 Z" fill="${skinS}" ${sw(2.4)}/>
    <!-- 얼굴: 갸름한 V자 -->
    <path d="M90,66 Q90,96 104,110 Q114,120 120,120 Q126,120 136,110 Q150,96 150,66 Q120,52 90,66 Z" fill="${skin}" ${sw(3)}/>
    <!-- 앞머리: 길게 얼굴을 감싸는 옆머리 -->
    <path d="M84,96 Q76,34 120,28 Q166,32 158,96 Q156,70 146,58 Q140,74 128,78 Q130,62 122,54 Q114,72 100,76 Q102,62 98,58 Q88,70 84,96 Z" fill="${hair}" ${sw(3)}/>
    <path d="M86,72 Q80,110 88,150 Q94,120 96,82 Z" fill="${hair}" ${sw(2.6)}/>
    <path d="M154,72 Q160,110 152,146 Q146,118 144,82 Z" fill="${hair}" ${sw(2.6)}/>
    <!-- 묶은 자리: 붉은 끈 -->
    <path d="M128,30 Q140,26 148,34" fill="none" stroke="${red}" stroke-width="6" stroke-linecap="round"/>
    <path d="M104,40 Q120,34 136,40" fill="none" stroke="${hairS}" stroke-width="4" stroke-linecap="round"/>
    <!-- 얼굴: 아몬드 눈, 긴 속눈썹 -->
    ${animeEye(106, 88, 8, 8.5, ['#1e2a5a', '#4a6ab8'], false, expr, true)}
    ${animeEye(134, 88, 8, 8.5, ['#1e2a5a', '#4a6ab8'], true, expr, true)}
    ${brows(106, 134, 76, 8, expr, 2.4)}
    ${mouth(120, 108, 0.6, expr)}
    ${expr === 'hurt' ? sweat(148, 64) : ''}`;
  }

  window.DESIGNS = {
    A: { draw: A, name: 'SD 꼬마 무사', heads: '2등신', pal: ['#f7f3ea', '#3a62b8', '#d8343a', '#2c2440', '#fde3cc'] },
    B: { draw: B, name: '소년 만화 주인공', heads: '3.5등신', pal: ['#f6f2ea', '#2e4f8f', '#d8343a', '#c8ccd8', '#1e1a2c'] },
    C: { draw: C, name: '수묵풍 미소년 검객', heads: '4등신', pal: ['#f4f2f8', '#2a3a78', '#c8d0e0', '#c8303a', '#141220'] },
  };
  window.FACEBOX = { A: '30 40 190 200', B: '58 22 124 136', C: '72 12 96 116' };
  window.HEAD = { A: [52, 224], B: [30, 142], C: [26, 120] };
  window.drawDesign = (id, expr, h, vb) => `<svg viewBox="${vb || '0 0 240 420'}" width="${vb ? h : Math.round(h * 240 / 420)}" height="${h}" role="img" aria-label="${DESIGNS[id].name}">${DESIGNS[id].draw(expr)}</svg>`;
})();
