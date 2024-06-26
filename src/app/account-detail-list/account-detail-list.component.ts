import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account, AccountType } from '../model/account';
import { BankClientService } from '../services/bank-client.service';
import { BankClient } from '../model/bank-client';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-detail-list',
  templateUrl: './account-detail-list.component.html',
  styleUrl: './account-detail-list.component.css'
})
export class AccountDetailListComponent implements OnInit{

  constructor(
    private service:BankClientService,
    private accService: AccountService,
    private routeA: ActivatedRoute,
    private router : Router,
    public changeDetector: ChangeDetectorRef,
    ){}
 

  client!: BankClient
  accounts: Account[] = []
  accountNumber: number=0
  accounts2: Account[] = []

  goToCreateAccount(bClient : BankClient) {
    this.router.navigateByUrl(`createAccount/${bClient.id}`);
  }

  deleteAccount(id : number) {
      if (window.confirm('Are you sure, you want to delete this Account?')){
        this.accService.deleteAccount(id).subscribe(d=>{
          this.service.getClientById(this.client.id).subscribe(data2=>{
            this.client = data2
            this.router.navigate(['/accountDetail'], { state: { client: this.client } });
            this.initialize()
            })
        })
      }
  }

  goToTransaction(bClient : BankClient, account : Account) {
    this.router.navigate(['/transaction'], { state: { client: bClient, account: account } }); 
  }

  ngOnInit() {
    this.initialize()
  }

  initialize(){
    this.client=history.state.client
    this.client.currentAccounts.forEach(ca=>ca.type=AccountType.RUNNING);
    this.client.savingAccounts.forEach(sa=>sa.type=AccountType.SAVING);
    this.accounts = this.client.currentAccounts.concat(this.client.savingAccounts);
    this.accountNumber = this.accounts.length
  }
}
