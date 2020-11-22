import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string;

  constructor(private http: HttpClient) {
    this.http.get<string>('http://10.0.0.3:5000/token')
      .subscribe(x => {
        this.token = x;
      })
  }

  get headers() {
    return new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`});
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
