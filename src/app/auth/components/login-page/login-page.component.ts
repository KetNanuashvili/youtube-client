import { Component, OnInit } from '@angular/core';
import { FormgroupService } from '../../services/formgroup.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormDataServiceService} from '../../services/form-data-service.service'
import { AlertComponent } from '../../../shared/components/alert/alert/alert.component'; // Import the AlertComponent


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
  myYoutubeChanel: boolean= false;
  openAlert: boolean= false;
  myName: boolean =false;
 loginform: FormGroup;
 registrationForm: FormGroup;
 closeAlert: boolean =false;
 succesLogin: boolean= false;
 registrationSucces: boolean= false;
registrationUnsuccess: boolean= false;
registrationmust: boolean=false;
 constructor (
  private FormDataServiceService : FormDataServiceService,
  private FormgroupService : FormgroupService, 
   private router: Router){

 }

  ngOnInit(): void {
    this.loginform= this.FormgroupService.createLoginForm();
    this.registrationForm= this.FormgroupService.createRegistrationForm();

  }

  onSubmit() {
    if(this.loginform.invalid) {  
      this.openAlert = true;
    } else {
      const savedFormData = this.FormDataServiceService.getFormData('myFormKey');
      if (savedFormData.email === this.loginform.value.login &&
          savedFormData.password === this.registrationForm.value.password) {
        this.succesLogin = true;
        alert('Login Successful! Welcome back.');
        this.router.navigate(['/youtube']);
      } else {
        this.registrationmust = true;
      }
    }
  }


  clickRegistration() {
  
    this.loginPage = !this.loginPage;
    console.log(this.loginPage);
    if(!this.loginPage){
      this.registrationForm.reset();
    }
    
  }

  newCustomerResgistraion() {
    if(this.registrationForm.invalid) {  
      this.registrationUnsuccess = true;
      // alert('The form is invalid, please fill in all required fields.');
    } else {
      this.FormDataServiceService.saveFormData('myFormKey', this.registrationForm.value);
      this.registrationSucces = true;
      this.loginPage = true;
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

  myYoutubePage(){
    this.myYoutubeChanel = !this.myYoutubeChanel;
  }
  resetAlert(alertType: string) {
    this[alertType] = false;
  }
  

}


