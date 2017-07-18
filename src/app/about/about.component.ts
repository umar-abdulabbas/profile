import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
import { FlexLayoutModule } from "@angular/flex-layout";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [bottom],
  host: { '[@bottom]': '' }
})
export class AboutComponent implements OnInit {
//@Input() shouldToggle;
@Input() next = "";
 pageName = 'skills'
    ngOnInit() {
  }

  constructor(private router:Router){
      
    }
  nextComponent(pageName){
    console.log("Clicked");
    this.router.navigateByUrl('/'+pageName);
  }
   
}
