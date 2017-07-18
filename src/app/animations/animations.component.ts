import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styles: []
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const flyFromBottom =
trigger('flyFromBottom', [
    state('in', style({opacity: 1, transform: 'translateY(0)'})),
    transition('void => *', [
      style({
        opacity: 50, 
        transform: 'translateY(1000%)'
      }),
      animate('0.2s ease-in')
    ]),
    state('out', style({opacity: 1, transform: 'translateY(0)'})),
    transition('* => void', [
      animate('0.2s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateY(1000%)'
      }))
    ])
  ]);

  export const flyFromTop =
trigger('flyFromTop', [
    state('in', style({opacity: 1, transform: 'translateY(0)'})),
    transition('void => *', [
      style({
        opacity: 50, 
        transform: 'translateX(1000%)'
      }),
      animate('0.2s ease-in')
    ]),
    state('out', style({opacity: 1, transform: 'translateY(0)'})),
    transition('* => void', [
      animate('0.2s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(1000%)'
      }))
    ])
  ]);

  export const bottom = 
  trigger(
      'bottom', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(-100%)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0, background: 'red'}))
        ])
      ]
    );
 