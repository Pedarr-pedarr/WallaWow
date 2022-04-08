import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemManagerComponent} from './item-manager/item-manager.component';
import {SharedModule} from "./shared/shared.module";
import {LottieModule} from 'ngx-lottie';

/*export function playerFactory() {
  return import(/!* webpackChunkName: 'lottie-web' *!/ 'lottie-web');
}*/

@NgModule({
  declarations: [
    AppComponent,
    ItemManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
