import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularSvgIconModule} from "angular-svg-icon";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {SharedModule} from "../shared/shared.module";

import {ContentRoutingModule} from "./content-routing.module";

import {ContentComponent} from "./content.component";
import {ItemManagerComponent} from "./item-manager/item-manager.component";
import {MenuComponent} from './menu/menu.component';


@NgModule({
  declarations: [
    ContentComponent,
    ItemManagerComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    SharedModule,
    NgbModule,
    NgbModalModule,
    AngularSvgIconModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: []
})
export class ContentModule {
}
