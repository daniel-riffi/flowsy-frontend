import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayService } from 'src/app/core/play.service';
import { PlaylistService } from 'src/app/core/playlist.service';
import { SpotifyService } from 'src/app/core/spotify.service';
import { Playlist } from 'src/app/models/playlist';
import { Track } from 'src/app/models/track';
import { Algorithm } from 'src/app/models/algorithm';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  playlist: Playlist = {};
  tracks: Track[] = [];
  recTracks: Track[] = [];

  algorithms: Algorithm[] = [
    new Algorithm(1, 'flowsy'),
    new Algorithm(2, 'flowsy old'),
    new Algorithm(3, 'ju')
  ]

  selectedAlgorithm: number = 1;

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

  getRecommendation(num): void {
    let n = Math.abs(Number(num));
    if (!isNaN(n)) {
      this.playlistService.getRecommendation(this.playlist.pid, n, Number(this.selectedAlgorithm))
        .subscribe(x => {
          this.recTracks = x;
        })
    }
  }
}
