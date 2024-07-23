import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{
  openRegistration: boolean = false;
  ngOnInit(): void {

    

  }

  clickRegistration() {
    this.openRegistration = !this.openRegistration;

    console.log(this.openRegistration);
    
  }
}


