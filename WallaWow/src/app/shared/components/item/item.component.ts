import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {AnimationItem, AnimationOptions} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item?: Item;
  lottieOpts: AnimationOptions = {
    path: '/assets/animated/favorite.json',
    loop: false,
    autoplay: false
  };

  private animationItem?: AnimationItem;

  constructor(private ng: NgZone) { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  stop(): void {
    this.ng.runOutsideAngular(() => {
      this.animationItem?.stop();
    });
  }

  play(): void {
    this.ng.runOutsideAngular(() => {
      this.animationItem?.play();
    });
  }
}
