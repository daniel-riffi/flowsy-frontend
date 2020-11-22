import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class PlaylistOverviewComponent implements AfterViewInit, OnInit {

  playlists: Playlist[] = [];
  search: string;

  constructor(private playlistService: PlaylistService, 
    private router: Router, 
    private player: PlayService, 
    private notifier: NotifierService,
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      let s = x.get('s');
      this.search = s;
      this.requestPlaylists(s);
    })
  }
 
  ngAfterViewInit(): void {
      setTimeout(() => {
        this.player.pause();
        let playtrack = new PlayTrack('', '', '', '');
        this.notifier.notify(playtrack)
      }, 0);
  }

  onKeyDown(key, value): void {
    if(key == 'Enter'){
      this.router.navigate(['home', {s: value}])
      this.requestPlaylists(value);
    }
  }

  searchClicked(value): void {
    this.router.navigate(['home', {s: value}])
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
