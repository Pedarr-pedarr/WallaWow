import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../../../models/item";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor(private route: ActivatedRoute) {
    if (!!route.snapshot.data.items) {
      this.products = route.snapshot.data.items.filter((item: Item) => item.favorite) || [];
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
