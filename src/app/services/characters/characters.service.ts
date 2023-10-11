import { HttpClient } from '@angular/common/http';
import { environment } from './../../../enviroment/enviroment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCharactersResponse } from 'src/app/interface/character.intenface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiRickAndMorty: string = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getCharacters(): Observable<ApiCharactersResponse> {
    const url = `${this.apiRickAndMorty}/character`;

    return this.http.get<ApiCharactersResponse>(url);
  }
}
