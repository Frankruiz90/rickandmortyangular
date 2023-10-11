import { Component, Input, AfterContentChecked } from '@angular/core';
import { Character } from 'src/app/interface/character.intenface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterContentChecked {
  @Input() dataCharacter: Character = {};

  ngAfterContentChecked(): void {
    console.log('datacharacter', this.dataCharacter);
  }
}
