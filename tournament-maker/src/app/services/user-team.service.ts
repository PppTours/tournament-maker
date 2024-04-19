import { Injectable } from '@angular/core';
import { SharedDataService } from './sharedData.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User_Team } from '../models/In_Team';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserTeamService {

  apiURL = this.sharedDataService.baseURL + 'user_team';

  constructor(private sharedDataService : SharedDataService, private http : HttpClient) { }

  public isInTeam(id_user : number, is_team : number) : Observable<boolean> {
    let url = this.apiURL + '/isInTeam/' + is_team + '/' + id_user;
    return this.http.get<boolean>(url);
  }

  public joinTeam(id_team : number, id_user : number) : Observable<User_Team> {
    return this.http.post<User_Team>(this.apiURL, {"id" : {"id_team": id_team, "id_user": id_user}, "is_owner": false});
  }

  public getPlayersTeam(id_team : number) : Observable<User[]> {
    let url = this.apiURL + '/' + id_team + '/players';
    return this.http.get<User[]>(url);
  }
}
