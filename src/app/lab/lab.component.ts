import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styles: [],
   animations: [bottom],
  host: { '[@bottom]': '' }
})
export class LabComponent implements OnInit {
  pageName = 'contact'
  @Input()
  public test : string;

  @Output()
  public enough: EventEmitter<any> = new EventEmitter();
  
  constructor(private router:Router) { }
  ngOnInit() {
  }

  nextComponent(){
    
    this.router.navigateByUrl('/contact');
  }
}
