import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cliForm: FormGroup;
  namePattern = '^[A-Za-z]+$';
  constructor(
    private route: Router,
    private builder: FormBuilder,
    private cliservice: ClientService
    ) {}

  ngOnInit(): void {
    this.cliForm = this.builder.group({
     numeroCli: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50),  Validators.pattern('^[a-zA-Z]+$')]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      adresse: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(formulaire: FormGroup) {
    console.log(formulaire);
    alert('In onSubmit: formulaire valide : ' + formulaire.valid);
    if (formulaire.valid) {
      this.cliservice.postPost((resp) => {
          alert( 'Client ajouter' );
          formulaire.reset();
          this.route.navigateByUrl('/client-send');
        },
        {
          numeroCli: formulaire.value.numeroCli,
          nom: formulaire.value.nom,
          prenom: formulaire.value.prenom,
          email: formulaire.value.email,
          adresse: formulaire.value.adresse,
          telephone: formulaire.value.telephone

        });
    }
  }
}
