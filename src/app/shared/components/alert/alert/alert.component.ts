import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() mainText: string = 'Error';
  @Input() backgroundColor: string = '#b4b2b2';
  @Input() textColor: string = 'blue';
  @Input() showCloseButton: boolean = true;

  @Output() alertClosed: EventEmitter<void> = new EventEmitter<void>();

  public alertIsOpen: boolean = false;

  closeAlert() {
    this.alertIsOpen = false;
    this.alertClosed.emit();  // Emit event to notify parent component
  }
}
