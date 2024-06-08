import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './create-form/form.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule} from '@angular/material/expansion';
import { SimulationCreditComponent } from './simulation-credit/simulation-credit.component';
import { AccountDetailListComponent } from './account-detail-list/account-detail-list.component'
import { ReinitPasswordComponent } from './reinit-password/reinit-password.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { AllAccountListComponent } from './all-account-list/all-account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { FormCreateAdvisorComponent } from './form-create-advisor/form-create-advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ListComponent,
    HomeComponent,
    FormComponent,
    HomeComponent,
    SimulationCreditComponent,
    AccountDetailListComponent,
    ReinitPasswordComponent,
    MenuComponent,
    UpdateFormComponent,
    AllAccountListComponent,
    CreateAccountComponent,
    AdvisorComponent,
    FormCreateAdvisorComponent
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
