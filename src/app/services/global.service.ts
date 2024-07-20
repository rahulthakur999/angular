import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  sayHi() {
    alert('hello!');
  }

  navigation: any[] = [
    { link: "Home", url: "/home" },
    { link: "About", url: "/aboutUs" }, 
    { link: "Contact", url: "/contact" }
  ]

}
