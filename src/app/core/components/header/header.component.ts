import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  filterOpen = false;
  newValue: '';
  constructor(){

  }
  onSubmit(){
    console.log(this.newValue);
    
  }
  openFilter() {
    console.log('filter');
    this.filterOpen=!this.filterOpen;
    console.log(this.filterOpen);
    
    }
}
