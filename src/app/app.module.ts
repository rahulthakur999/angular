import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdComponent } from './ad/ad.component';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ErrorPageComponent,
    AdComponent,
    ContactComponent,
    ApiDataComponent,
    TopHeaderComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    LoaderComponent, 
    AdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
     
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
