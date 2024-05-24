import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { BankClientService } from '../services/bank-client.service';
import { BankClient } from '../model/bank-client';
import { Router } from '@angular/router';

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
    })
  }

  goToAccountDetails(bClient: BankClient) {
    this.router.navigate(['/accountDetail'], { state: { client: bClient } });
  }
  
}
