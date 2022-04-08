import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {AnimationOptions} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item | undefined;
  lottieOpts: AnimationOptions = {
    path: '/assets/animated/favorite.json'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
