import { Component } from '@angular/core';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  team: User[] = [];
}
