import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/core/notifier.service';
import { PlayService } from 'src/app/core/play.service';
import { PlaylistService } from 'src/app/core/playlist.service';
import { PlayTrack } from 'src/app/models/play-track';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-playlist-overview',
  templateUrl: './playlist-overview.component.html',
  styleUrls: ['./playlist-overview.component.scss']
})
export class PlaylistOverviewComponent implements AfterViewInit {

  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService, private router: Router, private player: PlayService, private notifier: NotifierService){}
 
  ngAfterViewInit(): void {
      setTimeout(() => {
        this.player.pause();
        let playtrack = new PlayTrack('', '', '', '');
        this.notifier.notify(playtrack)
      }, 0);
  }

  onKeyDown(key, value): void {
    if(key == 'Enter'){
      this.requestPlaylists(value);
    }
  }

  searchClicked(value): void {
    this.requestPlaylists(value);
  }

  requestPlaylists(value): void {
    this.playlistService.getPlaylists(value)
      .subscribe(x => {
        this.playlists = x;
      })
  }

  playlistClicked(pid): void {
    this.router.navigate(['playlist', pid])
  }
}
