"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var path = require("path");
var mainWindow;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
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
            preload: __dirname + "/preload.ts"
        }
    });
    if (isDev) {
        mainWindow.loadURL("http://localhost:3000");
        mainWindow.webContents.openDevTools(); // mode: detach ?
    }
    else {
        // mainWindow.removeMenu();
        mainWindow.loadFile(path.join(__dirname, "build/index.html"));
    }
    mainWindow.on("closed", function () { return (mainWindow = undefined); });
    mainWindow.focus();
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
