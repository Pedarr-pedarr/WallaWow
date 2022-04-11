import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ItemComponent} from './components/item/item.component';
import {LottieModule} from "ngx-lottie";
import {StorageService} from "./services/storage.service";
import {FavoritesService} from "./services/favorites.service";

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LottieModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [
    StorageService,
    ClientService,
    FavoritesService
  ],
  exports: [
    ItemComponent
  ],
  bootstrap: []
})

export class SharedModule {
}
