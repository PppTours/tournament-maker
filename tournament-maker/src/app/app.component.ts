import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SharedDataService } from './services/sharedData.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tournament-maker';
  
  constructor(private sharedDataService : SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.loadConnectedUser();

  }
}
