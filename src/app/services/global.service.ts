import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    //return this.http.get<any>(`${environment.apiUrl}employees`);
    return this.http.get<any>(environment.apiUrl+"employees");

  }

  sayHi(name:string) {
    alert('hello '+ name);
  }

  navigation: any[] = [
    { link: "Home", url: "/home" },
    { link: "About", url: "/aboutUs" }, 
    { link: "Contact", url: "/contact" }
  ]



}
