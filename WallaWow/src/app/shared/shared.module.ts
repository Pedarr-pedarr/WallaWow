import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ItemComponent} from './components/item/item.component';
import {LottieModule} from "ngx-lottie";
import {StorageService} from "./services/storage.service";
import {FavoritesService} from "./services/favorites.service";
import {CommonModule} from "@angular/common";

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [
    StorageService,
    ClientService,
    FavoritesService
  ],
  exports: [
    ItemComponent
  ]
})

export class SharedModule {
}
