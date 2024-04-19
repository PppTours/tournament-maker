import { Injectable } from '@angular/core';
import { Tournament } from '../models/Tournamenent';
import { SharedDataService } from './sharedData.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  apiURL = this.sharedDataService.baseURL + 'tournaments';


  constructor(private sharedDataService : SharedDataService, private http : HttpClient) { }

  public getTournaments() : Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.apiURL);
  }

  public getTournament(id: number) : Observable<Tournament> {
    return this.http.get<Tournament>(this.apiURL + '/' + id);
  }


}
