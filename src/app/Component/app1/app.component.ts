import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent1 {
  constructor(private router: Router) {}
  dropdownOpen: { [key: string]: boolean } = {
    internet: false,
    delivery: false,
    professionalService: false,
    humanResources: false,
    salesMarketing: false,
    usAdmin: false
  };

  // Define the submenuOpen with an index signature
  submenuOpen: { [key: string]: boolean } = {
    submenu1: false,
    submenu2: false,
    submenu3: false,
    submenu4: false,
    submenu5: false,
    submenu6: false,
    submenu7: false
  };

  // Method to toggle dropdown state
  toggleDropdown(menu: string, state: boolean) {
    this.dropdownOpen[menu] = state;
  }

  // Method to toggle submenu state
  toggleSubmenu(submenu: string, state: boolean) {
    this.submenuOpen[submenu] = state;
  }
}
