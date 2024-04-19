import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Team } from '../models/Team';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/sharedData.service';
import { UserTeamService } from '../services/user-team.service';

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.scss'
})
export class CreateTeamComponent {
  states = [
    {name: '5vs5'},
    {name: '2vs2'},
  ];

  createTeamForm = new FormGroup({
    nameInput: new FormControl(''),
    tagInput: new FormControl(''),
    typeInput: new FormControl(this.states[0]),
  });

  constructor(private teamSerice : TeamService,
    private router : Router,
    private sharedDataService : SharedDataService,
    private user_teamService : UserTeamService
  ) { }


  onSubmit() {
    let team: Team;
    // Verifications
    if (this.createTeamForm.value.nameInput == '' || this.createTeamForm.value.nameInput == null) {
      alert('Please enter a name');
      return;
    }
    if (this.createTeamForm.value.tagInput == ''  || this.createTeamForm.value.tagInput == null) {
      alert('Please enter a tag');
      return;
    }
    if (this.createTeamForm.value.typeInput?.name == ''  || this.createTeamForm.value.typeInput == null) {
      alert('Please enter a type');
      return;
    }


    if(this.createTeamForm){
      // Verify that user is connected
      if (this.sharedDataService.getConnectedUser() == null) {
        alert('You must be connected to create a team');
        return;
      }

      team = new Team(-1, this.createTeamForm.value.nameInput, this.createTeamForm.value.tagInput, new Date(), this.createTeamForm.value.typeInput.name);
      this.teamSerice.createTeam(team).subscribe(team => {
        // Add the user to this team
        let user = this.sharedDataService.getConnectedUser();
        this.user_teamService.joinTeam(team.id_team, user!.id_user).subscribe(in_team => {
          this.router.navigate(["/teams/" + team.id_team]);
        });
      });
    }
  }
}
