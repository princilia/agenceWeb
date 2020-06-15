import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private userServ: UserService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      nom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(formulaire: FormGroup) {
    console.log(formulaire);
    alert('In onSubmit: formulaire valide : ' + formulaire.valid);
    if (formulaire.valid) {
      this.userServ.postPost((resp) => {
        alert('Enregistrement reussi');
        console.log(resp);
        formulaire.reset();
        this.router.navigateByUrl('/page');
      },
        {
          nom: formulaire.value.nom,
          username: formulaire.value.username,
          email: formulaire.value.email,
           password: formulaire.value.password
        });
    }
  }
}
