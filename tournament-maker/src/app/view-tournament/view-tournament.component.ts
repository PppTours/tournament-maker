import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/Tournamenent';
import { TournamentService } from '../services/tournament.service';
import { NgIf } from '@angular/common';
import { SharedDataService } from '../services/sharedData.service';
import { User } from '../models/User';

@Component({
  selector: 'app-view-tournament',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './view-tournament.component.html',
  styleUrl: './view-tournament.component.scss'
})
export class ViewTournamentComponent {
  tournament? : Tournament;

  constructor(private route : ActivatedRoute, public sharedDataService : SharedDataService, private tournamentService : TournamentService) { 
  }

  
  ngOnInit() {
    // Get the id from the URL
    const tournamentId : number = this.route.snapshot.params['id_tournament'];
    // Get the tournament from the service
    this.tournamentService.getTournament(tournamentId).subscribe(tournament => this.tournament = tournament);
  }

  joinTournament() {
    
  }
  
}
