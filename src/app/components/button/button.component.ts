import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';

import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() button?: Button;

}
