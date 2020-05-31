import {Groupe} from './Groupe';
import {UserRole} from './UserRole';

export class UserList {
  id: number;
  nom: string;
  username: string;
  email: string;
  password: string;
  userGroupeDTO: Groupe;
  userRolesDTO: UserRole;

  constructor(id, nom, username, email, password, userGroupeDTO, userRolesDTO) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.username = username;
    this.password = password;
    this.userGroupeDTO = userGroupeDTO;
    this.userRolesDTO = userRolesDTO;
  }
}
