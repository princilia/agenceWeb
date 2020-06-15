import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl = 'http://localhost:8080/Api/';

  constructor(private httpclient: HttpClient) { }
  getTest() {
    this.httpclient.get(this.apiUrl + 'user/list' )
      .subscribe(u => {console.log(u); });
  }

  getUsers( callback ) {
    this.httpclient.get( this.apiUrl + 'user/list' )
      .subscribe( callback );
  }
  postPost( callback, user ) {
    this.httpclient.post( `${this.apiUrl}user/create`, user )._subscribe( callback);
  }
  getUserById( id, callback ) {
    this.httpclient.get( this.apiUrl + 'user/' + id)
      .subscribe( callback );
  }
  updateUser(user: User) {
    return this.httpclient.put(`${this.apiUrl}/user/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.httpclient.delete(`${this.apiUrl}/user/${id}`);
  }
}
