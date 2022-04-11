import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {AnimationItem, AnimationOptions} from "ngx-lottie/lib/symbols";
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // last frame is an empty heart, use -1 to take last frame with filled heart.
  // number take it from https://lottiefiles.com/16557-heart-pop
  private readonly lastFrame = 59;

  @Input() item?: Item;
  lottieOpts: AnimationOptions = {
    path: '/assets/animated/favorite.json',
    loop: false,
    autoplay: false
  };

  private animationItem?: AnimationItem;

  constructor(private ng: NgZone,
              private favorites: FavoritesService) { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    console.log('animationCreated and item is', this.item);
    this.animationItem?.setDirection((!!this.item?.favorite) ? -1 : 1);
    this.animationItem.setSegment((!!this.item?.favorite) ? this.lastFrame : 0, (!!this.item?.favorite) ? this.lastFrame : 0);
  }

  stop(): void {
    this.ng.runOutsideAngular(() => {
      if (!!this.item) {
        this.favorites.updateFavorite(this.item).subscribe((updated: Item) => {
          if (this.animationItem?.playDirection === -1) {
            this.animationItem?.goToAndStop(0, true);
          } else {
            this.animationItem?.goToAndStop(this.lastFrame, true);
          }
          this.animationItem?.setDirection((updated.favorite) ? -1 : 1)
        });
      }
    });
  }

  play(): void {
    this.ng.runOutsideAngular(() => this.animationItem?.play());
  }
}
