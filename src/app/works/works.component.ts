import { Component, OnInit } from '@angular/core';
import { flyFromTop } from '../animations/animations.component';
import { Router } from '@angular/router';
import { bottom } from '../animations/animations.component';
import { Work } from './work';
import { WorkService } from './work.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [bottom],
  providers:[WorkService],
  host: { '[@bottom]': '' }
})
export class WorksComponent implements OnInit {
    works:Work[];
   constructor(private router:Router, private workservice:WorkService) { }

   getWorks():void{
      this.workservice.getWorks().then( works => this.works = works)
   }

  ngOnInit() {
    this.getWorks();
  }
  
  nextComponent(){
   
    this.router.navigateByUrl('/lab');
  }
}
