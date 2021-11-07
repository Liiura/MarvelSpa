import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComicsComponent } from './favorites-comics.component';

describe('FavoritesComicsComponent', () => {
  let component: FavoritesComicsComponent;
  let fixture: ComponentFixture<FavoritesComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
