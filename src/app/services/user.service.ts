import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private size = 3;
  private urlApi = `https://random-data-api.com/api/v2/users?size=${this.size}`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  USERS: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsers():Observable<User[]> {

    return this.http.get<User[]>(this.urlApi, this.httpOptions);
  }
}
