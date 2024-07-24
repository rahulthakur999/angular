import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(private _globalServices: GlobalService){}

  ngOnInit(): void {
     this.getAllUsers();
  }

  userList:any[]=[];
  userData:any;

  public value:string= 'This is About Us Content......';

  data:string[]=['Ram', 'Ahyam', 'Mohan'];
 
  msg: any = '';

  receiveMessage(event: any) {
    this.msg = event;
  }

  getAllUsers(){
    //debugger;
    this._globalServices.getAllUsers().subscribe(
    response => {
      this.userList = response.results;
      console.log('response>>>', this.userList);
    },
    error => {
      console.error('Error fetching data', error);
    }
  );
}

viewData(id:number){
 // User/GetAllSeriesByRegId/1
// debugger;
 this._globalServices.getUser(1).subscribe( 
  response => {
   // debugger
    this.userData = response;
    console.log('response>>>', this.userData);
  },
  error => {
    console.error('Error fetching data', error);
  }
);}





}
