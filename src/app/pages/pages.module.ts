import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PipesModule } from '../pipes/pipes.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    HomeComponent,
    HeroDetailsComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    HeroDetailsComponent,
    ErrorPageComponent
  ]
})
export class PagesModule { }
