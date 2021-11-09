import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RootObject } from 'src/interfaces/ICharacter';
import { RootObjectComic } from 'src/interfaces/IComicDetails';
@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

    private _url = 'https://gateway.marvel.com/v1/public/';

  constructor(
    private http: HttpClient
  ) { }
  getCharacter(offset: number = 0, limit: number = 10): Observable<RootObject> {
    const endpoint = 'characters'
    if(offset === 0){
          return this.http.get<RootObject>(
      `${this._url}${endpoint}?limit=${limit}&ts=1&apikey=97ea72d726c94283653ea1abec647e0f&hash=d640a299334c6908557ca1bff857fbc8`
      )
    }
    return this.http.get<RootObject>(
      `${this._url}${endpoint}?offset=${offset}limit=${limit}&ts=1&apikey=97ea72d726c94283653ea1abec647e0f&hash=d640a299334c6908557ca1bff857fbc8`
    )
  }
  getComicById(resourceUri: string): Observable<RootObjectComic>{
    const endpoint = 'comics'
    return this.http.get<RootObjectComic>(
      `${resourceUri}?ts=1&apikey=97ea72d726c94283653ea1abec647e0f&hash=d640a299334c6908557ca1bff857fbc8`
    )

  }
  getCharacterById(id: string): Observable<RootObject> {
    const endpoint = 'characters'
    return this.http.get<RootObject>(
      `${this._url}${endpoint}/${id}?ts=1&apikey=97ea72d726c94283653ea1abec647e0f&hash=d640a299334c6908557ca1bff857fbc8`
    )
  }
}
