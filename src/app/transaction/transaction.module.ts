import { ChangeDetectorRef, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { FirstAccountComponent } from './first-account/first-account.component';
import { BankClient } from '../model/bank-client';
import { Account } from '../model/account';
import { BankClientService } from '../services/bank-client.service';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SecondAccountComponent } from './second-account/second-account.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';


@NgModule({
  declarations: [
    FirstAccountComponent,
    SecondAccountComponent,
    CreateTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule
  ]
})
export class TransactionModule implements OnInit{

  client!: BankClient
  accDeb!: any
  accCred!: Account

 


  ngOnInit(): void {
   
  } 
}
