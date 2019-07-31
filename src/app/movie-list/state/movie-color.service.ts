import {Injectable} from '@angular/core';
import {BACKGROUND_COLORS} from './color.constants';

@Injectable({providedIn: 'root'})
export class MovieColorService {

  constructor() { }

  static cycleColor(currentColor: string) {
    const currentColorIndex = BACKGROUND_COLORS.indexOf(currentColor);
    const foundColor = currentColorIndex !== -1;
    const colorsAmount = BACKGROUND_COLORS.length;

    const newColorIndex = foundColor ? (currentColorIndex + 1) % colorsAmount : 0;

    return BACKGROUND_COLORS[newColorIndex];
  }
}
