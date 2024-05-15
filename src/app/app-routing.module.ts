import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'clients-list', component: ClientListComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
