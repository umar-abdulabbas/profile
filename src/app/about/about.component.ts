import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
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
export class AboutComponent implements OnInit {
@Input() shouldToggle;

  constructor() { }

  ngOnInit() {
  }

}
