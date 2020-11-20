import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotifierService } from './core/notifier.service';
import { PlayService } from './core/play.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  image: string = '';
  status: string = '';
  trackName: string = '';

  constructor(private notifier: NotifierService){}

  ngOnInit(): void {
    this.notifier.listen()
      .subscribe(x => {
        this.image = x.image;
        this.status = x.status;
        this.trackName = x.trackName;
      })
    }
}
