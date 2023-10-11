import { Character } from 'src/app/interface/character.intenface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() character: Character = {};
  @Output() detailsSelect = new EventEmitter<any>();
  dataCaracter: any[] = [];
  details(id?: String) {
    this.dataCaracter = JSON.parse(
      localStorage.getItem('dataCharacters') || '[]'
    ).filter(function (e: any) {
      return e.id == id;
    });
    this.detailsSelect.emit(this.dataCaracter[0]);
  }
}
