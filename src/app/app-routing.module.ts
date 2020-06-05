import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClientComponent} from './client/client.component';
import {UserComponent} from './user/user.component';
import {RegistreComponent} from './user/registre/registre.component';
import {LoginComponent} from './user/login/login.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {ClientSendComponent} from './client/client-send/client-send.component';
import {ClientReceiveComponent} from './client/client-receive/client-receive.component';
import {PaquetsComponent} from './paquets/paquets.component';
import {AddpaquetsComponent} from './paquets/addpaquets/addpaquets.component';
import {ListpaquetsComponent} from './paquets/listpaquets/listpaquets.component';
import {UserAdminComponent} from './user/user-admin/user-admin.component';
import {PageAdminComponent} from './page-admin/page-admin.component';
import {PageEmployeComponent} from './page-employe/page-employe.component';
import {DeconnecterComponent} from './deconnecter/deconnecter.component';
import {PageComponent} from './page/page.component';
import {GroupeComponent} from './user/groupe/groupe.component';
import {RoleComponent} from './user/role/role.component';
import {UserrolesComponent} from './user/userroles/userroles.component';
import {AuthGuard} from './auth.guard';
import {ClientListComponent} from './client/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'registre',
    component: RegistreComponent
  },
  {
    path: 'client-send',
    component: ClientSendComponent
  },
  {
    path: 'client-list',
    component: ClientListComponent
  },
  {
    path: 'client-receive',
    component: ClientReceiveComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'paquets',
    component: PaquetsComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user-list',
    component:  UserListComponent
  },
  {
    path: 'user-admin',
    component:  UserAdminComponent
  },
  {
    path: 'addpaquets',
    component:  AddpaquetsComponent
  },
  {
    path: 'listpaquets',
    component:  ListpaquetsComponent
  },
  {
    path: 'page-admin',
    component:  PageAdminComponent
  },
  {
    path: 'page-employe',
    component:  PageEmployeComponent
  },
  {
    path: 'deconnecter',
    component:  DeconnecterComponent
  },
  {
    path: 'groupe',
    component:  GroupeComponent
  },
  {
    path: 'role',
    component:  RoleComponent
  },
  {
    path: 'userrole',
    component:  UserrolesComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
