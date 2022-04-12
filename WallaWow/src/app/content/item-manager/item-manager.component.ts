import {Component, NgZone, OnInit} from '@angular/core';
import {FavoritesService} from "../../shared/services/favorites.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];

  public trackItem (index: number, item: Item) {
    return this.items?.find((element: Item) => element.id === item.id);
  }

  constructor(public favorites: FavoritesService,
              private ng: NgZone) {
    this.favorites.favorites$.subscribe((items: Item[]) =>
      this.ng.run(() => this.items = items)
    );
  }

  ngOnInit(): void {
  }

  tracking(index: number, item: Item) {
    return `${index}-${item.id}- ${item.favorite}`;
  }
}
