import { Injectable } from '@angular/core';

import { Youtube } from './profile';
import { Background } from './test';

import { YOUTUBES, BACKGROUNDS } from './profile-data';
@Injectable() 
    export class SharedService {
        getYoutube() : Promise<Youtube[]>{
            return Promise.resolve(YOUTUBES);
        }

        getYoutubeSlowly() : Promise<Youtube[]>{
            return new Promise(resolve => {
                setTimeout( () => resolve(this.getYoutube()), 2000);
            });
        }

        getBackgroundData(): Promise<Background[]> {
                return Promise.resolve(BACKGROUNDS);
                
        }
    }

   
