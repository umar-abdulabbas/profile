import { Component, Input, OnInit} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {trigger, state, style, animate,  transition} from '@angular/animations';
import { Router } from '@angular/router';
import { bottom, zoom } from '../animations/animations.component';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [bottom, zoom],
  host: { '[@bottom]': '' , '[@zoom]': '' }
})


export class IntroComponent implements OnInit {
 show:boolean = true;
 
  ngOnInit() {
    
   
  }
  constructor( private router:Router)
  {
    console.log(this.router);
    
  }
  
  nextComponent(){
    this.router.navigateByUrl('/about');
  }
  


}


