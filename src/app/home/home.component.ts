import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';
 

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


 constructor(private _globalServices: GlobalService){

 }
  
 greet(){
  this._globalServices.sayHi();
 }


}
