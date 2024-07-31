import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit{


  data:any[]=[
    // {name:'Rahul', age:38, org:'ABC', about:"Rahul is a good develope.", isEdit:false },
    // {name:'Bhim', age:38, org:'ABC', about:"Rahul is a good develope.", isEdit:false },
    // {name:'Kamal', age:38, org:'ABC', about:"Rahul is a good develope.", isEdit:false }, 
  ]
  userData:any={};
  constructor(private _globalServices: GlobalService ){

  }
  ngOnInit(): void {
    this.get()
  }

  get(): void {

    this._globalServices.get().subscribe(response => {

      let data = response.map((r:any)=>{
        r.isEdit=false;
        return r;
      })
     this.data =  data; 
     console.log(this.data)
    
    })
  }



  deleteRow(i:number){
    this.data.splice(i,1);
  }



  editRow(i:number){
    // this.data[i].isEdit=true;
  }

  saveRow(i:number){
    // this.data[i].isEdit=false;
    if(this.isAddUser){
      let payload = this.data[i]
      this._globalServices.addUser(payload).subscribe(response => {

         if(response.status=='ok'){
          this.get();
         }
       //console.log('>>>', response)
      
      })
    }else{

    }
  }

  isAddUser=false;
  addUser(){
    this.isAddUser=true;
    this.data.unshift( { id:0, "fname": "", "lname": "", "username": "", "avatar": "", "isEdit": true })
  }

 

  


}
