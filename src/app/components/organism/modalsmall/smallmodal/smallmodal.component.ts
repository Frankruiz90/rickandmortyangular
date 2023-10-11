import { Component, Input } from '@angular/core';
import { Episodes } from 'src/app/interface/episodes.interface';
import { Location } from 'src/app/interface/locations.interface';

@Component({
  selector: 'app-smallmodal',
  templateUrl: './smallmodal.component.html',
  styleUrls: ['./smallmodal.component.scss'],
})
export class SmallmodalComponent {
  @Input() dataPlace: Location = {};
  @Input() dataEpisode: Episodes = {};
}
