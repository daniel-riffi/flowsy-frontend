import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { NotifierService } from 'src/app/core/notifier.service';
import { Track } from 'src/app/models/track';

@Component({
  selector: '[track-row]',
  templateUrl: './track-row.component.html',
  styleUrls: ['./track-row.component.scss']
})
export class TrackRowComponent implements OnInit {

  @Input() track: Track;
  @Input() pos: number;

  playing: string = '';

  constructor(private notifier: NotifierService) { }

  ngOnInit(): void {
    this.notifier.listen()
      .subscribe(x => {
        this.playing = '';
        if(x.status != 'No preview available'){
          this.playing = x.trackUri == this.track.track_uri ? 'playing' : '';
        }
      })
  }
}
