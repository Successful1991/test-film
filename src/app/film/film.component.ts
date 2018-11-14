import { Component, OnInit } from '@angular/core';
import { SearchFilmsService } from '../search-films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: object;
  filmImageUrl = this.searchFilmsService.imgUrl;
  constructor(private searchFilmsService: SearchFilmsService ) { }

  ngOnInit() {
    this.searchFilmsService.detailsFilmsSubject$.subscribe(
      (list) => {
        this.film = list;
        console.log(this.film);
      }
    );
  }

}
