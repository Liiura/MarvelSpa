import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [HeroCardComponent,SearchBarComponent, HeroListComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    SearchBarComponent,
    HeroListComponent,
    HeroCardComponent
  ]
})
export class ComponentsModule { }
