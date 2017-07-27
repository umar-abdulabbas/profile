import { Component, OnInit } from '@angular/core';
import { flyFromTop } from '../animations/animations.component';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
   animations: [bottom],
  host: { '[@bottom]': '' }
})
export class WorksComponent implements OnInit {
 
   constructor(private router:Router) { }

  ngOnInit() {
  }
  
  nextComponent(){
   
    this.router.navigateByUrl('/lab');
  }
}
