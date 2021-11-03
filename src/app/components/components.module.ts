import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [HeroCardComponent,SearchBarComponent, HeroListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    HeroListComponent,
    HeroCardComponent
  ]
})
export class ComponentsModule { }
