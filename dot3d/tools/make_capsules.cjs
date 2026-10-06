// 스토어 캡슐: 키 아트(marketing/keyart/*.jpg) 위에 로고를 얹어 규격별로 저장. node tools/make_capsules.cjs
// 로고 글꼴: Noto Serif KR 900에서 '월하궁' 세 글자만 뽑은 것 (marketing/fonts, SIL OFL)
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const D = '/home/user/game/dot3d/marketing/';
const K = D + 'keyart/';
const img = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(K + f).toString('base64');
const fontSerif = 'data:font/woff2;base64,' + fs.readFileSync(D + 'fonts/logo-serif.woff2').toString('base64');
const fontKo = 'data:font/ttf;base64,' + fs.readFileSync('/home/user/game/dot3d/fonts/' + fs.readdirSync('/home/user/game/dot3d/fonts').find((f) => /\.(ttf|woff2?)$/.test(f))).toString('base64');
const CAPS = [
  // [이름, 너비, 높이, 키 아트, 배경 위치, 로고 자리, 로고 크기(높이 대비)]
  ['header_920x430', 920, 430, 'land.jpg', '50% 52%', 'left', 0.23],
  ['small_462x174', 462, 174, 'land.jpg', '50% 52%', 'left', 0.34],
  ['main_1232x706', 1232, 706, 'land.jpg', '50% 50%', 'left', 0.17],
  ['vertical_748x896', 748, 896, 'portrait.jpg', '50% 30%', 'bottom', 0.15],
  ['library_600x900', 600, 900, 'portrait.jpg', '50% 30%', 'bottom', 0.13],
  ['library_hero_3840x1240', 3840, 1240, 'wide.jpg', '50% 50%', 'none', 0],
  ['library_logo_1280x720', 1280, 720, null, '', 'logo', 0.36],
  ['itch_cover_630x500', 630, 500, 'land.jpg', '66% 40%', 'bottom', 0.15],
];
(async () => {
  const b = await chromium.launch();
  for (const [name, W, H, bg, pos, mode, k] of CAPS) {
    const p = await b.newPage({ viewport: { width: W, height: H } });
    const big = H * k;
    const shade = {
      left: 'linear-gradient(90deg, rgba(8,6,18,0.86) 0%, rgba(8,6,18,0.6) 30%, rgba(8,6,18,0) 55%)',
      bottom: 'linear-gradient(0deg, rgba(8,6,18,0.92) 0%, rgba(8,6,18,0.65) 22%, rgba(8,6,18,0) 42%)',
    }[mode] || 'none';
    const wrap = { left: `align-items:flex-start;justify-content:center;padding-left:${W * 0.05}px`, bottom: `align-items:center;justify-content:flex-end;padding-bottom:${H * 0.05}px`, logo: 'align-items:center;justify-content:center' }[mode] || '';
    const logo = mode === 'none' ? '' : `<div class="logo"><div class="han">월하궁</div><div class="sub">도깨비 야행</div>${W >= 600 ? '<div class="en">WOLHAGUNG · NIGHT PARADE OF THE DOKKAEBI</div>' : ''}</div>`;
    await p.setContent(`<!doctype html><html><head><style>
      @font-face { font-family: G; src: url(${fontKo}); }
      @font-face { font-family: LogoSerif; font-weight: 900; src: url(${fontSerif}) format('woff2'); }
      html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;background:${mode === 'logo' ? 'transparent' : '#0b0914'}}
      .bg{position:absolute;inset:0;background:url(${bg ? img(bg) : ''}) ${pos}/cover no-repeat;}
      .shade{position:absolute;inset:0;background:${shade}}
      .wrap{position:absolute;inset:0;display:flex;flex-direction:column;${wrap};box-sizing:border-box}
      .logo{text-align:${mode === 'left' ? 'left' : 'center'};line-height:1}
      .han{font-family:LogoSerif,serif;font-weight:900;-webkit-text-stroke:${Math.max(2, big * 0.03)}px #15121c;paint-order:stroke fill;font-size:${big}px;color:#fff3dc;letter-spacing:${big * 0.06}px;text-shadow:0 0 ${big * 0.25}px rgba(255,200,110,0.6), ${big * 0.03}px ${big * 0.04}px 0 #000, 0 0 2px #000}
      .sub{font-family:G,sans-serif;font-size:${big * 0.27}px;color:#ffd76a;letter-spacing:${big * 0.08}px;margin-top:${big * 0.12}px;text-shadow:2px 2px 0 #000}
      .en{font-family:G,sans-serif;font-size:${Math.max(10, big * 0.1)}px;color:#e8dcc0;letter-spacing:${big * 0.02}px;margin-top:${big * 0.1}px;opacity:.92;text-shadow:1px 1px 0 #000}
    </style></head><body>
      ${bg ? '<div class="bg"></div>' : ''}<div class="shade"></div><div class="wrap">${logo}</div></body></html>`);
    await p.waitForTimeout(1500);
    await p.evaluate(() => document.fonts.ready);
    const jpg = name.includes('hero');
    await p.screenshot({ path: D + 'capsules/' + name + (jpg ? '.jpg' : '.png'), type: jpg ? 'jpeg' : 'png', ...(jpg ? { quality: 90 } : { omitBackground: mode === 'logo' }) });
    console.log(name, await p.evaluate(() => document.fonts.check('900 40px LogoSerif')));
    await p.close();
  }
  await b.close();
})();
