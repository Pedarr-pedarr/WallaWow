import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemManagerComponent} from "./item-manager/item-manager.component";
import {ItemsResolver} from "./shared/resolvers/items.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'itemManager',
    pathMatch: 'full',
  },
  {
    path: 'itemManager',
    component: ItemManagerComponent,
    resolve: {
      items: ItemsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
