import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { flyFromBottom } from '../animations/animations.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
  animations: [flyFromBottom],
   host: { '[@flyFromBottom]': '' }
})
export class SkillsComponent implements OnInit {
 @Input()
 next="";
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
   navigate(){

      this.router.navigateByUrl(this.next);
  }
}
