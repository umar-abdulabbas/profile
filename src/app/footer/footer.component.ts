import { Component, Input, OnInit } from '@angular/core';
import {trigger, state, style, animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
  trigger('shrinkOut', [
    state('in', style({height: '100px'})),
    transition('* => void', [
      style({height: '100px'}),
      animate(250, style({height: 0}))
    ])
  ])
]
})
export class FooterComponent implements OnInit {
    @Input() footerAnim;
  footertxt = 'Developed uisng Angular and Angular Material Design Component';

  constructor() { }

  ngOnInit() {
  }

}
