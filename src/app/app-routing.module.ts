import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReinitPasswordComponent } from './reinit-password/reinit-password.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'signin', component: AuthentificationComponent},
  { path: 'home', component: HomeComponent },
  { path: 'clients-list', component: ClientListComponent },
  { path: 'list', component: ListComponent },
  { path: 'forgot-password', component: ReinitPasswordComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
