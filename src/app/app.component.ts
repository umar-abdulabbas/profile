import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   styles: [`
    #fab {
      background-color:green;
      height:50px;
      width:50px;
      border:none;
      border-radius:50%;
      box-shadow:0 0 7px rgba(0,0,0,.7);
      position:absolute;
      bottom:0px;
      right:0px;
      margin:20px;
      cursor:pointer;
    }
    
    #icon {
      font-size:30px;
      color:white;
      line-height:48px;
      text-align:center;
    }
  `]
})
export class AppComponent {
  title = 'My Profile - Work in Progress';
   toggle = false;
    handleClick(){
        this.toggle = !this.toggle
    }
}
