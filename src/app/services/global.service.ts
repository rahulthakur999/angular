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

  getAllUsers(): Observable<any> { 
    return this.http.get<any>(`${environment.apiUrlNew}User/GetAllUser`);
  }

  getUser(id:number): Observable<any> { 
    // return this.http.get<any>(`${environment.apiUrlNew}User/GetAllSeriesByRegId/${id}`);
    return this.http.get<any>(environment.apiUrlNew+'User/GetAllSeriesByRegId/'+id);

  }


  getUsers(): Observable<any> { 
    return this.http.get<any>(`https://reqres.in/api/users`);
  }

  postData(data: any): Observable<any> {
    // const headers = new HttpHeaders({   });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('https://reqres.in/api/users', data, { headers });
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
