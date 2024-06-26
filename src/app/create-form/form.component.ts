import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.service.createClient(this.client).subscribe((data: {}) => {
      this.router.navigate(['/list']);
    });
  }


  ngOnInit(): void {;
  }

}
