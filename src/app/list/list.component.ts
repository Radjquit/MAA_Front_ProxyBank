import { Component } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  posts:Client[] = [
    {
      id: 1, 
      contactDetails : {
        address: '17 rue Monte Cristo',
        postalCode: '75020',
        city: 'Paris',
        phoneNumber: '0111111111',
        mail: 'momo.roro@wanadoo.fr'
      },
      identity:{
        firstName:'Morgan',
        lastName:'Rolligner'
      }
    },
    {
      id: 2, 
      contactDetails : {
        address: '18 rue Monte Cristo',
        postalCode: '75021',
        city: 'Pariis',
        phoneNumber: '0111211111',
        mail: 'momo.roro@live.fr'
      },
      identity:{
        firstName:'Morgane',
        lastName:'Rollinger'
      }
    }
  ]

  
}
