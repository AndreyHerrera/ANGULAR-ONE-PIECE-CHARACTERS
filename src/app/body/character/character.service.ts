import { Injectable } from '@angular/core';
import { Character } from './interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() {
  }


  private characters : Character[] = [
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


  get getCharacters() : Character [] {
    return [...this.characters];
  }


  addCharacter ( dataCharacter : Character ) {
    this.characters.push(dataCharacter)
   }
}
