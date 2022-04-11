import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ItemComponent} from './components/item/item.component';
import {LottieModule} from "ngx-lottie";
import {StorageService} from "./services/storage.service";
import {FavoritesService} from "./services/favorites.service";
import {CommonModule} from "@angular/common";
import {FavoritesComponent} from './components/modals/favorites/favorites.component';
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularSvgIconModule} from "angular-svg-icon";

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    ItemComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
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
    ItemComponent
  ]
})

export class SharedModule {
}
