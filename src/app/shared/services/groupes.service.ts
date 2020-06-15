import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Groupe} from '../models/Groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupesService {
  apiUrl = 'http://localhost:8080/Api/';
  constructor( private httpclient: HttpClient ) { }

  getAllGroupe( callback ) {
    this.httpclient.get( this.apiUrl + 'groupe/list' )
      .subscribe( callback );
  }

  postPost( callback, groupe ) {
    this.httpclient.post( `${this.apiUrl}groupe/create`, groupe ).subscribe( callback );
  }
  getGroupeById( id, callback ) {
    this.httpclient.get( this.apiUrl + 'groupe/' + id)
      .subscribe( callback );
  }
  updateGroupe(g: Groupe) {
    return this.httpclient.put(`${this.apiUrl}/groupe/${g.id}`, g);
  }

  deleteGroupe(id: number) {
    return this.httpclient.delete(`${this.apiUrl}/groupe/${id}`);
  }
}
