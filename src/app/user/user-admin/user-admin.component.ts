import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserList} from '../../shared/models/userList';
import {UserService} from '../../shared/services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  userlist: UserList[] = [];
  constructor(private route: Router, private userSer: UserService ) { }

  ngOnInit(): void {
    // this.userSer.getTest( );
    this.userSer.getUsers((rst) => {
      rst.forEach(element => {
        const toAdd = new UserList(element.iduser, element.nom, element.username, element.email, element.password, element.groupe, element.userRole);
        this.userlist.push(toAdd);
      });
    });
  }
  deleteUser(id: number) {
    this.userSer.deleteUser(id).pipe(first()).subscribe(() => {
      // this.userlist
    });
  }
   loadAllUsers() {
    // this.userSer.getUsers().pipe(first()).subscribe(users => {
    //   this.userlist = users;
    // });
  }
  enregistrer() {
    alert('vous allez être dirigé vers Registre.');
    this.route.navigateByUrl('/registre');
  }
}
