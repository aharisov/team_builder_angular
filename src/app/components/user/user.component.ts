import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // input data from parent component
  @Input() user?: User;
  @Input() inTeam: boolean = false;
  @Input() isTeamFull: boolean = false;
  // return data to parent component
  @Output() addToTeam = new EventEmitter<User>();
  @Output() removeFromTeam = new EventEmitter<User>();

  isSelected: boolean = false;
  addButton: Button = {};

  ngOnInit(): void {
    
    // button data for adding user to team or remove from team
    this.addButton = {
      title: 'Ajoutez dans l\'equipe',
      titleSelected: 'Déjà dans l\'equipe',
      titleInTeam: 'Retirez de l\'equipe',
      class: 'w-100 btn btn-primary',
      classSelected: 'w-100 btn btn-success',
      classToRemove: 'w-100 btn btn-danger',
      user: this.user
    }
  }

  // method for adding user to team
  addNewUser(user: User): void {

    // add to team while team is not full
    if (!this.isTeamFull) {
      
      this.isSelected = true;
      this.addToTeam.emit(user);
    } else {
      
      this.isSelected = false;
    }
  }

  // method for removing user from team
  removeUser(user: User) {

    this.removeFromTeam.emit(user);
  }
}
