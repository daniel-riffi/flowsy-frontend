import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  urlBase: string = 'http://10.0.0.6:5000';

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

  getRecommendation(pid, n, algorithm): Observable<Track[]> {
    switch(algorithm){
      case 1:
        return this.http.get<Track[]>(`${this.urlBase}/recommendationsOfFlowsy/${pid}?n=${n}`);
      case 2: 
        return this.http.get<Track[]>(`${this.urlBase}/recommendationsOfFlowsyv1/${pid}?n=${n}`);
      case 3:
        return this.http.get<Track[]>(`${this.urlBase}/recommendationsOfJu/${pid}?n=${n}`);
    }
  }
}
