import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { MovieItem } from './movie-list.model';
import {BACKGROUND_COLORS} from './color.constants';

export interface MovieListState extends EntityState<MovieItem> {
  masterColor: string;
}

@StoreConfig({ name: 'movie-list' })
export class MovieListStore extends EntityStore<MovieListState> {

  constructor() {
    super({masterColor: BACKGROUND_COLORS[1]});
  }

}

export const movieListStore = new MovieListStore();
