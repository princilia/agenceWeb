import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegistreComponent } from './user/registre/registre.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { PaquetsComponent } from './paquets/paquets.component';
import { ClientSendComponent } from './client/client-send/client-send.component';
import { ClientReceiveComponent } from './client/client-receive/client-receive.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {CommonModule} from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { AddpaquetsComponent } from './paquets/addpaquets/addpaquets.component';
import { ListpaquetsComponent } from './paquets/listpaquets/listpaquets.component';
import { RechClientPipe } from './shared/rech-client.pipe';
import { RoleComponent } from './user/role/role.component';
import { GroupeComponent } from './user/groupe/groupe.component';
import { UserrolesComponent } from './user/userroles/userroles.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageEmployeComponent } from './page-employe/page-employe.component';
import { DeconnecterComponent } from './deconnecter/deconnecter.component';
import { PageComponent } from './page/page.component';
import {TokenInterceptorServiceService} from './shared/services/token-interceptor-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    UserComponent,
    HomeComponent,
    ClientComponent,
    PaquetsComponent,
    ClientSendComponent,
    ClientReceiveComponent,
    HeaderComponent,
    UserListComponent,
    ClientListComponent,
    UserAdminComponent,
    AddpaquetsComponent,
    ListpaquetsComponent,
    RechClientPipe,
    RoleComponent,
    GroupeComponent,
    UserrolesComponent,
    PageAdminComponent,
    PageEmployeComponent,
    DeconnecterComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorServiceService,
                multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
