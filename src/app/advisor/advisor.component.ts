import { Component } from '@angular/core';
import { Advisor } from '../model/advisor';
import { Router } from '@angular/router';
import { AdvisorService } from '../services/advisor.service';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent {

  constructor(private service:AdvisorService, private router: Router){}


  advisors: Advisor[] = []

  ngOnInit() {
    this.loadAdvisors()
  }


  loadAdvisors() {
    return this.service.getAdvisor().subscribe((data: Advisor[]) => { console.log(data);
      this.advisors = data;
      this.advisors.forEach(advisor => {
        console.log("advisor", advisor)
  
      })
    })
  }

}
