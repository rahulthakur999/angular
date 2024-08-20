import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lession1Component } from '../lession1/lession1.component';
import { Lession2Component } from '../lession2/lession2.component';

const routes: Routes = [
  {
    path: '',
    component: Lession1Component
  },
  {
    path: 'lession1',
    component: Lession1Component
  }
  ,
  {
    path: 'lession2',
    component: Lession2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
