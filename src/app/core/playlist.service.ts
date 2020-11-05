import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  urlBase: string = 'http://10.0.0.3:5000';

  constructor(private http: HttpClient) { }

  getPlaylists(searchString): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.urlBase}/search/${searchString}`);
  }

  getPlaylist(pid): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.urlBase}/playlist/${pid}`);
  }

  getTracksOfPlaylist(pid): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.urlBase}/tracks/${pid}`)
  }

  getRecommendation(pid, n): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.urlBase}/recommendation/${pid}?n=${n}`);
  }
}
