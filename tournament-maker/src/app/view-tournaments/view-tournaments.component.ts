import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TournamentService } from '../services/tournament.service';
import { Tournament } from '../models/Tournamenent';
import { SharedDataService } from '../services/sharedData.service';
import { User } from '../models/User';


@Component({
  selector: 'app-view-tournaments',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './view-tournaments.component.html',
  styleUrl: './view-tournaments.component.scss'
})
export class ViewTournamentsComponent {
  tournaments?: Tournament[];
  tournaments_creation? : Tournament[]
  tournaments_in_progress? : Tournament[]
  tournaments_ended? : Tournament[]

  connectedUser? : User = this.sharedDataService.getConnectedUser();

  constructor(public sharedDataService : SharedDataService, private tournamentService : TournamentService) { }

  ngOnInit() {
    this.tournamentService.getTournaments().subscribe(tournaments => {
      this.tournaments = tournaments;
      this.tournaments_creation = this.tournaments.filter(tournament => tournament.status == 'CREATION');
      this.tournaments_in_progress = this.tournaments.filter(tournament => tournament.status == 'IN_PROGRESS');
      this.tournaments_ended = this.tournaments.filter(tournament => tournament.status == 'ENDED');
    });
  }

  createTournament() {
  }
}
