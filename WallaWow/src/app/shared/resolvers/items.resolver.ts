import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {Item} from "../../models/item";
import {FavoritesService} from "../services/favorites.service";
import {first} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<Item[]> {
  constructor(private favorites: FavoritesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> {
    return this.favorites.getFavorite().pipe(
      first()
    );
  }
}
