import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { CharacterModule } from './character/character.module';



@NgModule({
  declarations: [
    BodyComponent
  ],
  exports:[
    BodyComponent
  ],
  imports: [
    CommonModule,
    CharacterModule
  ]
})
export class BodyModule { }
