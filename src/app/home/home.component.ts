import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  public color = 'red';
  public bgColor:string = '#CCC'
  public value:string= 'This is Home Content';
  data:string[]=['Books', 'Pan', 'Newspapers'];
  demoVar:string = '';

  employList:any[]=[];


 constructor(private _globalServices: GlobalService ){

 }
 
  ngOnInit(): void {
    this.getEmploy();
  }
  
 greet(){
  this._globalServices.sayHi();
 }


 getEmploy(): void {
  this._globalServices.getEmployees().subscribe(
    response => {
      this.employList = response;
      console.log('this.employList', this.employList);
    },
    error => {
      console.error('Error fetching data', error);
    }
  );
}

}
