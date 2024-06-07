import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './create-form/form.component';
import { SimulationCreditComponent } from './simulation-credit/simulation-credit.component';
import { AccountDetailListComponent } from './account-detail-list/account-detail-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ReinitPasswordComponent } from './reinit-password/reinit-password.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { AllAccountListComponent } from './all-account-list/all-account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AdvisorComponent } from './advisor/advisor.component';


const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'home' },
  { path : 'signin', component: AuthentificationComponent},
  { path : 'home', component: HomeComponent },
  { path : 'list', component: ListComponent },
  { path : 'createClient', component : FormComponent},
  { path : 'simulationCredit', component: SimulationCreditComponent },
  { path : 'accountDetail', component: AccountDetailListComponent },
  { path : 'forgot-password', component: ReinitPasswordComponent },
  { path : 'update/:id', component : UpdateFormComponent},
  { path : 'allAccounts', component: AllAccountListComponent},
  { path : 'advisor', component: AdvisorComponent},
  { path : 'createAccount/:id', component: CreateAccountComponent},
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
