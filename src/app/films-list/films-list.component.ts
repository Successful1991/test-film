import { Component, OnInit } from '@angular/core';
import { SearchFilmsService } from '../search-films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  constructor(private searchFilmsService: SearchFilmsService) { }
  listFilms: object;
  filmsImageUrl = this.searchFilmsService.imgUrl;

  ngOnInit() {
    this.searchFilmsService.getPopularFilms();
    this.searchFilmsService.listFilmsSubject$.subscribe(
      (list) => {
        console.log(list);
        this.listFilms = list.results;
      }
    );

  }

  getDetails(id) {
    this.searchFilmsService.filmsDetails(id);
  }


}
