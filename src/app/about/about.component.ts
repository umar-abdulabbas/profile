import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';
import { bottom, zoom } from '../animations/animations.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [bottom, zoom],
  host: { '[@bottom]': '' , '[@zoom]': '' }
})
export class AboutComponent implements OnInit {

    ngOnInit() {
  }

  constructor(private router:Router){
      
    }
  nextComponent(){
    
    this.router.navigateByUrl('/skills');
  }
   
}
