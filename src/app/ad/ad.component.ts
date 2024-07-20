import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html', 
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  // @ViewChild(value:any) value: value)
  @Input() value: string='';
  @Input() myData:string[]=[];
  @Output() messageEvent = new EventEmitter<any>();

  //employ:any ={name: 'Bhim', edu:'MCA', org:'ABC '}

  sendMessage() {
    this.messageEvent.emit({name: 'Bhim', edu:'MCA', org:'ABC '});
  }

  data:any = '';
  getValue(template:any){
    this.data = template.value;
    //console.log('>>>', this.data.value);
  }
}
