import { Component, Input, OnInit } from '@angular/core';
import { BankClient } from '../model/bank-client';
import { Account } from '../model/account';
import { BankClientService } from '../services/bank-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {

  @Input()
  account : Account = new Account()
  client: any = new BankClient();

  constructor(
    private service: BankClientService,
    private accService: AccountService,
    private routerA: ActivatedRoute,
    private router : Router){}

  createAccount() {
    this.accService.createAccount(this.account, this.client.id).subscribe((data: {}) => {
      console.log(this.account);
    });
  }


  goToAccountDetails() {
    this.router.navigate(['/accountDetail'], { state: { client: this.client } });
  }


  ngOnInit(): void {
    const idClient = this.routerA.snapshot.params['id']
    this.client = this.service.getClientById(idClient).subscribe((data:{})=> { console.log(data);
      this.client = data;
    })
  }

}
