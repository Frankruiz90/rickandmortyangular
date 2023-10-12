import { PlacesService } from './../../services/places/places.service';
import { Info } from 'src/app/interface/character.intenface';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/interface/locations.interface';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  responseLocations: Location[] = [];
  infoPlaces!: Info;
  detailsLocation: Location = {};
  actualPage: any = localStorage.getItem('pagePlaces');

  constructor(private PlacesService: PlacesService) {}
  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces() {
    if (localStorage.getItem('dataPlaces')) {
      this.infoPlaces = JSON.parse(localStorage.getItem('infoPlaces') || '[]');
      this.responseLocations = JSON.parse(
        localStorage.getItem('dataPlaces') || '[]'
      );
    } else {
      this.PlacesService.getPlaces().subscribe({
        next: (data) => {
          this.infoPlaces = data.info;
          this.responseLocations = data.results;
          this.setStorage(1);
          return this.responseLocations;
        },
      });
    }
  }
  detailsPlace(place: any) {
    this.detailsLocation = place;
  }
  pageSelected(page: any) {
    this.PlacesService.getPlacesPage(page.pageIndex + 1).subscribe({
      next: (data) => {
        this.infoPlaces = data.info;
        this.responseLocations = data.results;
        this.setStorage(page);
        return this.responseLocations;
      },
    });
  }
  setStorage(page: any) {
    localStorage.setItem('infoPlaces', JSON.stringify(this.infoPlaces));
    localStorage.setItem('dataPlaces', JSON.stringify(this.responseLocations));
    this.actualPage = page.pageIndex;
    localStorage.setItem('pagePlaces', this.actualPage);
  }
}
