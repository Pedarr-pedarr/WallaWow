import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ItemComponent} from './components/item/item.component';
import {LottieModule} from "ngx-lottie";

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
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [ClientService],
  exports: [
    ItemComponent
  ],
  bootstrap: []
})

export class SharedModule {
}
