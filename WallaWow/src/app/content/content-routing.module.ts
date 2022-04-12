import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemManagerComponent} from "./item-manager/item-manager.component";
import {ContentComponent} from "./content.component";

const routes: Routes = [
  {
    path:'',
    component: ContentComponent,
    children: [
      {
        path: 'itemManager',
        component: ItemManagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
