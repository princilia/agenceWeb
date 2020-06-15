import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080/Api';
  constructor(
    private httpClient: HttpClient) { }
    authenticate(user) {
     return this.httpClient.post(this.apiUrl + '/auth/signin' , user);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setItem(token: any) {
    console.log(token);
    localStorage.setItem('token', token);
  }
  logOut() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
