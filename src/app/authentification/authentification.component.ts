import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {
  @Input()
  user: User = new User();



  constructor(public service: UserService, public router : Router){
  }
  ngOnInit(): void {
  }

  signin() { 
    this.service.signin(this.user).subscribe((data: {}) => {
      this.router.navigate(['/home']);
  });
  }

}
