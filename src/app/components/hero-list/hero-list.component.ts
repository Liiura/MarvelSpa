import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/interfaces/ICharacter';
import { HeroserviceService } from 'src/services/heroservice.service';
import { RootObjectComic } from 'src/interfaces/IComicDetails';
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
  allFavoriteComics: RootObjectComic[] = [];
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
  insertFavoriteComic(favoriteComic:RootObjectComic):void{
    this.allFavoriteComics.push(favoriteComic);
  } 
  deleteFavoriteComic(index:number):void{
    this.allFavoriteComics.splice(index,1);
    console.log(this.allFavoriteComics);
  }
  sortByDate():void{
    if(this.heroes){
      this.heroes.data.results.sort(function(a,b){
        return new Date(a.modified).getTime() - new Date(b.modified).getTime();
      });
    }
  }
  sortByName():void{
    if(this.heroes){
      this.heroes.data.results.sort((a, b) => a.name.localeCompare(b.name))
    }
  }
  onChange(sortType?: string):void {
    if(sortType === "1"){
      this.sortByName();
    }else{
      this.sortByDate();
    }
}
}
