import {MovieListStore, movieListStore} from './movie-list.store';
import {ID} from '@datorama/akita';

export class MovieListService {
  id = 1;
  constructor(private store: MovieListStore) {}

  insertMovie(name: string, imdbLink: string, color?: string) {
    movieListStore.add({id: this.id++, name, imdbLink, color});
  }

  updateMovieColor(id: ID, newColor: string) {
    this.store.update(id, {color: newColor});
  }

  updateMasterColor(masterColor: string) {
    this.store.update({masterColor});
  }
}

export const movieListService = new MovieListService(movieListStore);
