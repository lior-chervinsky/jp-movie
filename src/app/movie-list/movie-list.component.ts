import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {movieListQuery} from './state/movie-list.query';
import {MovieItem} from './state/movie-list.model';
import {movieListService} from './state/movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList$: Observable<MovieItem[]>;
  masterColor$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.movieList$ = movieListQuery.selectAll();
    this.masterColor$ = movieListQuery.selectMasterColor();
    // fixme REMOVE
    movieListService.insertMovie('name', 'link');
    movieListService.insertMovie('name2', 'link');
    movieListService.insertMovie('name3', 'link');
  }

  trackByFn(index, item) {
    return item.id;
  }

  changeItemColor(movie: MovieItem) {
    const newColor: string = movie.color === 'blue' ? 'red' : 'blue';
    movieListService.updateMovieColor(movie.id, newColor);
  }

  changeMasterColor() {
    const newColor: string = movieListQuery.getMasterColor() === 'red' ? 'blue' : 'red';
    movieListService.updateMasterColor(newColor);
  }
}
