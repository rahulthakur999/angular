import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  openLoader:boolean=false;

  constructor(private _globalServices: GlobalService ){

  }

  data:string='';
  ngOnInit(){
    this._globalServices.myData.subscribe(d=>{
      this.data=d;
    })
  }

  bookNow(){
    debugger;
    this.openLoader=true;
  }

}
