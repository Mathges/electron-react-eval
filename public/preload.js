// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
  contextBridge.exposeInMainWorld("metrics", {
    // CPU - percent
    requestCPUUsagePercent: () => ipcRenderer.send('get-cpu-percent'),
    getCPUUsagePercent: setState => {
      ipcRenderer.on('cpu-percent', (event, info) => {
        const currentLoad = `${Math.ceil(info?.cpuCurrent?.currentLoad)} %`;
        setState(currentLoad);
      });
    },

    // CPU - temperature
    requestCPUTemperature: () => ipcRenderer.send('get-cpu-temperature'),
    getCPUTemperature: setState => {
      ipcRenderer.on('cpu-temperature', (event, info) => {
        let currentTemperature;
        if (info?.cpuCurrentTemperature?.main === null) {
          currentTemperature = 'NC'
        } else {
          currentTemperature = `${info?.cpuCurrentTemperature?.main} °C`;
        }      
        setState(currentTemperature);
      });
    },

    // RAM - percent
    requestRAMUsagePercent: () => ipcRenderer.send('get-ram-percent'),
    getRAMUsagePercent: setState => {
      ipcRenderer.on('ram-percent', (event, info) => {
        const currentRAMUsage = `${info?.ramCurrent} %`;
        setState(currentRAMUsage);
      });
    },
    cleanMetrics: () => ipcRenderer.removeAllListeners('metrics')

  })
});