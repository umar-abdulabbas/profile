import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styles: []
})
export class LabComponent implements OnInit {

  @Input()
  public test : string;

  @Output()
  public enough: EventEmitter<any> = new EventEmitter();
  
  constructor() {
    // this.test = 'qwer2'
   }

  ngOnInit() {
  }

  sayEnoughToParent() {
    // tell to parent,
    console.log("enough") 
    this.enough.emit()
  }

}
