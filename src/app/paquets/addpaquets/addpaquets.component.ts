import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Clients} from '../../shared/models/Clients';
import {ClientService} from '../../shared/services/client.service';
import {PaquetsService} from '../../shared/services/paquets.service';


@Component({
  selector: 'app-addpaquets',
  templateUrl: './addpaquets.component.html',
  styleUrls: ['./addpaquets.component.css']
})
export class AddpaquetsComponent implements OnInit {
  paquetsForm: FormGroup;
  cliList: Clients [] = [];
  rechcli: string;
  constructor(private route: Router, private packserv: PaquetsService , private cliServ: ClientService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.paquetsForm = this.builder.group({
    clientEnvoie: new FormControl('' , [Validators.required]),
    clientReceptionne: new FormControl('' , [Validators.required]),
    description: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    numeropack: new FormControl('' , [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    volume: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    chargement: new FormControl('' , [ Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    etatPaye: new FormControl(  false, [Validators.required]),
    dateArriver: new FormControl('' , [Validators.required]),
    dateEnvoie: new FormControl('' , [Validators.required]),
    dateReception: new FormControl('' , [Validators.required]),
    destination: new FormControl('' , [Validators.required]),
    rechcli: new FormControl()
    });
    this.cliServ.getClients((cl) => {this.cliList = cl; console.log(cl); } );
   // this.idclient(this.paquetsForm.value.rechcli, this.cliServ.getClients((cl) => {this.cliList = cl; console.log(cl); } ));
   }

  rechClient() {
    this.cliServ.getClients((cl) => {
      this.cliList = cl.filter((client) => (client.nom.includes(this.paquetsForm.value.rechcli, 0 )));
      this.cliList.sort();
      console.log(this.cliList);
      console.log(this.paquetsForm.value.rechcli);
    });
  }
  // idclient(id, callback) {
  //   this.cliServ.getClientById((cl) => {
  //     this.cliList = cl;
  //     console.log(cl);
  //   }, callback);
  // }
  onSubmit(formulaire: FormGroup) {
    console.log(formulaire);
    alert('In onSubmit: formulaire valide : ' + formulaire.valid);
    if (formulaire.valid) {
      this.packserv.postPost((resp) => {
        formulaire.reset();
        },
         {
      clientEnvoie: formulaire.value.clientEnvoie.idClient,
      clientReceptionne: formulaire.value.clientReceptionne.idClient,
      description: formulaire.value.description,
       numeropack: formulaire.value.numeropack,
      volume: formulaire.value.volume,
      chargement: formulaire.value.chargement,
      etatPaye: formulaire.value.etatPaye,
      dateArriver: formulaire.value.dateArriver,
      dateEnvoie: formulaire.value.dateEnvoie,
      dateReception: formulaire.value.dateReception,
      destination: formulaire.value.destination
        });
    }
  }
  addCLient() {
    alert('vous allez être dirigé vers Client.');
    this.route.navigateByUrl('/client');
  }
}
