import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayTrack } from '../models/play-track';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  private playTrackRepo = new Subject<PlayTrack>()

  constructor() { }

  public notify(msg: PlayTrack): void {
    this.playTrackRepo.next(msg);
  }

  public listen(): Observable<PlayTrack> {
    return this.playTrackRepo.asObservable();
  }
}
