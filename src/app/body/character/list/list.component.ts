import { Component, Input } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent{
  get getCharacters() {
    return this.CharacterService.getCharacters;
  }

  constructor ( private CharacterService : CharacterService ) {
  }
}
