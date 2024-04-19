import { Injectable } from '@angular/core';
import { SharedDataService } from './sharedData.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  

  apiURL = this.sharedDataService.baseURL + 'teams';


  constructor(private sharedDataService : SharedDataService, private http : HttpClient) { }

  public getTeams() : Observable<Team[]> {
    return this.http.get<Team[]>(this.apiURL);
  }

  public createTeam(team: Team) : Observable<Team> {
    return this.http.post<Team>(this.apiURL, team);
  }

  public updateTeam(team: Team) : Observable<Team> {
    return this.http.put<Team>(this.apiURL, team);
  }

  public deleteTeam(id: number) : Observable<Team> {
    return this.http.delete<Team>(this.apiURL + '/' + id);
  }

  public getTeamById(id_team: number) : Observable<Team> {
    return this.http.get<Team>(this.apiURL + '/' + id_team);
  }

  public isComplete(id_team : number) : Observable<boolean> {
    return this.http.get<boolean>(this.apiURL + '/' + id_team + '/isComplete');
  }

}
