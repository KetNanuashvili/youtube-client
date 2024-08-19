import { Component, OnInit } from '@angular/core';
import { FormgroupService } from '../../services/formgroup.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{
  loginPage: boolean = true;
  loginFunction:boolean= false;
  passwordUnhide: boolean= false;
  openRegistration: boolean = false;
  smallErrors: boolean = false;

 loginform: FormGroup;
 registrationForm: FormGroup;

 constructor (private FormgroupService : FormgroupService, private route: ActivatedRoute){

 }

  ngOnInit(): void {
    this.loginform= this.FormgroupService.createLoginForm();
    this.registrationForm= this.FormgroupService.createRegistrationForm();

    
    
  }

  onSubmit() {
    console.log(this.loginform);
   
    if(this.loginform.invalid){  

      alert('The form is invalid, please fill in all required fields.')
    } else {

      alert('Your registration was successful')

    }
  }


  clickRegistration() {
  
    this.loginPage = !this.loginPage;
    console.log(this.loginPage);
    if(!this.loginPage){
      this.registrationForm.reset;
    }
    
  }

  newCustomerResgistraion(){
    if(this.registrationForm.invalid){  
      alert('The form is invalid, please fill in all required fields.')
    
    } else {

      alert('Your registration was successful')
    this.loginPage =!this.loginPage;
      // console.log(this.loginPage);
    }
    
  }

  backToLogin(){
     this.loginPage=!this.loginPage;
    console.log(!this.loginPage);
    
  }



  showPassword(){
    this.passwordUnhide=!this.passwordUnhide;
    if(this.passwordUnhide){
      console.log(this.loginform.value.memberisedpassword);
      this.loginform.value.memberisedpassword;
    }
  }
}


