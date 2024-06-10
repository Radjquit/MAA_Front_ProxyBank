import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstAccountComponent } from './first-account/first-account.component';
import { ListComponent } from '../list/list.component';
import { SecondAccountComponent } from './second-account/second-account.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

const routes: Routes = [
  { path : '', component : FirstAccountComponent},
  { path : 'secondAccount', component : SecondAccountComponent},
  { path : 'createTransaction', component : CreateTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {
  
 }
