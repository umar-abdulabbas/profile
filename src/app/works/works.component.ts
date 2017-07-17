import { Component, OnInit } from '@angular/core';
import { flyFromTop } from '../animations/animations.component';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styles: [],
  animations: [flyFromTop],
   host: { '[@flyFromTop]': '' }
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
