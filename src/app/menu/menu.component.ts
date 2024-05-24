import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',


})
export class MenuComponent {
  public showMenu = false;
  constructor() {
  }
toggleMenu() {
  this.showMenu = !this.showMenu;
}


}
