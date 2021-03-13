import { Injectable } from '@angular/core';

declare var window: Window;
declare global {
  interface Window {
    myAPI: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  public getApi() {
    return window.myAPI;
  }

  public send(channel: string, data: any) {
    window.myAPI.send(channel, data);
  }

  public listen(channel: string, callback: Function) {
    window.myAPI.listen(channel, (data) => {
      callback(data);
    });
  }
}
