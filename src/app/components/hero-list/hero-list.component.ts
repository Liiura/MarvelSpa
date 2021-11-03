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
  subscription?: Subscription;
  constructor(private heroService :   HeroserviceService) { }

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

}
