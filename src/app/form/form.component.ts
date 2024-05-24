import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Identity } from '../model/identity';
import { ClientService } from '../services/client.service';
import { Router, RouterLink } from '@angular/router';
import { ContactDetails } from '../model/contact-details';
import { BankClient } from '../model/bank-client';
import { BankClientService } from '../services/bank-client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

 
  @Input()
  client: BankClient = new BankClient();


  constructor(public service: BankClientService, public router : Router){
  }

  createClient() {
    console.log(this.client);
    
    this.service.createClient(this.client).subscribe((data: {}) => {
      this.router.navigate(['/list']);
  });
  }

  updateClient() {


  }

  deleteClient() {
    
  }

  ngOnInit(): void {;
  }

}
