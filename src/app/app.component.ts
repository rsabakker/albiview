import { Component } from '@angular/core';
import { ElectronService } from '../services/electron.service';

@Component({
  selector: 'av-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = {'result': 'empty'};

  public constructor(public electronService: ElectronService) {
    this.electronService.listen('asynchronous-reply', (data: any) => {
      this.data = data;
    });
  }

  public openBrowse() {
    this.electronService.send('asynchronous-message', 'load-data');
  }
}
