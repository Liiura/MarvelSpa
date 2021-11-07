import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/interfaces/ICharacter';
import { HeroserviceService } from 'src/services/heroservice.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes? : RootObject;
  pagesArray: Number[] = [1,2,3,4,5];
  subscription?: Subscription;
  actualPage: number = 0;
  @Input() heroNameToFind: string = ""
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
  ngOnDestroy():void {
    this.subscription?.unsubscribe();
  }
  getPaginatedHeroes(pageNumber: number):void{
    if(pageNumber <0 || pageNumber > 4){
      pageNumber = 0;
    }
    this.actualPage = pageNumber;
    this.subscription = this.heroService.getCharacter(10*pageNumber).subscribe((heroes) =>{
      this.heroes = heroes;
    })
  }
  getActualPage():number{
    return this.actualPage;
  }
  FindHero():void{
      if(this.heroNameToFind !== ""){
        if(this.heroes?.data?.results){
          this.heroes.data.results = this.heroes?.data.results.filter(o =>
            Object.keys(o).some(k =>  o.name.toLowerCase().includes(this.heroNameToFind.toLowerCase())));
        }
      }else{
        this.getPaginatedHeroes(this.actualPage);
      }
  }
  ngOnChanges() {
     this.FindHero();
    }   

}
