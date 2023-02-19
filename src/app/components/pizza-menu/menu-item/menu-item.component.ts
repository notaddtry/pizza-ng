import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() info: string | undefined;
  @Input() imagePath: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
