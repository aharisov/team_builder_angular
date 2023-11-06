import { Component, OnInit } from '@angular/core';

import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Button } from './interfaces/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Créez votre equipe';
  alertFullTeam = "Votre equipe est complète";
  users: User[] = [];
  team: User[] = [];
  isTeam: boolean = false;
  isTeamFull: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  refreshButton = {
    title: 'Autres l\'utilisateurs',
    class: 'w-100 mt-4 btn btn-info'
  }

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

    console.log('before', this.team.length);
    if (this.team.length <= 5) {
      
      this.team.push(user);
    }

    if (this.team.length == 6) {
      this.isTeamFull = true;
    }
    console.log('after', this.team.length);
  }


}
