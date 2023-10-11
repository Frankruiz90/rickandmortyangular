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
          localStorage.setItem(
            'infoEpisodes',
            JSON.stringify(this.infoEpisodes)
          );
          localStorage.setItem(
            'dataEpisodes',
            JSON.stringify(this.responseEpisodes)
          );
          return this.responseEpisodes;
        },
      });
    }
  }
  detailsEpisode(episode: any) {
    this.detailsEpisodes = episode;
  }
}
