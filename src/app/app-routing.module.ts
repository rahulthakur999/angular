import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactComponent } from './contact/contact.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'api-data', component: ApiDataComponent  },
  { path: 'login', component: LoginComponent  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript/javascript.module').then(m => m.JavascriptModule)
  },
  { path: '**', component: ErrorPageComponent }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
