import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
 animations: [bottom],
  host: { '[@bottom]': '' }
})
export class SkillsComponent implements OnInit {
 
 
  color = 'warn';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  nextComponent(){
    
    this.router.navigateByUrl('/works');
  }
}
