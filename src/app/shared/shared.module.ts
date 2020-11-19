import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayButtonComponent } from './play-button/play-button.component';
import { TrackRowComponent } from './track-row/track-row.component';



@NgModule({
  declarations: [PlayButtonComponent, TrackRowComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayButtonComponent, TrackRowComponent]
})
export class SharedModule { }
