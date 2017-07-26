import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  wasClicked:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
        this.wasClicked= !this.wasClicked;
       
        
    }
}
