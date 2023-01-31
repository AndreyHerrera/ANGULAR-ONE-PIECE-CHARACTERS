import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() newCharacter : Character = {
    name : ''
  }

  @Output() onNewCharacter : EventEmitter<Character> = new EventEmitter();

  addCharacter(){
    if ( this.newCharacter.name.trim().length === 0){
      return;
    }
    this.onNewCharacter.emit(this.newCharacter)
    this.newCharacter = {
      name: '',
      status: '',
    }
  }

}
