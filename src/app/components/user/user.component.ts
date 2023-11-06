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

  @Input() user?: User;
  @Input() inTeam?: boolean;
  @Output() addToTeam = new EventEmitter<User>();
  @Output() removeFromTeam = new EventEmitter<User>();

  isSelected: boolean = false;
  isInTeam: boolean = false;
  addButton: Button = {};

  ngOnInit(): void {
    
    // console.log(this.user);
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

  addNewUser(user: User): void {

    // this.newEvent.emit(user);
    console.log('clicked', this.addButton);
    this.isSelected = true;
    this.addToTeam.emit(user);
  }

  removeUser(user: User) {

    this.removeFromTeam.emit(user);
  }
}
