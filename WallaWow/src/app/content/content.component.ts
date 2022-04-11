import { Component, OnInit } from '@angular/core';
import {FavoritesService} from "../shared/services/favorites.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  items: Item[] = [];

  constructor(private favorites: FavoritesService) {
    favorites.getFavorite().subscribe((items: Item[]) => this.items = items);
  }

  ngOnInit(): void {
  }
}
