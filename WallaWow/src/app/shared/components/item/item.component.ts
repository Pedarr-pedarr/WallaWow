import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {AnimationItem, AnimationOptions} from "ngx-lottie/lib/symbols";
import {FavoritesService} from "../../services/favorites.service";

export type Mode = 'grid' | 'list';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // last frame is an empty heart, use -1 to take last frame with filled heart.
  // number take it from https://lottiefiles.com/16557-heart-pop
  private readonly lastFrame = 59;
  private isEnabled: boolean = true;

  @Input() item?: Item;
  @Input() mode: Mode = 'grid';
  lottieOpts: AnimationOptions = {
    path: '/assets/animated/favorite.json',
    loop: false,
    autoplay: false
  };

  private animationItem?: AnimationItem;

  constructor(private ng: NgZone,
              private favorites: FavoritesService) {
  }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    this.animationItem?.setDirection((!!this.item?.favorite) ? -1 : 1);
    this.animationItem.setSegment((!!this.item?.favorite) ? this.lastFrame : 0, (!!this.item?.favorite) ? this.lastFrame : 0);
  }

  updateItem() {
    if (!!this.item) {
      this.favorites.updateFavorite(this.item).subscribe((updated: Item) => {
        this.ng.runOutsideAngular(() => this.animationItem?.goToAndStop((this.animationItem?.playDirection === -1)
          ? 0
          : this.lastFrame, true));

        this.animationItem?.setDirection((updated.favorite) ? -1 : 1);
      });
    }
  }

  stop() {
    this.updateItem();
    this.isEnabled = true;
  }

  play() {
    if (this.isEnabled) {
      this.isEnabled = false;
      this.ng.runOutsideAngular(() => this.animationItem?.play());
    }
  }
}
