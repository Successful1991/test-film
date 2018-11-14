import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

// import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchFilmsService {
  url = 'https://api.themoviedb.org/3';
  apiKey = '?api_key=42eb07120b6d61220ed0b80d3a0097f0';
  listFilmsSubject$: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: HttpClient
  ) { }
  @Injectable()
  searchFilms(name) {
    const urlParam = '&query=' + name;
    this.getSearchResult('/search/multi', urlParam, this.handlerListFilms );
  }

  getSearchResult(action, param, handler) {
    const handler =  handler;
    this.http.get(
      this.url + action + this.apiKey + param
    ).subscribe(
      (data) => {
        console.log(handler);
        handler.call(this, data);
        // this.listFilmsSubject$.emit(data);
      }
    );
  }

  handlerListFilms(data) {
    this.listFilmsSubject$.emit(data);
  }


}
