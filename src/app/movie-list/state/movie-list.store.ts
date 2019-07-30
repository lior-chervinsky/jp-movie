import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MovieItem } from './movie-list.model';

export interface MovieListState extends EntityState<MovieItem> {
  masterColor: string;
}

@StoreConfig({ name: 'movie-list' })
export class MovieListStore extends EntityStore<MovieListState> {

  constructor() {
    super({baseColor: 'blue'});
  }

}

export const movieListStore = new MovieListStore();
