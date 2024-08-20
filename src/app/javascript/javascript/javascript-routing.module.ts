import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lession1Component } from '../lession1/lession1.component';

const routes: Routes = [
  {
    path: '',
    component: Lession1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
