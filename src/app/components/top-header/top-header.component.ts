import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {

  constructor(private _globalServices: GlobalService ){

  }

  data:string='';
  ngOnInit(){
    this._globalServices.myData.subscribe(d=>{
      this.data=d;
    })
  }

}
