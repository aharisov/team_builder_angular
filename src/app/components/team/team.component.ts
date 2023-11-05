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
  team: User[] = [];
  isMember: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {

    this.getTeamMembers(this.users);
  }

  getTeamMembers(users: User[]): void {

    this.team = this.userService.getTeamMembers(users);
  }
}
