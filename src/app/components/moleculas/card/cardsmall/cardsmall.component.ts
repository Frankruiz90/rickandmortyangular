import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episodes } from 'src/app/interface/episodes.interface';
import { Location } from 'src/app/interface/locations.interface';

@Component({
  selector: 'app-cardsmall',
  templateUrl: './cardsmall.component.html',
  styleUrls: ['./cardsmall.component.scss'],
})
export class CardsmallComponent {
  @Input() place: Location = {};
  @Input() episode: Episodes = {};
  @Output() detailsPlace = new EventEmitter<any>();
  @Output() detailsEpisode = new EventEmitter<any>();
  dataPlace: any[] = [];
  dataEpisode: any[] = [];
  details(id?: String) {
    if (Object.keys(this.place).length >= 1) {
      this.dataPlace = JSON.parse(
        localStorage.getItem('dataPlaces') || '[]'
      ).filter(function (e: any) {
        return e.id == id;
      });
      this.detailsPlace.emit(this.dataPlace[0]);
    } else {
      this.dataPlace = JSON.parse(
        localStorage.getItem('dataEpisodes') || '[]'
      ).filter(function (e: any) {
        return e.id == id;
      });
      this.detailsEpisode.emit(this.dataPlace[0]);
    }
  }
}
