import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { bottom, zoom } from '../animations/animations.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [bottom, zoom],
  host: { '[@bottom]': '' , '[@zoom]': '' }
})
export class AboutComponent implements OnInit {
show:boolean = true;
    ngOnInit() {
      this.router.events.subscribe( (evt) => {
        if(!(evt instanceof NavigationEnd)){
          return;
        }
        window.scrollTo(0,0);
      });

      
  }

  constructor(private router:Router){
      
    }
  nextComponent(){
    
    this.router.navigateByUrl('/skills');
  }
   
}
