import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '../environments/environment';
import {MovieListComponent} from './movie-list/movie-list.component';
import {ListItemComponent} from './movie-list/list-item/list-item.component';
import {ColorPatchComponent} from './movie-list/color-patch/color-patch.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialSharedModule} from './shared/material-shared.module';
import {AddMovieDialogComponent} from './movie-list/add-movie-dialog/add-movie-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialSharedModule,
    ReactiveFormsModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    MovieListComponent,
    ListItemComponent,
    ColorPatchComponent,
    AddMovieDialogComponent,
  ],
  entryComponents: [
    AddMovieDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
