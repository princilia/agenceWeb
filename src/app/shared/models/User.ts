import {Groupe} from './Groupe';
import {UserRole} from './UserRole';

export interface User {
  id: string;
  nom: string;
  username: string;
  email: string;
  password: string;
  userGroupeDTO: Groupe;
  userRolesDTO: UserRole;

}
