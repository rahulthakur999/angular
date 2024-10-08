import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit, AfterViewInit, OnDestroy {
  public color = 'red';
  public bgColor:string = '#CCC'
  public value:string= 'This is Home Content';
  data:string[]=['Books', 'Pan', 'Newspapers'];
  demoVar:string = '';

  employList:any[]=[];


 constructor(private _globalServices: GlobalService ){

 }

  ngOnDestroy(): void {
   // debugger
    // alert('I am NG ON Destory');
    // console.log('I am NG ON Destory')
    this.event.clear();
  }
  
  ngAfterViewInit(): void {
    
  }
 
  event:any;
  num:number=0;
  ngOnInit(): void {

    this.event = setInterval(() => {
      this.num=this.num+1;
      console.log(this.num);
    }, 1000);

    this.getEmploy();
  }
  
//  greet(name:any){
//   this._globalServices.sayHi(name);
//  }

greet1 = (name:any) =>  {
  this._globalServices.sayHi(name);
}

 getEmploy(): void {

this._globalServices.getEmployees().subscribe(response => {
  
 this.employList =  response.data;

 //console.log(this.employList);

})

  // this._globalServices.getEmployees().subscribe(
  //   response => {
  //     this.employList = response;
  //     console.log('this.employList', this.employList);
  //   },
  //   error => {
  //     console.error('Error fetching data', error);
  //   }
  // );
}

createUser(){
 
  this._globalServices.postData({"name": "morpheus","job": "leader"}).subscribe(response => {
    debugger;
    console.log('Response:', response);
    //this.getEmploy();
  }, error => {
    console.error('Error:', error);
  });
 
}

}
