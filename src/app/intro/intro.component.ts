import { Component, Input, OnInit, Output } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {trigger, state, style, animate,  transition} from '@angular/animations';
import { Router } from '@angular/router';
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
  @Input() path = '';
  @Output() next ='/skills';
 // @Input() dynamicHeight = true;
 
 propFromComponent: string ="asfdafdsaf"
 giveInputToChild = false;
 hideToggleButton = false;

  ngOnInit() {
  }
  constructor( private router:Router)
  {
    console.log(this.router);
  }
   private navgiate(){
    this.router.navigateByUrl(this.path);
    this.path=this.next;
  }

  private justToggle() {
    this.giveInputToChild = !this.giveInputToChild;
  }

  private handleEnough() {
    console.log("got engouh msg")
    this.hideToggleButton = true;
  }
}
