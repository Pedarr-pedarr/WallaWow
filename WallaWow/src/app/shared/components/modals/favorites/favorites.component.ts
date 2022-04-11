import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../../../models/item";
import {FavoritesService} from "../../../services/favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() products: Item[] = [];

  constructor(public activeModal: NgbActiveModal,
              private favorites: FavoritesService) { }

  ngOnInit(): void {
    this.favorites.favorites$.subscribe((items: Item[]) => this.products = items.filter((item: Item) => item.favorite));
  }
}
