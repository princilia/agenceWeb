import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  isroute() {
    return this.route.isActive('/login', true);
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
