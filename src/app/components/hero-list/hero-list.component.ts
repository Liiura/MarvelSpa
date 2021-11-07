import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/interfaces/ICharacter';
import { HeroserviceService } from 'src/services/heroservice.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes? : RootObject;
  pagesArray: Number[] = [1,2,3,4,5];
  subscription?: Subscription;
  actualPage: Number = 0;
  constructor(private heroService :   HeroserviceService) {
   }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
   this.subscription = this.heroService.getCharacter().subscribe((heroes) =>{
      this.heroes = heroes;
    })
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  getPaginatedHeroes(pageNumber: number):void{
    this.actualPage = pageNumber;
    this.subscription = this.heroService.getCharacter(10*pageNumber).subscribe((heroes) =>{
      this.heroes = heroes;
    })
  }
  getActualPage():Number{
    return this.actualPage;
  }

}
