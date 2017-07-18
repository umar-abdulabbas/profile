import { Component, Input, OnInit, Output } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {trigger, state, style, animate,  transition} from '@angular/animations';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [bottom],
  host: { '[@bottom]': '' }
})

export class IntroComponent implements OnInit {

  ngOnInit() {
  }
  constructor( private router:Router)
  {
    console.log(this.router);
    
  }
  
  nextComponent(pageName){
    this.router.navigateByUrl('/about');
  }
}


