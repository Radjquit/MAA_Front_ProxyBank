import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { BankClientService } from '../services/bank-client.service';
import { BankClient } from '../model/bank-client';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-detail-list',
  templateUrl: './account-detail-list.component.html',
  styleUrl: './account-detail-list.component.css'
})
export class AccountDetailListComponent implements OnInit{

  constructor(private bcService:BankClientService, private accService: AccountService, private route: ActivatedRoute){}

  client!: BankClient
  accounts: Account[] = []
  accountNumber: number=0
  accounts2: Account[] = []

  ngOnInit() {
    this.client=history.state.client
    this.accounts = this.accounts.concat(this.client.currentAccounts).concat(this.client.savingAccounts);
    this.accountNumber = this.accounts.length
    // this.accounts2 = this.accService.getAccountsByClientID(this.client.id).subscribe((data: {}) => { console.log(data);
    //   this.accounts2 = data;
    // })
    // this.client =  this.service.getClientById(idClient).subscribe((data: {}) => { console.log(data);
    //   this.client = data;
    // })
  }


}
