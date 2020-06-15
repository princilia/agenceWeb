import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserRolesService} from '../../shared/services/user-roles.service';

@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.css']
})
export class UserrolesComponent implements OnInit {

  urForm: FormGroup;

  constructor(private urServ: UserRolesService, private builder: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.urForm = this.builder.group({
      nom: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      dateDeb: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required])
    });
  }

  onSubmit(urf: FormGroup) {
    this.urServ.postPost((resp) => {
        alert('Enregistrement reussi');
        urf.reset();
        this.route.navigateByUrl('/user');
      },
      {
        nom: urf.value.dateDeb,
        role: urf.value.dateFin,
        dateDeb: urf.value.dateDeb,
        dateFin: urf.value.dateFin
      });

  }

}
