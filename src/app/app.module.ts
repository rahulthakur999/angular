import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ErrorPageComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
