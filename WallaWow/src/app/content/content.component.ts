import {Component, OnInit} from '@angular/core';

import {FavoritesService} from "../shared/services/favorites.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private favorites: FavoritesService) {
    favorites.getFavorite().subscribe();
  }

  ngOnInit(): void {
  }
}
