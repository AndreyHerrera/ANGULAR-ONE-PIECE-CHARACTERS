import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { CharacterService } from './character.service';



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
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
