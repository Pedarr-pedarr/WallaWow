import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ItemComponent} from './components/item/item.component';
import {LottieModule} from "ngx-lottie";

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [ClientService],
  exports: [
    ItemComponent
  ],
  bootstrap: []
})

export class SharedModule {
}
