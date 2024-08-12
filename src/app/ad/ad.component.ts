import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html', 
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  // @ViewChild(value:any) value: value)
  data:string='';
  @Input() value: string='';
  @Input() myData:string[]=[];
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private _globalServices: GlobalService ){

  }



  ngOnInit(){
    this._globalServices.myData.subscribe(d=>{
      this.data=d;
    })
  }
  

  //employ:any ={name: 'Bhim', edu:'MCA', org:'ABC '}
  inputValue:string = 'test';

  sendMessage() {
    this.messageEvent.emit({name: 'Bhim', edu:'MCA', org:'ABC '});
  }

  sendData(){
    this._globalServices.myData.next(this.data);
  }

  function(){
    this._globalServices.myData.next(this.data);
  }

 // data:any = '';
  getValue(template:any){
    this.data = template.value;
    //console.log('>>>', this.data.value);
  }
}
