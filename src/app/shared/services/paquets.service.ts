import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaquetsService {

  apiUrl = 'http://localhost:8080/Api/';
  constructor(private client: HttpClient) { }
  getPaquets( callback ) {
    this.client.get( this.apiUrl + 'paquets/list' )
      .subscribe( callback );
  }
  postPost( callback, paquetCreate ) {
    this.client.post( `${this.apiUrl}paquets/create`, paquetCreate ).subscribe( callback );
  }
  getPaquetsById( id, callback ) {
    this.client.get( this.apiUrl + 'paquets/' + id)
      .subscribe( callback );
  }
}
