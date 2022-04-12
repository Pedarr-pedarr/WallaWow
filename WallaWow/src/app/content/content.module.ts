import {NgModule} from '@angular/core';
import {ContentComponent} from "./content.component";
import {ContentRoutingModule} from "./content-routing.module";
import {SharedModule} from "../shared/shared.module";
import {ItemManagerComponent} from "./item-manager/item-manager.component";
import {CommonModule} from "@angular/common";
import {MenuComponent} from './menu/menu.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    AngularSvgIconModule.forRoot()
  ],
  providers: []
})
export class ContentModule {
}
