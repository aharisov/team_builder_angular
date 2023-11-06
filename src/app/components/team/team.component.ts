import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnChanges {

  // get data from parent component
  @Input() users: User[] = [];
  // send data to parent
  @Output() getRemovedUser = new EventEmitter<User>();

  // component title
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

  // update component on changes
  ngOnChanges(changes: SimpleChanges): void {
      
    // console.log('changes', changes);
    this.getTeamMembers(this.users);
  }

  ngOnInit(): void {

    // invoke method on component init
    this.getTeamMembers(this.users);
  }

  // method for getting team members
  getTeamMembers(users: User[]): void {

    this.team = this.userService.getTeamMembers(users);
  }

  // method for removing member from team
  removeFromTeam(member: User): void {
    
    this.team = this.team.filter(user => user.id != member.id);

    this.getRemovedUser.emit(member);
  }
}
