import { Component, OnInit } from '@angular/core';
import {Clients} from '../../shared/models/Clients';
import {ClientService} from '../../shared/services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-send',
  templateUrl: './client-send.component.html',
  styleUrls: ['./client-send.component.css']
})
export class ClientSendComponent implements OnInit {
  cliList: Clients[] = [];
  constructor(private cliserv: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.cliserv.getClients( (cl) => {
      cl.forEach(element => {
        const toAdd = new Clients(element.idclient, element.numeroCli, element.nom, element.prenom, element.email, element.adresse, element.telephone);
        this.cliList.push(toAdd);
      });
    });
  }
  addCLient() {
    alert('vous allez être dirigé vers Client.');
    this.route.navigateByUrl('/client');
  }
  clientlist() {
    this.route.navigateByUrl('/client-list');
  }
  EditClient() {
    // methode update
    this.route.navigateByUrl('/client-receive');
  }
}
