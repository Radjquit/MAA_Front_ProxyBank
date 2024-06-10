import { Component, Input, OnInit } from '@angular/core';
import { BankClientService } from '../../services/bank-client.service';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../model/transaction';
import { Account } from '../../model/account';
import { TransactionService } from '../../services/transaction.service';
import { BankClient } from '../../model/bank-client';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.css'
})
export class CreateTransactionComponent implements OnInit {

  clientDeb! : BankClient
  accDeb!: Account
  accCred!: Account
  @Input()
  transac : Transaction = new Transaction()

  constructor(
    private service:BankClientService,
    private accService: AccountService,
    private transacService: TransactionService,
    private routerA: ActivatedRoute,
    private router : Router,
  ){}
  
  createTransaction() {
    this.transacService.createTransaction(this.accDeb.accountNumber, this.accCred.accountNumber, this.transac).subscribe((data: {}) => {
      console.log(this.transac);
      this.router.navigate(['/accountDetail'], { state: { client: this.clientDeb } });  
    });
    window.alert('Your Transaction was successfull !')
  }


  ngOnInit(): void {
    this.accCred = history.state.accCred
    this.accDeb = history.state.accDeb
    this.clientDeb = history.state.clientDeb
  }

}
