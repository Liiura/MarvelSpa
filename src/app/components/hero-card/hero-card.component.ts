import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/interfaces/ICharacter';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
 @Input() heroInfo! :  ICharacter
  constructor() { }

  ngOnInit(): void {
  }

}
