import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../models/item";
import {FavoritesService} from "../../shared/services/favorites.service";

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];

  constructor(private route: ActivatedRoute,
              private favorites: FavoritesService) {
    this.items = route.snapshot.data.items;
    this.favorites.favorites$.subscribe((items: Item[]) => {
      //console.log(items);
      this.items = items;
    });
  }

  ngOnInit(): void {
  }

}
