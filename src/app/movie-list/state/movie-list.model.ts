import { ID } from '@datorama/akita';

export interface MovieItem {
  id: ID;
  name: string;
  imdbLink: string;
  color?: string;
}
