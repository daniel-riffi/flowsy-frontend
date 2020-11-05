import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistOverviewComponent } from './playlist-overview/playlist-overview.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
  { path: '', component: PlaylistOverviewComponent },
  { path: 'playlist/:id', component: RecommendationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
