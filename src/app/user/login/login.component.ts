import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  mode: number;

  constructor(private route: Router, private builder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(user: FormGroup) {
    this.authService.authenticate(user)
      .subscribe(
        resp => {
            this.authService.setItem(resp);
            console.log(resp);
            this.route.navigateByUrl('/page');
        },
          err => this.mode = 1 );
  }

  logout() {
    this.authService.logOut();
    this.route.navigateByUrl('/deconnecter');
  }

  isroute() {
     return this.route.isActive('/home', true);
  }
}
