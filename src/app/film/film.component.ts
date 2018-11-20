import { Component, OnInit } from '@angular/core';
import { SearchFilmsService } from '../search-films.service';
import { FilmInterface } from '../films-interface/film-interface';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: FilmInterface;
  filmImageUrl = this.searchFilmsService.imgUrl;
  constructor(
    private searchFilmsService: SearchFilmsService,
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
    this.getFilmStorage();
    this.searchFilmsService.detailsFilmsSubject$.subscribe(
      (list) => {
        this.film = list;
        this.localStorage.setItem( ('/detail/' + this.film.id), this.film ).subscribe(() => {}, () => {console.log('err'); });
      }
    );
  }

  getFilmStorage() {
    const id = window.location.pathname;
    if (id) {
      this.localStorage.getItem<FilmInterface>( id )
        .subscribe((data) => {
        console.log(data);
          this.film = data;
        });
    }
  }


}
