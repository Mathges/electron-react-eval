// Module to control the application lifecycle and the native browser window.
const { app, BrowserWindow, protocol, ipcMain, getAllWindows } = require("electron");
const path = require("path");
const url = require("url");
const si = require('systeminformation');
const {attach, detach, refresh} = require("electron-as-wallpaper");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    // transparent: true,
    // frame: false,
    //skipTaskbar: true,
    icon: path.join(__dirname, 'logo.ico'),
  
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, "preloads/dashboardPreload.js"),
      nodeIntegration: true,
      
    },
  });

  // this reset the local storage at window init
  // TODO: a bit ugly, change this later
  mainWindow.webContents.executeJavaScript("localStorage.removeItem('backgroundAttached');", true).then((result) => {})

  ipcMain.on('attach-dashboard', event => {
    const win = BrowserWindow.getAllWindows();
    if (win.length === 2) {
      // prevent error if user click it with dashboard already being attached
      return;
    }
    //event.preventDefault();
    // this is the function creating the new window
    createDashboardWindow();
  });

  ipcMain.on('detach-dashboard', event => {
    const win = BrowserWindow.getAllWindows();
    if (win.length === 1) {
      // prevent error if user click it without dashboard being attached
      return;
    } 
    removeDashboardWindow();
  });

  

  const appURL = app.isPackaged
  ? url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  : "http://localhost:3000";
  mainWindow.loadURL(appURL);

  // Automatically open Chrome's DevTools in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }

}

// Create the native browser window.
const createDashboardWindow = async () => {

  const dashboardWindow = new BrowserWindow({
    fullscreen: true,
    // TODO remove comment while making this run as wallpaper
    transparent: true,
    frame: false,
    skipTaskbar: true,
    
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, "preloads/dashboardPreload.js"),
      nodeIntegration: true
    },
  });

  ipcMain.on('get-cpu-percent', event => {
    si.currentLoad().then((response) => {
      event.reply('cpu-percent', {
        cpuCurrent: response
      });
    });
  });

  ipcMain.on('get-cpu-temperature', event => {
    si.cpuTemperature().then((response) => {
      event.reply('cpu-temperature', {
        cpuCurrentTemperature: response
      });
    });
  });

  ipcMain.on('get-ram-percent', event => {
    si.mem().then((response) => {
      const usage = response.used;
      const max = response.total;
      const percentage = Math.ceil(usage / max * 100);
      event.reply('ram-percent', {
        ramCurrent: percentage
      });
    });
  });

  // In production, set the initial browser path to the local bundle generated
  // by the Create React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "dashboard.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";
  dashboardWindow.loadURL(appURL);

  // Automatically open Chrome's DevTools in development mode.
  if (!app.isPackaged) {
    //dashboardWindow.webContents.openDevTools();
  }
  
  // TODO: uncomment this to allow the app to be attached as a wallpaper
  attach(dashboardWindow);
}

const removeDashboardWindow = () => {
  // getting all windows
  const win = BrowserWindow.getAllWindows();

  // removing 
  win[1].webContents.executeJavaScript("localStorage.removeItem('backgroundAttached');", true).then((result) => {});
  detach(win[0]);
  win[0].close();
  refresh();
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error("Failed to register protocol");
    }
  );
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
    createMainWindow();
    setupLocalFilesNormalizerProxy();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();      
        }
    });

    // Quit when all windows are closed, except on macOS.
    // There, it's common for applications and their menu bar to stay active until
    // the user quits  explicitly with Cmd + Q.
    app.on("window-all-closed", function () {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = "https://my-electron-app.com";
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
