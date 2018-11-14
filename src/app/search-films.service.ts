import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SearchFilmsService {
  url = 'https://api.themoviedb.org/3';
  imgUrl = 'https://image.tmdb.org/t/p/w300/';
  apiKey = '?api_key=42eb07120b6d61220ed0b80d3a0097f0';
  listFilmsSubject$: EventEmitter<any> = new EventEmitter<any>();
  detailsFilmsSubject$: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: HttpClient
  ) { }
  @Injectable()

  searchFilms(name) {
    const urlParam = '&query=' + name;
    this.getSearchResult('/search/multi', urlParam, this.handlerListFilms );
  }

  filmsDetails(id) {
    this.getSearchResult('/movie' + id, '', this.handlerFilmsDetails );
  }
  getPopularFilms() {
    this.getSearchResult('/movie/popular', '', this.handlerListFilms );
  }

  getSearchResult(action, param, handler ) {
    console.log('get');
    this.http.get(
      this.url + action + this.apiKey + param
    ).subscribe(
      (data) => {handler.call(this, data); }
    );
  }

  handlerListFilms(data) {

    this.listFilmsSubject$.emit(data);
  }

  handlerFilmsDetails(data) {
    this.detailsFilmsSubject$.emit(data);
  }


}
