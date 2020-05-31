import {Role} from './Role';
import {UserList} from './userList';
import {User} from './User';

export class UserRole {
  user: number;
  role: number;
  dateDeb: Date;
  dateFin: Date;

  constructor(user, role, dateDeb, dateFin ) {
    this.user = user;
    this.role = role;
    this.dateDeb = dateDeb;
    this.dateFin = dateFin;
  }
}
