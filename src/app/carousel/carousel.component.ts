import {Pipe, PipeTransform, Component, OnInit, NgModule} from '@angular/core';
//import { Component, OnInit, NgModule} from '@angular/core';
import {Image} from './image.interface';
import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer} from "@angular/platform-browser";
import { Youtube } from '../youtube';
import { YoutubeService } from '../youtube.service';

   @Pipe({name:'safe'})
export class SafePipe implements PipeTransform{
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [YoutubeService],

})

export class CarouselComponent implements OnInit {
 
  YOUTUBES: Youtube[];
  
  constructor(private youtubeService: YoutubeService) { 

  }
  ngOnInit():void {
    //this.getYoutube();
    this.getYoutubeSlowly();
  
  
    
  }
   getYoutube(): void{
    this.youtubeService.getYoutube().then( YOUTUBES => this.YOUTUBES = YOUTUBES);
   }
   
   getYoutubeSlowly(): void{
    this.youtubeService.getYoutubeSlowly().then( YOUTUBES => this.YOUTUBES = YOUTUBES);
   }
}

