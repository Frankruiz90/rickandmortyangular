import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interface/character.intenface';
import { Episodes } from 'src/app/interface/episodes.interface';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  responseEpisodes: Episodes[] = [];
  infoEpisodes!: Info;
  detailsEpisodes: Episodes = {};
  actualPage: any = localStorage.getItem('pageEpisodes');
  constructor(private EpisodesService: EpisodesService) {}
  ngOnInit(): void {
    this.getApiEpisodes();
  }
  getApiEpisodes() {
    if (localStorage.getItem('dataEpisodes')) {
      this.infoEpisodes = JSON.parse(
        localStorage.getItem('infoEpisodes') || '[]'
      );
      this.responseEpisodes = JSON.parse(
        localStorage.getItem('dataEpisodes') || '[]'
      );
    } else {
      this.EpisodesService.getEpisodes().subscribe({
        next: (data) => {
          this.infoEpisodes = data.info;
          this.responseEpisodes = data.results;
          this.setStorage(1);
          return this.responseEpisodes;
        },
      });
    }
  }
  detailsEpisode(episode: any) {
    this.detailsEpisodes = episode;
  }
  pageSelected(page: any) {
    this.EpisodesService.getEpisodesPage(page.pageIndex + 1).subscribe({
      next: (data) => {
        this.infoEpisodes = data.info;
        this.responseEpisodes = data.results;
        this.setStorage(page);
        return this.responseEpisodes;
      },
    });
  }
  setStorage(page: any) {
    localStorage.setItem('info', JSON.stringify(this.infoEpisodes));
    localStorage.setItem(
      'dataCharacters',
      JSON.stringify(this.responseEpisodes)
    );
    this.actualPage = page.pageIndex;
    localStorage.setItem('pageEpisodes', this.actualPage);
  }
}
