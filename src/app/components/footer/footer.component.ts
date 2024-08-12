import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private _globalServices: GlobalService ){

  }

  data:string='';
  ngOnInit(){
    this._globalServices.myData.subscribe(d=>{
      this.data=d;
    })
  }

}
