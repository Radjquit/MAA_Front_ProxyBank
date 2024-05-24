import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SimulationCreditComponent } from './simulation-credit/simulation-credit.component';
import { AccountDetailListComponent } from './account-detail-list/account-detail-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'clients-list', component: ClientListComponent },
  { path: 'list', component: ListComponent },
  { path : 'form', component : FormComponent},
  { path: 'simulationCredit', component: SimulationCreditComponent },
  { path: 'accountDetail', component: AccountDetailListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
