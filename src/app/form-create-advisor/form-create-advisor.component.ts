import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisorService } from '../services/advisor.service';
import { Advisor } from '../model/advisor';

@Component({
  selector: 'app-form-create-advisor',
  templateUrl: './form-create-advisor.component.html',
  styleUrl: './form-create-advisor.component.css'
})
export class FormCreateAdvisorComponent implements OnInit{

  @Input()
  advisor: Advisor = new Advisor();


  constructor(public service: AdvisorService, public router : Router){
  }

  createAdvisor() {
    this.service.createAdvisor(this.advisor).subscribe((data: {}) => {
      this.router.navigate(['/manager-view']);
    });
  }


  ngOnInit(): void {;
  }

}
