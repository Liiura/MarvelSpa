import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Result } from 'src/interfaces/ICharacter';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HeroserviceService } from 'src/services/heroservice.service';
import { RootObjectComic } from 'src/interfaces/IComicDetails';
import { Subscription } from 'rxjs';
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
  constructor(private modalService: NgbModal, private heroService : HeroserviceService) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }
  open(content: any,resourceUri: string) {
    this.getComicDetails(resourceUri);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
      this.closeResult = `Closed with: ${result}`;
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
}
