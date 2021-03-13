import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('myAPI', {
  send: (channel: string, data: any) => {
    const validChannels = ["asynchronous-message"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  listen: (channel: string, callback: Function) => {
    const validChannels = ["asynchronous-reply"];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  }
});
