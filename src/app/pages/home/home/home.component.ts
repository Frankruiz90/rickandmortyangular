import { Component, OnInit } from '@angular/core';
import { Character, Info } from 'src/app/interface/character.intenface';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  response: Character[] = [];
  info!: Info;
  actualPage: any = localStorage.getItem('page');
  characterDetails: Character = {};
  constructor(private CharactersService: CharactersService) {}
  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    if (localStorage.getItem('dataCharacters')) {
      this.info = JSON.parse(localStorage.getItem('info') || '[]');
      this.response = JSON.parse(
        localStorage.getItem('dataCharacters') || '[]'
      );
    } else {
      this.CharactersService.getCharacters().subscribe({
        next: (data) => {
          this.info = data.info;
          this.response = data.results;
          this.setStorage(1);
          return this.response;
        },
      });
    }
  }
  details(details: any) {
    this.characterDetails = details;
  }
  pageSelected(page: any) {
    this.CharactersService.getCharactersPage(page.pageIndex + 1).subscribe({
      next: (data) => {
        this.info = data.info;
        this.response = data.results;
        this.setStorage(page);
        return this.response;
      },
    });
  }
  setStorage(page: any) {
    localStorage.setItem('info', JSON.stringify(this.info));
    localStorage.setItem('dataCharacters', JSON.stringify(this.response));
    this.actualPage = page.pageIndex;
    localStorage.setItem('page', this.actualPage);
  }
}
