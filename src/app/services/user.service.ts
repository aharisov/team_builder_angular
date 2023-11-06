import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // number of users to get
  private size = 3;
  // URL to web api
  private urlApi = `https://random-data-api.com/api/v2/users?size=${this.size}`;  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  // method for getting users from API
  getUsers():Observable<User[]> {

    return this.http.get<User[]>(this.urlApi, this.httpOptions);
  }

  // method for getting team members
  getTeamMembers(users: User[]): User[] {

    return users;
  }
}
