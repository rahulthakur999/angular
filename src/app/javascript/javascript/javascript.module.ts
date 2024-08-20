import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { Lession1Component } from '../lession1/lession1.component';
import { Lession2Component } from '../lession2/lession2.component';


@NgModule({
  declarations: [
    Lession1Component,
    Lession2Component
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
