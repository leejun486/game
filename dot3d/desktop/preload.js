// 게임 쪽에 파일 저장 함수만 열어 줌 (window.dot3dDesktop)
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

const savePath = ipcRenderer.sendSync('save-path');

contextBridge.exposeInMainWorld('dot3dDesktop', {
  readSave() {
    try { return fs.readFileSync(savePath, 'utf8'); } catch { return null; }
  },
  writeSave(json) {
    try {
      if (!json) { fs.rmSync(savePath, { force: true }); return true; }
      // 쓰다가 꺼져도 깨지지 않게 임시 파일에 쓴 뒤 바꿔치기
      fs.writeFileSync(savePath + '.tmp', json);
      fs.renameSync(savePath + '.tmp', savePath);
      return true;
    } catch { return false; }
  },
  savePath,
});
