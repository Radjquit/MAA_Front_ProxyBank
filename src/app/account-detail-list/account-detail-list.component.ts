import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account } from '../model/account';
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
    public changeDetector: ChangeDetectorRef
    ){}
 

  client!: any
  accounts: Account[] = []
  accountNumber: number=0
  accounts2: Account[] = []

  goToCreateAccount(bClient : BankClient) {
    this.router.navigateByUrl(`createAccount/${bClient.id}`);
  }

  deleteAccount(id : number) {
    let account: any = this.accService.getAccountById(id).subscribe(data => {
      account = data;
    })
    // if(account.balance!=0){
    //   window.alert('Balance is not null !')
    // }else{
      if (window.confirm('Are you sure, you want to delete this Account?')){
        this.accService.deleteAccount(id).subscribe(data => {
          this.router.navigate(['/list']);
        })
      }
    // }
  }
  goToTransaction(bClient : BankClient, account : Account) {
    this.router.navigate(['/transaction'], { state: { client: bClient, account: account } }); 
  }

  ngOnInit() {
    this.client=history.state.client
    this.accounts = this.accounts.concat(this.client.currentAccounts).concat(this.client.savingAccounts);
    this.accountNumber = this.accounts.length
  }
}
