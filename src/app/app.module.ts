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
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    MovieListComponent,
    ListItemComponent,
    ColorPatchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
