import { Component } from '@angular/core';
import { Character } from './interface/character.interface';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {

  characters : Character[] = [
    {
      name: 'MONKEY D. LUFFY',
      status: 'ALIVE',
      age: 19
    },
    {
      name: 'RORONAO ZORO',
      status: 'ALIVE',
      age: 21
    }
  ];

  addNewCharacter( arg : Character){
    this.characters.push(arg)
  }

}
