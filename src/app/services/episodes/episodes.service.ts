import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { ApiEpisodesResponse } from 'src/app/interface/episodes.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private apiRickAndMorty: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getEpisodes(): Observable<ApiEpisodesResponse> {
    const url = `${this.apiRickAndMorty}/episode`;
    return this.http.get<ApiEpisodesResponse>(url);
  }
  getEpisodesPage(page: any): Observable<ApiEpisodesResponse> {
    const url = `${this.apiRickAndMorty}/episode/?page=${page}`;
    return this.http.get<ApiEpisodesResponse>(url);
  }
}
