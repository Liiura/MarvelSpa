import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroserviceService } from 'src/services/heroservice.service';
import { Subscription } from 'rxjs';
import { RootObject } from 'src/interfaces/ICharacter';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  heroInfo? : RootObject;
  subscription?: Subscription;
  constructor(private router: Router, private heroService: HeroserviceService, private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getCharacter(String(this.route.snapshot.paramMap.get("id")))
  }
  routeToHome():void{
    this.router.navigateByUrl('');
  }
  getCharacter(id: string):void{
    this.subscription = this.heroService.getCharacterById(id).subscribe((hero) => {
      this.heroInfo = hero;
      console.log(this.heroInfo);
    })


  }
}
