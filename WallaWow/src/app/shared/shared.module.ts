import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularSvgIconModule} from "angular-svg-icon";
import {LottieModule} from "ngx-lottie";
import {CommonModule} from "@angular/common";

import {StorageService} from "./services/storage.service";
import {FavoritesService} from "./services/favorites.service";
import {ClientService} from "./services/client.service";

import {ItemComponent} from './components/item/item.component';
import {FavoritesComponent} from './components/modals/favorites/favorites.component';

import { SortPipe } from './pipes/sort.pipe';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    ItemComponent,
    FavoritesComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    LottieModule.forRoot({player: playerFactory}),
    AngularSvgIconModule
  ],
  providers: [
    StorageService,
    ClientService,
    FavoritesService
  ],
  exports: [
    ItemComponent,
    FavoritesComponent,
    SortPipe
  ]
})

export class SharedModule {
}
