import { Component, OnInit} from '@angular/core';
//import { Component, OnInit, NgModule} from '@angular/core';
import {Image} from './image.interface';
import {BrowserModule} from '@angular/platform-browser'
//import {DomSanitizer} from "@angular/platform-browser";
//import { Youtube } from '../profile';
//import { SharedService } from '../profile.service';

  // @Pipe({name:'safe'})
// export class SafePipe implements PipeTransform{
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  //providers: [SharedService],

})

export class CarouselComponent implements OnInit {
  slectedIndex : number;
  //YOUTUBES: Youtube[];
  
  // constructor(private youtubeService: SharedService) { 
  //     this.slectedIndex = 0;
  //     this.YOUTUBES = [];
  // }
    
  ngOnInit():void {
    //this.getYoutube();
   // this.getYoutubeSlowly();
  
  
    
  }
   next() {
     //  ++this.slectedIndex;
    }

    prev() {
      //  --this.slectedIndex;
    }
   getYoutube(): void{
   // this.youtubeService.getYoutube().then( YOUTUBES => this.YOUTUBES = YOUTUBES);
   }
   
   getYoutubeSlowly(): void{
   // this.youtubeService.getYoutubeSlowly().then( YOUTUBES => this.YOUTUBES = YOUTUBES);
   }
}

