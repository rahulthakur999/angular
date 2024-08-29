import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lession1',
  templateUrl: './lession1.component.html',
  styleUrls: ['./lession1.component.scss']
})
export class Lession1Component {

  
  details:any[]=[
    {id:1, name:'Class 01', link:'class01', data:'This is Class 1 Content'},
    {id:2, name:'Class 02', link:'class01', data:'This is Class 2 Content'},
    {id:3, name:'Class 03', link:'class01', data:'This is Class 3 Content'},
    {id:4, name:'Class 04', link:'class01', data:'This is Class 4 Content'},
  ]

 

  heading:string='';
  data:string='';
  

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      const id = params['id'];
      console.log(id);

     

      this.heading= this.details[id-1]['name'];
     this.data= this.details[id-1]['data'];

     // console.log('this.seleted>>', this.seleted);
    });
  }

}
