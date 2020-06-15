import { Component, OnInit } from '@angular/core';
import {Clients} from '../../shared/models/Clients';
import {ClientService} from '../../shared/services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-receive',
  templateUrl: './client-receive.component.html',
  styleUrls: ['./client-receive.component.css']
})
export class ClientReceiveComponent implements OnInit {
  cliList: Clients[] = [];
  constructor(private cliserv: ClientService, private route: Router) { }

  ngOnInit(): void {
    this.cliserv.updateClient( (cl) => {
      cl.forEach(element => {
        const toAdd = new Clients(element.idclient, element.numeroCli, element.nom, element.prenom, element.email, element.adresse, element.telephone);
        this.cliList.push(toAdd);
      });
    });
  }
  redirectclient() {
    return this.route.navigateByUrl('/client-send');

  }
  redirectpaquet() {
    return this.route.navigateByUrl('/paquets');

  }
  redirectUtilisateur() {
    return this.route.navigateByUrl('/user');

  }




}
