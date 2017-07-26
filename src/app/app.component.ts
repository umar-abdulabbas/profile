import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Background } from './test';
import { SharedService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnInit{
 hidden:boolean = true;
 wasClicked:boolean = false;
 animate:boolean = true;
 BACKGROUNDS : Background[];
  
   
    constructor(private router:Router, private background:SharedService){
      
    }
     ngOnInit() {
    this.getBackgroundData();
      
    
  }
    getBackgroundData(): void{
    this.background.getBackgroundData().then( BACKGROUNDS => this.BACKGROUNDS = BACKGROUNDS);
   }
   onClick() {
        this.wasClicked= !this.wasClicked;
        this.animate = !this.animate;
        this.hidden=!this.hidden;
        
    }

}
