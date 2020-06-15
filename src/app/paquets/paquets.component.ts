import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paquets',
  templateUrl: './paquets.component.html',
  styleUrls: ['./paquets.component.css']
})
export class PaquetsComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.cliserv.getClients( (cl) => {
    //   cl.forEach(element => {
    //     const toAdd = new Clients(element.idclient, element.nom, element.prenom, element.email, element.adresse, element.telephone);
    //     this.client.push(toAdd);
    //   });
    // });
  }

  visualiserPaquets() {
    alert('vous allez être dirigé vers la liste des Paquets.');
    this.route.navigateByUrl('/listpaquets');
  }
}
