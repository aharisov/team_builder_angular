import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user?: User;

  addButton: Button = {
    title: 'Add to team',
    class: 'w-100 btn btn-primary',
    user: this.user
  }

}
