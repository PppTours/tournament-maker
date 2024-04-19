import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { SharedDataService } from './sharedData.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = this.sharedDataService.baseURL + 'users';


  constructor(private sharedDataService : SharedDataService, private http : HttpClient) { }


  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  public createUser(user: User) : Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  public connectUser(pseudo: string, password: string) : Observable<User> {
    // Pass the pseudo and password to the API in json format at the endpoint /users/connect/
    let url = this.apiURL + '/connect';
    return this.http.post<User>(url, {"pseudo": pseudo, "password": password});
  }
}
