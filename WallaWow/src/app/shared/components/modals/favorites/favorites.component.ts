import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../../../models/item";


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() products: Item[] = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
