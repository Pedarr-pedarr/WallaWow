import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      title: 'My favorite',
      icon: 'assets/icons/favorite.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openFavorites() {

  }
}
