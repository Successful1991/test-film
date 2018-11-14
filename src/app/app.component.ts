import { Component } from '@angular/core';
import { SearchFilmsService } from './search-films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private searchFilmsService: SearchFilmsService ) {}
  search(value) {
    this.searchFilmsService.searchFilms(value);
    console.log(this.searchFilmsService.url);
  }





}
