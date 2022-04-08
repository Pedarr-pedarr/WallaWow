import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../models/item";

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.scss']
})
export class ItemManagerComponent implements OnInit {
  items: Item[] = [];

  constructor(private route: ActivatedRoute) {
    this.items = route.snapshot.data.items;
  }

  ngOnInit(): void {
  }

}
