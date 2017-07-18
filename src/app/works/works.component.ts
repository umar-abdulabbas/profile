import { Component, OnInit } from '@angular/core';
import { flyFromTop } from '../animations/animations.component';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styles: [],
   animations: [bottom],
  host: { '[@bottom]': '' }
})
export class WorksComponent implements OnInit {
 pageName = 'lab'
   constructor(private router:Router) { }

  ngOnInit() {
  }
  
  nextComponent(pageName){
    console.log("Clicked");
    this.router.navigateByUrl('/'+pageName);
  }
}
