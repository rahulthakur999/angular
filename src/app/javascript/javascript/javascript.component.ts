import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent {

  list:any[]=[
    {id:1, name:'Class 01', link:'class01', data:'This is Class 1 Content'},
    {id:2, name:'Class 02', link:'class01', data:'This is Class 2 Content'},
    {id:3, name:'Class 03', link:'class01', data:'This is Class 3 Content'},
    {id:4, name:'Class 04', link:'class01', data:'This is Class 4 Content'},
    {id:5, name:'Class 05', link:'class01', data:'This is Class 5 Content'},
    {id:6, name:'Class 06', link:'class01', data:'This is Class 5 Content'},
  ]

  

}
