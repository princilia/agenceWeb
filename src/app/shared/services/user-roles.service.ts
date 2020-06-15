import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRole} from '../models/UserRole';
import {UserRoleID} from '../models/UserRoleID';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  apiUrl = 'http://localhost:8080/Api/';
  constructor( private httpclient: HttpClient ) { }

  getAllUserRoles( callback ) {
    this.httpclient.get( this.apiUrl + 'userRole/list' )
      .subscribe( callback );
  }

  postPost( callback, userRole ) {
    this.httpclient.post( `${this.apiUrl}userRole/create`, userRole ).subscribe( callback );
  }
  getRoleById( id, callback ) {
    this.httpclient.get( this.apiUrl + 'userRole/' + id)
      .subscribe( callback );
  }
  updateUserRole(ur: UserRole, id: UserRoleID ) {
    return this.httpclient.put(`${this.apiUrl}/userRole/${id}`, ur);
  }

  deleteUserRole(id: UserRoleID) {
    return this.httpclient.delete(`${this.apiUrl}/userRole/${id}`);
  }
}
