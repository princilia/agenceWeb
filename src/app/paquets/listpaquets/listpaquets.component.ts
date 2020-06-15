import { Component, OnInit } from '@angular/core';
import {Paquets} from '../../shared/models/Paquets';
import {PaquetsService} from '../../shared/services/paquets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpaquets',
  templateUrl: './listpaquets.component.html',
  styleUrls: ['./listpaquets.component.css']
})
export class ListpaquetsComponent implements OnInit {
  pqList: Paquets[] = [];
  constructor(private pqService: PaquetsService, private route: Router) { }

  ngOnInit(): void {
    this.pqService.getPaquets( (pq) => {
      pq.forEach(element => {
        // tslint:disable-next-line:max-line-length
        const toAdd = new Paquets(element.idPaquets, element.clientEnvoie, element.clientReceptionne, element.description, element.contenu, element.volume, element.chargement , element.etatPaye,
                                  element.dateArriver, element.dateEnvoie, element.dateReception, element.destination);
        this.pqList.push(toAdd);
      });
    });
  }
  ADDpaq() {
    alert('vous allez être dirigé vers paquets services.');
    this.route.navigateByUrl('/paquets');
  }
}
