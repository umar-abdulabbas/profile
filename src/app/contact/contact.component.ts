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
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
   nextComponent(pageName){
    
    this.router.navigateByUrl('/intro');
  }
}
