import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
import {MdProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
 animations: [bottom],
  host: { '[@bottom]': '' }
})
export class SkillsComponent implements OnInit {
 
 
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  nextComponent(pageName){
    
    this.router.navigateByUrl('/works');
  }
}
