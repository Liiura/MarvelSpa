import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/interfaces/ICharacter';
import { HeroserviceService } from 'src/services/heroservice.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes : RootObject | undefined
  constructor(private heroService :   HeroserviceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getCharacter().subscribe((heroes) =>{
      this.heroes = heroes
    })
  }

}
