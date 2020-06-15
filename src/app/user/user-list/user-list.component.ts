import { Component, OnInit } from '@angular/core';
import {UserList} from '../../shared/models/userList';
import {UserService} from '../../shared/services/user.service';
import {UserRolesService} from '../../shared/services/user-roles.service';
import {UserRole} from '../../shared/models/UserRole';
import {Groupe} from '../../shared/models/Groupe';
import {GroupesService} from '../../shared/services/groupes.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: UserList[] = [];
  userRoles: UserRole[] = [];
  gp: Groupe [] = [];

  constructor(private userSer: UserService, private userRoleserv: UserRolesService, private grServ: GroupesService) {
  }

  ngOnInit(): void {
    // this.grServ.getAllGroupe((gr) => {this.gp = gr; console.log(gr); })
   // this.userRoleserv.getAllUserRoles((ur) => {this.userRoles = ur; console.log(ur); } );
    this.userSer.getUsers((rst) => {
       rst.forEach(element => {
        const toAdd = new UserList(element.iduser, element.nom, element.username, element.email, element.password, element.userGroupeDTO, element.userRolesDTO);
        this.userlist.push(toAdd);
        console.log(this.userlist);
      });
    });
  }
  recup() {
    console.log(this.userlist);
  }
}
