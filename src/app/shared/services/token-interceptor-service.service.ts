import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const authserv = this.injector.get(AuthService);
    const tokenizedReq = req.clone({setHeaders: {
      Authorization: `Bearer ${authserv.getToken()}`
      }});
    return next.handle(tokenizedReq);
  }
}
