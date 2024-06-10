import { Component, Input, OnInit } from '@angular/core';
import { BankClient } from '../../model/bank-client';
import { BankClientService } from '../../services/bank-client.service';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../model/account';

@Component({
  selector: 'app-second-account',
  templateUrl: './second-account.component.html',
  styleUrl: './second-account.component.css'
})
export class SecondAccountComponent implements OnInit{

  clientDeb! : BankClient
  clientCred! : any
  accDeb! : Account
  @Input()
  accCred! : Account
  accounts : Account[] = []

  constructor(
    private service:BankClientService,
    private accService: AccountService,
    private routerA: ActivatedRoute,
    private router : Router,
  ){}

  goToCreateTransaction(accountCd : Account) {
    this.router.navigate(['/transaction/createTransaction'],
     { state: { clientDeb: this.clientDeb,
                accDeb: this.accDeb,
                clientCred: this.clientCred, 
                accCred : accountCd } 
      });
  }

  test(){
    console.log(this.clientCred);
    console.log(this.clientDeb);
    console.log(this.accCred);
    console.log(this.accDeb); 
    console.log(this.accounts);
    
  }

  ngOnInit(): void {
    this.clientDeb = history.state.clientDeb
    this.clientCred = history.state.clientCred
    this.accDeb = history.state.accDeb
    if(this.clientCred.id === this.clientDeb){
      this.accounts = this.accounts.concat(this.clientDeb.currentAccounts).concat(this.clientDeb.savingAccounts)
    }else{
      this.accounts = this.accounts.concat(this.clientCred.currentAccounts)
    }
  }


}
