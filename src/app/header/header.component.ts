import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myImage1 = 'assets/img/bateau-pavillion-francais.jpg';
  myImage2 = 'assets/img/imageLogo.jpg';
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

isroute() {
  return  this.route.isActive('/home', true);

}
  logout() {
    this.authService.logOut();
    this.route.navigateByUrl('/home');
  }

  getSession() {
    // return this.authService.getLoggedUser();
  }

}

