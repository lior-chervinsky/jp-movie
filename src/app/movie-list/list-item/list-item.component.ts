import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MovieItem} from '../state/movie-list.model';
import {movieListQuery} from '../state/movie-list.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() movieItem: MovieItem;
  itemColor$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.itemColor$ = movieListQuery.selectItemColor(this.movieItem.id);
  }

}
