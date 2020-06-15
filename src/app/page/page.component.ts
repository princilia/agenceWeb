import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  isroute() {
    return this.route.isActive('/home', true);

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
