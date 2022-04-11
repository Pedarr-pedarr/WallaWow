import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FavoritesComponent} from "../../shared/components/modals/favorites/favorites.component";
import {Item} from "../../models/item";

export interface MenuItem {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() products: Item[] = [];
  items: MenuItem[] = [
    {
      title: 'My favorite',
      icon: 'assets/icons/favorite.svg'
    }
  ];

  constructor(private modal: NgbModal) {
  }

  ngOnInit(): void {
  }

  openFavorites() {
    const modalRef = this.modal.open(FavoritesComponent);
    modalRef.componentInstance.products = this.products.filter((product: Item) => product.favorite);
  }
}
