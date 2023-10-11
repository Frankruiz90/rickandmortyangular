import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/moleculas/navbar/navbar.component';
import { CardComponent } from './components/moleculas/card/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home/home.component';
import { ModalComponent } from './components/organism/modal/modal.component';
import { PlacesComponent } from './pages/places/places.component';
import { CardsmallComponent } from './components/moleculas/card/cardsmall/cardsmall.component';
import { SmallmodalComponent } from './components/organism/modalsmall/smallmodal/smallmodal.component';
import { EpisodesComponent } from './pages/episodes/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    ModalComponent,
    PlacesComponent,
    CardsmallComponent,
    SmallmodalComponent,
    EpisodesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
