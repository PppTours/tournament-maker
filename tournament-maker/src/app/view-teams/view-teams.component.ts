import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../models/Team';
import { RouterLink } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-view-teams',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './view-teams.component.html',
  styleUrl: './view-teams.component.scss'
})
export class ViewTeamsComponent {
  teams? : Team[];
  teams_2v2? : Team[];
  teams_5v5? : Team[];

  
  constructor(private teamService : TeamService) {}

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
      this.teams_2v2 = teams.filter(team => team.type == '2vs2');
      this.teams_5v5 = teams.filter(team => team.type == '5vs5');
    });
  }
}
