import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isOpen:boolean=false;
  constructor(private _globalServices: GlobalService ){

  }
  ngOnInit(): void {
     
  }

  
  openModel(){
    this.isOpen=true;
  }
  closeModal(){
    this.isOpen=false;
  }
   
}
