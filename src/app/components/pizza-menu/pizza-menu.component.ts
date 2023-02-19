import { Component, OnInit } from '@angular/core';
import { menuItem } from './models/menuItem.model';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss'],
})
export class PizzaMenuComponent implements OnInit {
  public menuItems: menuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getItems().subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }
}
