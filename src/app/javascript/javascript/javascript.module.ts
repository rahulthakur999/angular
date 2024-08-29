import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { Lession1Component } from '../lession1/lession1.component'; 
import { JavascriptComponent } from './javascript.component';


@NgModule({
  declarations: [
    Lession1Component, 
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JavascriptModule { }
