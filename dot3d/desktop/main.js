// 월하궁 데스크톱판 (Electron)
//  - 게임 파일을 app:// 주소로 열어 fetch(음원)가 그대로 동작
//  - 저장: 브라우저 저장소 + 사용자 폴더의 save.json (앱을 지워도 기록 파일은 남음)
//  - F11 / Alt+Enter 전체 화면
//  - 스팀: steam.json의 앱 번호가 있고 스팀이 켜져 있으면 업적·오버레이 (없거나 실패하면 그냥 실행)
const { app, BrowserWindow, protocol, net, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);

// 저장 폴더를 고정 (Windows: %APPDATA%\\Wolhagung, macOS: ~/Library/Application Support/Wolhagung, Linux: ~/.config/Wolhagung)
app.setPath('userData', path.join(app.getPath('appData'), 'Wolhagung'));

const GAME = path.join(__dirname, 'game');
const SAVE = () => path.join(app.getPath('userData'), 'save.json');
const IS_DEMO = fs.existsSync(path.join(GAME, 'DEMO'));

ipcMain.on('save-path', (e) => { e.returnValue = SAVE(); });

// ---------- 스팀 ----------
let steam = null;
function initSteam() {
  let id = Number(process.env.STEAM_APP_ID) || 0;
  if (!id) {
    try {
      const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'steam.json'), 'utf8'));
      id = Number(IS_DEMO ? cfg.demoAppId : cfg.appId) || 0;
    } catch { id = 0; }
  }
  if (!id) return;
  try {
    const sw = require('steamworks.js');
    // 스팀 밖에서 바로 실행하면 스팀을 통해 다시 켬 (배포판만)
    if (app.isPackaged && sw.restartAppIfNecessary(id)) { app.quit(); return; }
    steam = sw.init(id);
    sw.electronEnableSteamOverlay();
    console.log('steam ok', id);
  } catch (err) {
    console.warn('steam off:', err.message);
    steam = null;
  }
}
initSteam();
ipcMain.on('steam-on', (e) => { e.returnValue = !!steam; });
// 업적 달성 (이미 달성한 것은 건너뜀). 이름은 ACH_<게임 안 업적 id 대문자>
ipcMain.on('steam-ach', (e, name) => {
  if (!steam) return;
  try { if (!steam.achievement.isActivated(name)) steam.achievement.activate(name); } catch (err) { console.warn('steam ach', name, err.message); }
});
ipcMain.on('steam-store', () => { try { steam?.overlay.activateToStore(0, 0); } catch { /* 무시 */ } });

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 760, minWidth: 800, minHeight: 480,
    backgroundColor: '#0b0d14', title: '월하궁: 도깨비 야행', autoHideMenuBar: true, icon: path.join(GAME, 'icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, sandbox: false },
  });
  Menu.setApplicationMenu(null);
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11' || (input.alt && input.key === 'Enter')) { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
    if (input.key === 'F12' && !app.isPackaged) win.webContents.toggleDevTools();
  });
  win.loadURL('app://game/index.html');
}

app.whenReady().then(() => {
  protocol.handle('app', (req) => {
    const { pathname } = new URL(req.url);
    const file = path.normalize(path.join(GAME, decodeURIComponent(pathname)));
    if (!file.startsWith(GAME)) return new Response('forbidden', { status: 403 });
    return net.fetch(pathToFileURL(file).toString());
  });
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
