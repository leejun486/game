// 월하궁 데스크톱판 (Electron)
//  - 게임 파일을 app:// 주소로 열어 fetch(음원)가 그대로 동작
//  - 저장: 브라우저 저장소 + 사용자 폴더의 save.json (앱을 지워도 기록 파일은 남음)
//  - F11 / Alt+Enter 전체 화면
const { app, BrowserWindow, protocol, net, ipcMain, Menu } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);

// 저장 폴더를 고정 (Windows: %APPDATA%\\Wolhagung, macOS: ~/Library/Application Support/Wolhagung, Linux: ~/.config/Wolhagung)
app.setPath('userData', path.join(app.getPath('appData'), 'Wolhagung'));

const GAME = path.join(__dirname, 'game');
const SAVE = () => path.join(app.getPath('userData'), 'save.json');

ipcMain.on('save-path', (e) => { e.returnValue = SAVE(); });

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 760, minWidth: 800, minHeight: 480,
    backgroundColor: '#0b0d14', title: '월하궁: 도깨비 야행', autoHideMenuBar: true,
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
