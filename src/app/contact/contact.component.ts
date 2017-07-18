import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [],
   animations: [bottom],
  host: { '[@bottom]': '' }
})
export class ContactComponent implements OnInit {
  pageName = 'intro';
  constructor(private router:Router) { }

  ngOnInit() {
  }
   nextComponent(pageName){
    console.log("Clicked");
    this.router.navigateByUrl('/'+pageName);
  }
}
