import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interface/character.intenface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() dataCharacter: Character = {};
}
