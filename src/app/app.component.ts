import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenceWeb';
  constructor( private authser: AuthService, private route: Router ) {
  }

  isloged(): boolean {
    console.log(this.authser.getToken());
    return this.authser.getToken() != null;
  }

  logout() {
    this.authser.logOut();
    this.route.navigateByUrl('/deconnecter');
  }
}
