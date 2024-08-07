import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoApp';
  navigation:any[]=[];
  constructor(private _globalServices: GlobalService){
    this.navigation = this._globalServices.navigation;
  }

}
