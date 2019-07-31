import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {movieListQuery} from './state/movie-list.query';
import {MovieItem} from './state/movie-list.model';
import {movieListService} from './state/movie-list.service';
import {MatDialog} from '@angular/material';
import {AddMovieDialogComponent} from './add-movie-dialog/add-movie-dialog.component';
import {ID} from '@datorama/akita';
import {MovieColorService} from './state/movie-color.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList$: Observable<MovieItem[]>;
  masterColor$: Observable<string>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.movieList$ = movieListQuery.selectAll();
    this.masterColor$ = movieListQuery.selectMasterColor();
  }

  trackByFn(index, item) {
    return item.id;
  }

  changeItemColor(movie: MovieItem) {
    movieListService.updateMovieColor(movie.id, MovieColorService.cycleColor(movie.color));
  }

  changeMasterColor() {
    movieListService.updateMasterColor(MovieColorService.cycleColor(movieListQuery.getMasterColor()));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMovieDialogComponent, { width: '400px', data: {} });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name) {
        movieListService.insertMovie(result.name, result.link) ;
      }
    });
  }

  deleteMovie(id: ID) {
    movieListService.deleteMovie(id);
  }
}
