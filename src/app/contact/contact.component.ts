import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private _globalServices: GlobalService ){

  }
  ngOnInit(): void {
    this.getUser();
  }

  submitted = false;

  formData = {
    name: '',
    job: '' 
  };

  userList:any[]=[];

  getUser(){
    this._globalServices.getUsers().subscribe((r)=>{
      this.userList=r.data;
    })
  }

  onSubmit(userForm: NgForm) {
   // debugger;
    if (userForm.valid) {
      console.log('payload:', userForm.value);
      this._globalServices.postData(userForm.value).subscribe(response => {
       
        console.log('Response:', response);

        this.getUser();
       
      }, error => {
        console.error('Error:', error);
      });

    }
  }


   
}
