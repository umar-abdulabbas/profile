import { Component, Input, OnInit } from '@angular/core';
import {trigger, state, style, animate,  transition} from '@angular/animations';
import { Router } from '@angular/router';
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
 // @Input() footerAnim;
  idx=1;
  pageName = 'about';
  footertxt = 'Developed uisng Angular and Angular Material* Design Component';

  constructor( private router:Router) { }

  ngOnInit() {
  }
  
  
}


