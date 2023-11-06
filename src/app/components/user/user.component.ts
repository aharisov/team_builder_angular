import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  // input data from parent component
  @Input() user?: User;
  @Input() inTeam: boolean = false;
  @Input() isTeamFull: boolean = false;
  @Input() removedFromTeam?: User;
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

  ngOnChanges(changes: SimpleChanges): void {
      
    // on every change check if the user is removed from team
    if (this.removedFromTeam) {
      
      this.checkRemoved(this.removedFromTeam);
    }
  }

  // method for adding user to team
  addNewUser(user?: User): void {

    // add to team while team is not full
    if (!this.isTeamFull) {
      
      console.log('user component click btn');
      
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

  // check if this user removed from team
  checkRemoved(removedUser?: User): void {

    if (removedUser?.id == this.user?.id) {

      // restore state of booleans
      this.isSelected = false;
      this.inTeam = false;
    }

    // remove variable from scope
    delete this.removedFromTeam;

  }
}
