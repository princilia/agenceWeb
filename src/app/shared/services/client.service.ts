import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'http://localhost:8080/Api/';
  constructor(private client: HttpClient) { }
  getClients( callback ) {
    this.client.get( this.apiUrl + 'client/list' )
      .subscribe( callback );
  }
  postPost( callback, clients ) {
    this.client.post( `${this.apiUrl}client/create`, clients ).subscribe( callback );
  }
  getClientById( id, callback ) {
    this.client.get( this.apiUrl + 'client/' + id)
      .subscribe( callback );
  }
  updateClient(clients) {
    return this.client.post(this.apiUrl + '/client/upadte' , clients, {observe : 'response'});
  }

}
