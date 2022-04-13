import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

import {FavoritesService} from "../../shared/services/favorites.service";

import {Item} from "../../models/item";


@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup;

  constructor(private favorites: FavoritesService,
              private route: ActivatedRoute,
              private ng: NgZone) {
    this.items = route.snapshot.data.items.slice(0,6);

    this.form = new FormGroup({
      search: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  tracking(index: number, item: Item) {
    return `${index}-${item.id}- ${item.favorite}`;
  }

  search(): string {
    return this.form?.get('search')?.value;
  }

  clearForm() {
    this.form.get('search')?.setValue(null);
    this.form.get('search')?.updateValueAndValidity();
  }

  loadMore() {
    this.favorites.favorites$.subscribe((items: Item[]) =>
      this.ng.run(() => this.items = [...this.items, ...items.slice(this.items.length, this.items.length+6)])
    );
  }
}
