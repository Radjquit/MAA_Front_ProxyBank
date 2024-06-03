import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { BankClientService } from '../services/bank-client.service';
import { BankClient } from '../model/bank-client';
import { Router } from '@angular/router';
import { AccountType } from '../model/account';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(private bcService:BankClientService, private router: Router){}

  clients: BankClient[] = []

  ngOnInit() {
    this.loadClients()
  }


  loadClients() {
    return this.bcService.getClients().subscribe((data: BankClient[]) => { console.log(data);
      this.clients = data;
      this.clients.forEach(client => {
        client.currentAccounts.forEach(ca=>ca.type=AccountType.RUNNING);
        client.savingAccounts.forEach(sa=>sa.type=AccountType.SAVING);
      })
    })
  }

  goToAccountDetails(bClient: BankClient) {
    this.router.navigate(['/accountDetail'], { state: { client: bClient } });
  }

  goToClientDetails(bClient : BankClient) {
    this.router.navigateByUrl(`update/${bClient.id}`);
  }
  
}
