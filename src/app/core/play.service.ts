import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  audio = new Audio()
  playerStatus: string;
  trackUri: string;

  constructor(private spotifyService: SpotifyService) { }

  play(trackUri: string): void {
    this.spotifyService.getTrack(trackUri.split(':')[2])
      .subscribe(x => {
        let previewUrl = x['preview_url'];
        if(previewUrl != null){
          this.audio.src = previewUrl;
          this.audio.play();
          this.playerStatus = 'playing';
          this.trackUri = trackUri;
        }       
    }) 
  }

  pause(): void {
    this.audio.pause();
    this.playerStatus = 'paused';
  }
}
