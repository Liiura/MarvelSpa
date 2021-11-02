import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/interfaces/ICharacter';
import { HeroserviceService } from 'src/services/heroservice.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes : ICharacter[] = []
  constructor(private heroService :   HeroserviceService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getCharacter().subscribe((hero) =>{
      console.log(hero[0].comics);
    })
  }

}
