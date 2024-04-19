import { Component } from '@angular/core';
import { Team } from '../models/Team';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../services/team.service';
import { SharedDataService } from '../services/sharedData.service';
import { UserService } from '../services/user.service';
import { UserTeamService } from '../services/user-team.service';
import { User } from '../models/User';

@Component({
  selector: 'app-view-team',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './view-team.component.html',
  styleUrl: './view-team.component.scss'
})
export class ViewTeamComponent {
  team? : Team;
  isComplete = false;
  isConnected = false;
  isInTeam = false;
  playersInTeam : User[] = [];


  constructor(private route : ActivatedRoute, 
    private teamService : TeamService, 
    private sharedDataService : SharedDataService, 
    private userService : UserService,
    private userTeamService : UserTeamService,
    private router : Router) {}

  ngOnInit() {
  // Get the id from the URL
  const id_team : number = this.route.snapshot.params['id_team'];
    if(this.sharedDataService.isConnected()) {
      this.isConnected = true;
      if(this.sharedDataService.connectedUser != null){
        this.userTeamService.isInTeam(this.sharedDataService.connectedUser.id_user, id_team).subscribe(isInTeam => {
          this.isInTeam = isInTeam;
        });
      }
    }

    this.teamService.getTeamById(id_team).subscribe(team => {
      this.team = team;
      this.userTeamService.getPlayersTeam(this.team?.id_team).subscribe(players => this.playersInTeam = players);
    });
    
    this.teamService.isComplete(id_team).subscribe(isComplete => this.isComplete = isComplete);
  }

  joinTeam() {
    if(this.team != null && this.sharedDataService.connectedUser != null) {
      this.userTeamService.joinTeam(this.team.id_team, this.sharedDataService.connectedUser.id_user).subscribe(inTeam => {
        if(inTeam != null){
          this.isInTeam = true;
  
          // Refresh the page
          this.ngOnInit();
        }
      });
    }
  }

}
