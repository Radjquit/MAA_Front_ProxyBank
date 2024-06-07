import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { BankClient } from '../model/bank-client';

@Component({
  selector: 'app-all-account-list',
  templateUrl: './all-account-list.component.html',
  styleUrl: './all-account-list.component.css'
})
export class AllAccountListComponent {

  constructor(private acService:AccountService, private router: Router){}

  accounts: Account[] = []
  client!: BankClient

  ngOnInit() {
    this.loadAccounts()
  }


  loadAccounts() {
    return this.acService.getAccounts().subscribe((data: Account[]) => { console.log(data);
      this.accounts = data;

    })  
    console.log(this.accounts);
    
  }
}
