import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myImage1 = 'assets/img/footer-bg.jpeg';
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
}
