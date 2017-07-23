import { Injectable } from '@angular/core';

import { Youtube } from './youtube';
import { YOUTUBES } from './mock-youtubes';
@Injectable() 
    export class YoutubeService {
        getYoutube() : Promise<Youtube[]>{
            return Promise.resolve(YOUTUBES);
        }

        getYoutubeSlowly() : Promise<Youtube[]>{
            return new Promise(resolve => {
                setTimeout( () => resolve(this.getYoutube()), 2000);
            });
        }
    }
