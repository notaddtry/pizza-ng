import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string = 'Кнопка';
  @Input() width: string = '220px';
  @Input() height: string = '60px';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.click.emit();
  }
}
