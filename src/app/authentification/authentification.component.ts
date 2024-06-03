import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { BankClientService } from '../services/bank-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {
  @Input()
  user: User = new User();



  constructor(public service: BankClientService, public router : Router){
  }
  ngOnInit(): void {
  }

 /* signIn() { 
    this.service.sigIn(this.user).subscribe((data: {}) => {
      console.log(this.user)
      this.router.navigate(['/signin']);
  });
  }*/

}
