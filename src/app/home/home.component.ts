import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  public color = 'red';
  public bgColor:string = '#CCC'
  public value:string= 'This is Home Content';
  data:string[]=['Books', 'Pan', 'Newspapers'];
  demoVar:string = '';
  constructor(private _ts: TestService){
    
     this._ts.sayHI();

  }

  

}
