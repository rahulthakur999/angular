import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}employees`);
  }

  sayHi() {
    alert('hello!');
  }

  navigation: any[] = [
    { link: "Home", url: "/home" },
    { link: "About", url: "/aboutUs" }, 
    { link: "Contact", url: "/contact" }
  ]



}
