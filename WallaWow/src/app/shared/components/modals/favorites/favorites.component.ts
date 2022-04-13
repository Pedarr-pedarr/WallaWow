import {Component, Input, NgZone} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

import {FavoritesService} from "../../../services/favorites.service";

import {Item} from "../../../../models/item";

export type Mode = 'modal' | 'default';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  @Input() products: Item[] = [];
  @Input() mode: Mode = 'default';
  //@ts-ignore
  close: () => void;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private ng: NgZone,
              private favorite: FavoritesService) {
    if (!!route.snapshot.data.items) {
      this.products = route.snapshot.data.items.filter((item: Item) => item.favorite) || [];
      favorite.favorites$.subscribe((items: Item[]) =>
        this.ng.run(() => this.products = items.filter((item: Item) => item.favorite))
      );
    }

    this.form = new FormGroup({
      search: new FormControl(null)
    });
  }

  search(): string {
    return this.form?.get('search')?.value;
  }

  clearForm() {
    this.form.get('search')?.setValue(null);
    this.form.get('search')?.updateValueAndValidity();
  }
}
