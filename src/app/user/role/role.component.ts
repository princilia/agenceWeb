import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RolesService} from '../../shared/services/roles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleForm: FormGroup;

  constructor(private roleServ: RolesService, private builder: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.roleForm = this.builder.group({
      label: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSubmit(rolef: FormGroup) {
    this.roleServ.postPost((resp) => {
        alert('Enregistrement reussi');
        rolef.reset();
        this.route.navigateByUrl('/user');
      },
      {
        label: rolef.value.label,
        description: rolef.value.description
      });

  }
}
