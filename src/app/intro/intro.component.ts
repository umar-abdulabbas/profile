import { Component, Input, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
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


export class IntroComponent implements OnInit  {
 open:boolean = false;
 close:boolean = false;
  ngOnInit() {
     console.log("Init");
   
  }
  ngAfterViewInit(){
    this.open = true;
     console.log("After View");
  }
  ngOnDestroy(){
   
    this.close = true;
    console.log("Destroy");
  }
  constructor( private router:Router)
  {
    console.log(this.router);
    
  }
  
  nextComponent(){
    this.router.navigateByUrl('/about');
  }
  
  
}

