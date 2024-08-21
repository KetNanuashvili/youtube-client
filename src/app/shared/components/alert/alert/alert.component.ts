import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  public MainText: string = 'Error'; 
  public alertIsOpen: boolean= false;
  closeAlert() {
    console.log(this.alertIsOpen);
    
    this.alertIsOpen = !this.alertIsOpen; 

    
  }
}
