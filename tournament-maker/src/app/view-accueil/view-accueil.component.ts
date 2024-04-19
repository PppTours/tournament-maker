import { Component } from '@angular/core';
import { SharedDataService } from '../services/sharedData.service';
import { User } from '../models/User';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-view-accueil',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './view-accueil.component.html',
  styleUrl: './view-accueil.component.scss'
})
export class ViewAccueilComponent {

  constructor(public sharedDataService : SharedDataService) { }

  ngOnInit() {
  }
}
