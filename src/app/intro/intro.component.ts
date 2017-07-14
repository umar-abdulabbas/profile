import { Component, Input, OnInit, Output } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {trigger, state, style, animate,  transition} from '@angular/animations';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
 animations: [
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 50, 
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition('* => void', [
      animate('0.2s 0.1s ease-out', style({
        opacity: 0,
        backgroundColor: '#000',
        transform: 'translateX(100%)'
      }))
    ])
  ])
]
})
export class IntroComponent implements OnInit {
  @Input() shouldToggle;
  @Output() master;
 // @Input() dynamicHeight = true;
  constructor() { }

  ngOnInit() {
  }

}
