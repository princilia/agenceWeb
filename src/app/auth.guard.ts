import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private autServ: AuthService, private rout: Router) {}
  canActivate(): boolean {
    if (this.autServ.loggedIn()) {
      return true ;
    } else {
      this.rout.navigateByUrl('/login');
      // this.rout.navigate(['/login'])
      return false ;
    }
  }
}
