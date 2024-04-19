import { Routes } from '@angular/router';
import { ViewAccueilComponent } from './view-accueil/view-accueil.component';
import { ViewTournamentsComponent } from './view-tournaments/view-tournaments.component';
import { ViewTournamentComponent } from './view-tournament/view-tournament.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { CreateTeamComponent } from './create-team/create-team.component';

export const routes: Routes = [
    { path: '', component:ViewAccueilComponent },
    { path: 'tournaments', component:ViewTournamentsComponent },
    { path: 'tournament/:id_tournament', component:ViewTournamentComponent},
    { path: "sign-in", component: SignInComponent},
    { path: "sign-up", component: SignUpComponent},
    { path: "teams", component: ViewTeamsComponent},
    { path: "teams/:id_team", component: ViewTeamComponent},
    { path : "create-team", component: CreateTeamComponent},
    { path: '**', redirectTo: ''}

];
