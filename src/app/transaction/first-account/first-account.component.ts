import { Component, ElementRef, Input, OnInit, ViewChild, input } from '@angular/core';
import { BankClient } from '../../model/bank-client';
import { Account, AccountType } from '../../model/account';
import { AccountService } from '../../services/account.service';
import { BankClientService } from '../../services/bank-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../model/transaction';

@Component({
  selector: 'app-first-account',
  templateUrl: './first-account.component.html',
  styleUrl: './first-account.component.css'
})
export class FirstAccountComponent implements OnInit{

  client! : BankClient
  accDeb! : Account
  @Input()
  clientCred : BankClient = new BankClient()
  clients: BankClient[] =[]


  constructor(
    private service:BankClientService,
    private accService: AccountService,
    private routerA: ActivatedRoute,
    private router : Router,
  ){}

  goToSecondAccount(clientCr : BankClient){
    this.router.navigate(['/transaction/secondAccount'], { state: { clientDeb: this.client, accDeb: this.accDeb, clientCred: clientCr } });
  }

  loadClients() {
    return this.service.getClients().subscribe((data: BankClient[]) => { console.log(data);
      this.clients = data;
      this.clients.forEach(client => {
        client.currentAccounts.forEach(ca=>ca.type=AccountType.RUNNING);
        client.savingAccounts.forEach(sa=>sa.type=AccountType.SAVING);
      })
    })
  }

  test(){
    console.log(this.clientCred.id);
    console.log(this.clientCred);
    
  }

  ngOnInit(): void {
    this.client = history.state.client
    this.accDeb = history.state.account
    this.loadClients()
    }  
}

