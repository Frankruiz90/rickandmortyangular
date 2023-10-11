import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { EpisodesComponent } from './pages/episodes/episodes/episodes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'places',
    component: PlacesComponent,
    pathMatch: 'full',
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
