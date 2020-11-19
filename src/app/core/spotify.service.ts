import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  get headers() {
    return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.spotifyToken}`});
  }

  getTrack(trackUri: string) {
    return this.http.get(`https://api.spotify.com/v1/tracks/${trackUri}`, {
      headers: this.headers
    })
  }

  get(trackUri: string): Observable<any> {
    return this.getTrack(trackUri.split(':')[2]);
  }
}
