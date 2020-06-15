import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GroupesService} from '../../shared/services/groupes.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  grForm: FormGroup;
  mode: number;

  constructor(private groupServ: GroupesService, private builder: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
    this.grForm = this.builder.group({
      label: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSubmit(gf: FormGroup) {
    this.groupServ.postPost((resp) => {
      alert('Enregistrement reussi');
      gf.reset();
      this.route.navigateByUrl('/user');
    }, {
      label: gf.value.label,
      description: gf.value.description,
      });

  }
}
