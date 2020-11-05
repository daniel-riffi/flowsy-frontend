import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/core/playlist.service';
import { Playlist } from 'src/app/models/playlist';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  playlist: Playlist = {};
  tracks: Track[] = [];
  recTracks: Track[] = [];

  constructor(private playlistService: PlaylistService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => {
      let pid = x.get('id')
      this.playlistService.getPlaylist(pid)
        .subscribe(x => {
          this.playlist = x;
        });
      this.playlistService.getTracksOfPlaylist(pid)
      .subscribe(x => {
        this.tracks = x;
      })
    })
  }

  getRecommendation(): void {
    this.playlistService.getRecommendation(this.playlist.pid)
      .subscribe(x => {
        this.recTracks = x;
      })
  }
}
