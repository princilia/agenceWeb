import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
    apiUrl = 'http://localhost:8080/Api/';
  constructor( private httpclient: HttpClient ) { }

  getAllRoles( callback ) {
    this.httpclient.get( this.apiUrl + 'role/list' )
      .subscribe( callback );
  }

  postPost( callback, role ) {
    this.httpclient.post( `${this.apiUrl}role/create`, role ).subscribe( callback );
  }
  getRoleById( id, callback ) {
    this.httpclient.get( this.apiUrl + 'role/' + id)
      .subscribe( callback );
  }
  updateRole(role: Role) {
    return this.httpclient.put(`${this.apiUrl}/role/${role.id}`, role);
  }

  deleteRole(id: number) {
    return this.httpclient.delete(`${this.apiUrl}/role/${id}`);
  }
}
