import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BankClient } from '../model/bank-client';
import { BankClientService } from '../services/bank-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent implements OnInit {

  @Input()client: any = new BankClient();

  id:any;
  disabled! : boolean


  constructor(
    private service: BankClientService,
    private router : Router, 
    private routerA : ActivatedRoute
    ){}


  updateClient(id : number) {
    this.service.updateClient(id, this.client).subscribe(data => {
      this.router.navigate(['/list']);
    });
  }

  deleteClient(id : number) {
    if (window.confirm('Are you sure, you want to delete this Client?')){
      this.service.deleteClient(id).subscribe(data => {
        this.router.navigate(['/list']);
      })
    }
  }

  enableForm(){
    this.disabled = false;
  }
  
  formIsDisabled(): boolean{
    return this.disabled;
  }

  ngOnInit(): void {
    const idClient = this.routerA.snapshot.params['id']
    this.client =  this.service.getClientById(idClient).subscribe((data: {}) => { 
      console.log(data);
      this.client = data;
    })
    // console.log(this.client);
    
   this.disabled = true
  }

}
