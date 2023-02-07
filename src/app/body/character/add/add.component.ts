import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interface/character.interface';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  constructor( private CharacterService : CharacterService ) {}


  @Input() newCharacter : Character = {
    name : ''
  }


  addCharacter(){
    if ( this.newCharacter.name.trim().length === 0){
      return;
    }

    this.CharacterService.addCharacter( this.newCharacter );

    this.newCharacter = {
      name: '',
      status: '',
    }
  }

}
