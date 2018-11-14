import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchFilmsService} from "./search-films.service";
import {Routes, RouterModule} from "@angular/router";
import { FilmComponent } from './film/film.component';
import { FilmsListComponent } from './films-list/films-list.component';

const routes: Routes = [
  { path: '',  component: FilmsListComponent , pathMatch: 'full' },
  { path: 'detail/:id', component: FilmComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HttpClientModule,
    SearchFilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
