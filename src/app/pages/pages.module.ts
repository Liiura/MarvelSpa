import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { HeroDetailsComponent } from './hero-details/hero-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    HeroDetailsComponent
  ]
})
export class PagesModule { }
