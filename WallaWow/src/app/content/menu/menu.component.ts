import {Component, NgZone, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FavoritesComponent} from "../../shared/components/modals/favorites/favorites.component";
import {Item} from "../../models/item";
import {FavoritesService} from "../../shared/services/favorites.service";

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
  items: MenuItem[] = [
    {
      title: 'My favourites',
      icon: 'assets/icons/favorite.svg'
    }
  ];
  products: Item[] = [];
  private modalRef?: NgbModalRef;

  constructor(private modal: NgbModal,
              private ng: NgZone,
              private favorites: FavoritesService) {
    favorites.favorites$.subscribe((items: Item[]) => {
      ng.run(() => {
        this.products = items.filter((product: Item) => product.favorite);
        if (!!this.modalRef && !!this.modalRef.componentInstance) {
          this.modalRef.componentInstance.products = this.products;
        }
      })
    });
  }

  ngOnInit(): void {
  }

  openFavorites() {
    this.modalRef = this.modal.open(FavoritesComponent);
    this.modalRef.componentInstance.products = this.products;
  }
}
