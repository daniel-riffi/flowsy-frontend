import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistOverviewComponent } from './playlist-overview/playlist-overview.component';
import { FormsModule } from '@angular/forms';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PlaylistOverviewComponent, RecommendationComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule
  ],
  exports: [PlaylistOverviewComponent]
})
export class PlaylistModule { }
