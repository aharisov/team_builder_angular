import { Component, OnInit } from '@angular/core';

import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Construct your team';
  users: User[] = [];
  team: User[] = [];
  isTeam: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    
    this.showUsers();
  }

  showUsers(): void {

    this.userService.getUsers().subscribe(
      (newUsers) => {                   
        
        this.users = newUsers;
      }
    );
    
  }

  addtoTeam(user: User) {

    this.team.push(user);
  }


}
