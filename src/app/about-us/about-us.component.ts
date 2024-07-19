import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  public value:string= 'This is About Us Content......';

  data:string[]=['Ram', 'Ahyam', 'Mohan'];

}
