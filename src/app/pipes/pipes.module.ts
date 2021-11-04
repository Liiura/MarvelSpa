import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitWordsPipe } from './limit-words.pipe';


@NgModule({
  declarations: [LimitWordsPipe],
  imports: [
    CommonModule
  ],
  exports:[
    LimitWordsPipe
  ]
})
export class PipesModule { }
