import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
 animations: [bottom],
  host: { '[@bottom]': '' }
})
export class SkillsComponent implements OnInit {
 @Input()
 pageName ='works';
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  nextComponent(pageName){
    console.log("Clicked");
    this.router.navigateByUrl('/'+pageName);
  }
}
