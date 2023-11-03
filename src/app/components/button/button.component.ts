import { Component } from '@angular/core';
import { Input, Output, EventEmitter  } from '@angular/core';

import { Button } from 'src/app/interfaces/button';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() button?: Button;
  @Input() user?: User;
  @Output() newEvent = new EventEmitter<User>();

  buttonClick(){

    // this.newEvent.emit(user);
    console.log('clicked', this.user)
  }
}
