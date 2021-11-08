import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroDetails/:id', component: HeroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
