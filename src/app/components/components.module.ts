import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { FavoritesComicsComponent } from './favorites-comics/favorites-comics.component';
@NgModule({
  declarations: [HeroCardComponent,SearchBarComponent, HeroListComponent, FavoritesComicsComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    SearchBarComponent,
    HeroListComponent,
    HeroCardComponent,
    FavoritesComicsComponent
  ]
})
export class ComponentsModule { }
