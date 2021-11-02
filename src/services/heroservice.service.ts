import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICharacter } from 'src/interfaces/ICharacter';
@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

    private _url = 'http://gateway.marvel.com/v1/public/';

  constructor(
    private http: HttpClient
  ) { }
  getCharacter(): Observable<ICharacter[]> {
    const endpoint = 'characters'
    return this.http.get<ICharacter[]>(
      `${this._url}${endpoint}?limit=10&ts=1&apikey=97ea72d726c94283653ea1abec647e0f&hash=d640a299334c6908557ca1bff857fbc8`
    )
  }
}
