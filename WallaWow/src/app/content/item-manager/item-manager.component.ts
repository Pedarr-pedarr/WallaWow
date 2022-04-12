import {Component, NgZone, OnInit} from '@angular/core';
import {FavoritesService} from "../../shared/services/favorites.service";
import {Item} from "../../models/item";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup;

  public trackItem (index: number, item: Item) {
    return this.items?.find((element: Item) => element.id === item.id);
  }

  constructor(public favorites: FavoritesService,
              private ng: NgZone) {
    this.favorites.favorites$.subscribe((items: Item[]) =>
      this.ng.run(() => this.items = items)
    );

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
}
