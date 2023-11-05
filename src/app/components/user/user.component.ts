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
  @Output() addToTeam = new EventEmitter<User>();

  addButton: Button = {};

  ngOnInit(): void {
    
    // console.log(this.user);
    this.addButton = {
      title: 'Ajoute dans l\'equipe',
      titleSelected: 'Déjà dans l\'equipe',
      class: 'w-100 btn btn-primary',
      classSelected: 'w-100 btn btn-success',
      user: this.user
    }
  }

  addNewUser(user: User): void {

    // this.newEvent.emit(user);
    console.log('clicked', this.addButton)
    this.addToTeam.emit(user);
  }
}
