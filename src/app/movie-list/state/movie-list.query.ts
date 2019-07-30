import {ID, QueryEntity} from '@datorama/akita';
import {MovieListState, MovieListStore, movieListStore} from './movie-list.store';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class MovieListQuery extends QueryEntity<MovieListState> {

  constructor(protected store: MovieListStore) {
    super(store);
  }

  selectItemColor(id: ID): Observable<string> {
    const movieItemColor$ = this.selectEntity(id).pipe(map(movie => movie.color));
    const masterColor$ = this.store._select(store => store.masterColor);

    return combineLatest(movieItemColor$, masterColor$)
      .pipe(
        map(([movieItemColor, masterColor]) => movieItemColor || masterColor),
        // tap(color => console.log(`combined color - ${color}`))
      );
  }

  getMasterColor(): string {
    return this.getValue().masterColor;
  }

  selectMasterColor(): Observable<string> {
    return this.store._select(store => store.masterColor );
  }
}

export const movieListQuery = new MovieListQuery(movieListStore);
