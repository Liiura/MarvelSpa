import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/interfaces/ICharacter';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HeroserviceService } from 'src/services/heroservice.service';
import { RootObjectComic } from 'src/interfaces/IComicDetails';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit, OnDestroy {
 @Input() heroInfo? : Result
 comicDetails? : RootObjectComic; 
 closeResult = '';
 subscription?: Subscription;
 @Output() favoriteComic = new EventEmitter<RootObjectComic>();
 @Output() deletefavoriteComic = new EventEmitter<number>();
 @Input() currentFavoriteComics : RootObjectComic[] = []
  constructor(private modalService: NgbModal, private heroService : HeroserviceService,private router: Router) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }
  open(content: any,resourceUri: string) {
    this.getComicDetails(resourceUri);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(this.comicDetails && result !== "deleteFavorite" ){
        this.favoriteComic.emit(this.comicDetails);
      }
      this.closeResult = `Closed with: ${result}`;
      if(result === "deleteFavorite"){
        this.spliceFavoriteComic();
      }
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getComicDetails(resourceUri: string){
    this.heroService.getComicById(resourceUri).subscribe((comic) =>{
      this.comicDetails = comic;
    })
  }
  spliceFavoriteComic():void{
    if(this.comicDetails){
      let savedIndex = 0;
      for( var i = 0; i < this.currentFavoriteComics.length; i++){ 
        if(this.currentFavoriteComics[i].data.results[0].id === this.comicDetails.data.results[0].id) {
          savedIndex = i;
        }
      }
      this.deletefavoriteComic.emit(savedIndex);
    }
  }
  searchComic():boolean{
    if(this.comicDetails){
      let comicToFind = this.currentFavoriteComics.find(comic => comic.data.results[0].id === this.comicDetails?.data.results[0].id);
      if(comicToFind){
        return true;
      }
      return false;
    }
    return false;
  }
  routeToDetails(id?: number):void {
    this.router.navigateByUrl(`/heroDetails/${id}`);
};
}
