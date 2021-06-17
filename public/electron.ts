import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    minWidth: 900,
    height: 680,
    minHeight: 680,
    center: true,
    // kiosk: false,
    resizable: true,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      devTools: isDev,
      preload: __dirname + "/preload.ts",
    },
  });

  if(isDev) {
    mainWindow.loadURL("http://localhost:3000");

    mainWindow.webContents.openDevTools(); // mode: detach ?
  } else {
    // mainWindow.removeMenu();

    mainWindow.loadFile(path.join(__dirname, "build/index.html"));
  }

  mainWindow.on("closed", () => (mainWindow = undefined!));
  mainWindow.focus();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if(process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if(mainWindow === null) {
    createWindow();
  }
});