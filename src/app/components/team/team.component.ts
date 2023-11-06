import { Component, OnInit, Input } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() users: User[] = [];
  title = "Mon equipe";
  alertEmptyTeam = "Vous n'avez pas choisi l'equipe";
  alertFullTeam = "Votre equipe est complète";
  team: User[] = [];
  isMember: boolean = false;
  isFull: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {

    this.getTeamMembers(this.users);
  }

  getTeamMembers(users: User[]): void {

    if (this.team.length > 6) {

      this.isFull = true;
    } else {
      
      this.team = this.userService.getTeamMembers(users);
    }
  }
}
