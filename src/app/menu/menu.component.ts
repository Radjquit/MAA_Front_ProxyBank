import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',


})
export class MenuComponent {
  public showMenu = false;
  constructor() {
  }

 /* @ViewChild('elementName')
  element!: ElementRef;

@HostListener ('click', ['$event']) onClick(e: any) {
  console.log(e.target, this.element)
  if (this.element.nativeElement.contains(e.target)) {
    console.log("in")
  } else {
    console.log("out")
  }
}*/

toggleMenu() {
  this.showMenu = !this.showMenu;
}


}
