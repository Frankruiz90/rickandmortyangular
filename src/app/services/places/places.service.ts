import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { ApilocationsResponse } from 'src/app/interface/locations.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private apiRickAndMorty: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getPlaces(): Observable<ApilocationsResponse> {
    const url = `${this.apiRickAndMorty}/location`;

    return this.http.get<ApilocationsResponse>(url);
  }

  getPlacesPage(page: any): Observable<ApilocationsResponse> {
    const url = `${this.apiRickAndMorty}/location/?page=${page}`;
    return this.http.get<ApilocationsResponse>(url);
  }
}
