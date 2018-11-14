import { Component } from '@angular/core';
import { SearchFilmsService } from './search-films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listFilms: object;
  filmsImageUrl = 'https://image.tmdb.org/t/p/w300/';
  constructor( private searchFilmsService: SearchFilmsService ) {}
  search(value) {
    this.searchFilmsService.searchFilms(value);
    console.log(this.searchFilmsService.url);

      this.searchFilmsService.listFilmsSubject$.subscribe(
      (list) => {
        console.log(list.results);
        this.listFilms = list.results;
      }
    );
  }


}
