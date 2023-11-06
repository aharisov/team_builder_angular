import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  // get data from parent component
  @Input() users: User[] = [];
  title = "Mon equipe";
  // variables for stocking alerts
  alertEmptyTeam = "Vous n'avez pas choisi l'equipe";
  alertFullTeam = "Votre equipe est complète";
  // variable for stocking team members
  team: User[] = [];

  constructor(
    // use user service
    private userService: UserService
  ) {}

  ngOnInit(): void {

    // invoke method on component init
    this.getTeamMembers(this.users);
  }

  // method for getting team members
  getTeamMembers(users: User[]): void {

    this.team = this.userService.getTeamMembers(users);
  }
}
