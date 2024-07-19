import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  // @ViewChild(value:any) value: value)
  @Input() value: string='';
  @Input() myData:string[]=[];

}
