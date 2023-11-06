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
  // for stocking users
  users: User[] = [];
  // for stocking team memebers
  team: User[] = [];
  // for stocking team state
  isTeamFull: boolean = false;

  constructor(
    // use user service
    private userService: UserService
  ) {}

  // add button for getting new users
  refreshButton = {
    title: 'Autres l\'utilisateurs',
    class: 'w-100 mt-4 btn btn-info'
  }

  ngOnInit(): void {
    
    // show users on component init
    this.showUsers();
  }

  // method for showing users
  showUsers(): void {

    this.userService.getUsers().subscribe(
      (newUsers) => {                   
        
        this.users = newUsers;
      }
    );
    
  }

  // method for adding users to team
  addtoTeam(user: User) {

    // add to team while it's not full
    if (this.team.length <= 5) {
      
      this.team.push(user);
    }

    // set team to full
    if (this.team.length == 6) {
      this.isTeamFull = true;
    }
  }


}
