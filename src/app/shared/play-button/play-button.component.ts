import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotifierService } from 'src/app/core/notifier.service';
import { PlayService } from 'src/app/core/play.service';
import { SpotifyService } from 'src/app/core/spotify.service';

@Component({
  selector: 'play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {

  @Input('track-uri') trackUri: string;

  icon: string = '../../../assets/play.png';

  constructor(private player: PlayService, private notifier: NotifierService, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.notifier.listen()
      .subscribe(x => {
        if(this.trackUri != x){
          this.icon = '../../../assets/play.png';
        }
      })
  }

  playTrack(): void {
    this.spotifyService.getTrack(this.trackUri.split(':')[2])
      .subscribe(x => {
        let previewUrl = x['preview_url'];
        if(previewUrl != null){
          if(this.player.trackUri == this.trackUri && this.player.playerStatus == 'playing'){
            this.player.pause();
            this.icon = '../../../assets/play.png';
            this.notifier.notify('PAUSED');
          }
          else {
            this.player.play(this.trackUri);
            this.icon = '../../../assets/pause.png';
            this.notifier.notify(this.trackUri);
          }
        }
        else {
          console.log('No preview available')
        }
      })
  }
}
