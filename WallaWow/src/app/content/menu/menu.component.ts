import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

import {FavoritesService} from "../../shared/services/favorites.service";

import {FavoritesComponent} from "../../shared/components/modals/favorites/favorites.component";

import {Item} from "../../models/item";


export interface MenuItem {
  title: string;
  icon: string;
  class: string;
  click: () => void;
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
      icon: 'assets/icons/favorite.svg',
      class: 'd-flex align-items-center justify-content-center justify-content-md-start menu-item p-3 px-4',
      click: () => this.isMobile ? this.router.navigate(['favourites']) : this.openFavorites()
    },
    {
      title: 'My items',
      icon: 'assets/icons/list.svg',
      class: 'd-flex d-md-none align-items-center justify-content-center justify-content-md-start menu-item p-3 px-4',
      click: () => this.router.navigate(['itemManager'])
    }
  ];
  products: Item[] = [];
  private modalRef?: NgbModalRef;
  private isMobile: boolean = false;

  @HostListener("window:resize", [])
  private onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  constructor(private modal: NgbModal,
              private router: Router,
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
    this.isMobile = window.innerWidth < 768;
  }

  openFavorites() {
    this.modalRef = this.modal.open(FavoritesComponent);
    this.modalRef.componentInstance.products = this.products;
    this.modalRef.componentInstance.mode = 'modal';
    this.modalRef.componentInstance.close = () => this.modalRef?.dismiss();
  }
}
