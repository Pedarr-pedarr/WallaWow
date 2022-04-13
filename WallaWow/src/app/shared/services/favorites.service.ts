import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {first, map, switchMap, tap} from "rxjs/operators";

import {ClientService} from "./client.service";
import {StorageService} from "./storage.service";

import {Item} from "../../models/item";
import {storageKeys} from "../../app.constants";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites$: Observable<Item[]>;
  private favoritesSubject: BehaviorSubject<Item[]> = new BehaviorSubject<any>([]);

  constructor(private storage: StorageService,
              private client: ClientService) {
    this.favoritesSubject = new BehaviorSubject<any>([]);
    this.favorites$ = this.favoritesSubject.asObservable();
  }

  getFavorite(updateFromApi: boolean = false): Observable<Item[]> {
    return combineLatest([
      this.favorites$.pipe(
        switchMap((res: Item[]) => {
          if (res.length === 0 || updateFromApi) {
            return this.client.get();
          } else {
            return of(res)
          }
        }),
        first()
      ),
      fromPromise(this.storage.get(storageKeys.storageFavorites))
    ]).pipe(
      map((res: [Item[], any]) => {
        const items = res[0];
        const storageItems = res[1];
        if (!!storageItems && storageItems.length > 0) {
          items.forEach((element: Item) => {
            if (storageItems.includes(element.id)) {
              element.favorite = true;
            }
          });
        }
        return items;
      }),
      tap((updatedElements: Item[]) => this.updateFavoriteObs(updatedElements))
    )
  }

  updateFavorite(item: Item): Observable<Item> {
    return fromPromise(this.storage.get(storageKeys.storageFavorites)).pipe(
      switchMap((storageItems: any[] | null) => {
        storageItems = (!!storageItems) ? storageItems : [];
        if (storageItems.includes(item.id)) {
          storageItems.splice(storageItems.indexOf(item.id), 1);
        } else {
          storageItems.push(item.id);
        }
        this.storage.set(storageKeys.storageFavorites, storageItems);
        return of(storageItems);
      }),
      switchMap((updatedElements: any[]) =>
        this.favorites$.pipe(
          map((res: Item[]) => {
            if (!!updatedElements && updatedElements.length > 0) {
              res.forEach((element: Item) => element.favorite = updatedElements.includes(element.id));
            }
            return res;
          })
        )),
      first(),
      tap((updatedElements: Item[]) => this.updateFavoriteObs(updatedElements)),
      switchMap((updatedElements: Item[]) => {
        if (!!updatedElements.find((element: Item) => element.id === item.id)) {
          return of(updatedElements.find((element: Item) => element.id === item.id)!);
        } else {
          return of(item);
        }
      })
    )
  }

  private updateFavoriteObs(elements: Item[]) {
    this.favoritesSubject.next(elements);
  }
}
