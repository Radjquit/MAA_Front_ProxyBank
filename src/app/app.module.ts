import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule} from '@angular/material/expansion';
import { SimulationCreditComponent } from './simulation-credit/simulation-credit.component';
import { AccountDetailListComponent } from './account-detail-list/account-detail-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ClientListComponent,
    HomeComponent,
    FormComponent,
    HomeComponent,
    SimulationCreditComponent,
    AccountDetailListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
