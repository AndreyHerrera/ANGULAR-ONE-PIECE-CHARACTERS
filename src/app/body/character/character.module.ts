import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CharacterComponent,
    AddComponent,
    ListComponent
  ],
  exports: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CharacterModule { }
