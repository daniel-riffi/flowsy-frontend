import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/core/playlist.service';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-playlist-overview',
  templateUrl: './playlist-overview.component.html',
  styleUrls: ['./playlist-overview.component.scss']
})
export class PlaylistOverviewComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService, private router: Router){}

  ngOnInit(): void {
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
