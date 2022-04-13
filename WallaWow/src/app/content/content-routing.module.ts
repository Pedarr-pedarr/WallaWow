import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ItemManagerComponent} from "./item-manager/item-manager.component";
import {ContentComponent} from "./content.component";
import {FavoritesComponent} from "../shared/components/modals/favorites/favorites.component";
import {ItemsResolver} from "../shared/resolvers/items.resolver";

const routes: Routes = [
  {
    path:'',
    component: ContentComponent,
    children: [
      {
        path: 'itemManager',
        component: ItemManagerComponent,
        resolve: {
          items: ItemsResolver
        }
      },
      {
        path: 'favourites',
        component: FavoritesComponent,
        resolve: {
          items: ItemsResolver
        }
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
