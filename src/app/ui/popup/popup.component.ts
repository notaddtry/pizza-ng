import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements AfterViewInit {
  @Input() content: string | undefined;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngAfterViewInit(): void {
    document.querySelector('body')!.style.overflow = 'hidden';
  }

  onClose(): void {
    this.close.emit();
    document.querySelector('body')!.style.overflow = 'auto';
  }
}
