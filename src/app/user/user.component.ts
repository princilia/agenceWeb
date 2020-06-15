import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {}
  employebt() {
    this.route.navigateByUrl('/user-list');
  }
  ajoutEmpl() {
    this.route.navigateByUrl('/registre');
  }
  visualiser() {
    this.route.navigateByUrl('/user-list');
  }
  ajoutRole() {
    this.route.navigateByUrl('/role');
  }
  ajoutGroupe() {
    this.route.navigateByUrl('/groupe');
  }
  ajoutUserRole() {
    this.route.navigateByUrl('/userroles');
  }
}

