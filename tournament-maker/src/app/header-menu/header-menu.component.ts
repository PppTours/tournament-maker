import { Component } from '@angular/core';
import { User } from '../models/User';
import { SharedDataService } from '../services/sharedData.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  connectedUser? : User = this.sharedDataService.getConnectedUser();

  constructor(public sharedDataService : SharedDataService, private router : Router) { }

  disconnectUser() {
    this.sharedDataService.disconnect();
  }

  goSignIn() {
    this.router.navigate(['/sign-in']);
  }

  goSignUp() {
    this.router.navigate(['/sign-up']);
  }

}
