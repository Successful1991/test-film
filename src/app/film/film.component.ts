import { Component, OnInit } from '@angular/core';
import { SearchFilmsService } from '../search-films.service';
import { FilmInterface } from '../films-interface/film-interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: FilmInterface;
  filmImageUrl = this.searchFilmsService.imgUrl;
  constructor(private searchFilmsService: SearchFilmsService ) { }

  ngOnInit() {
    this.searchFilmsService.filmsDetails(window.location.pathname);

    this.searchFilmsService.detailsFilmsSubject$.subscribe(
      (list) => {
        this.film = list;
        console.log(this.film);
      }
    );
  }

}
