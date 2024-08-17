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
  loginFunction: false;
  openRegistration: boolean = false;
  smallErrors: boolean = false;

 form: FormGroup;
 constructor (private FormgroupService : FormgroupService, private route: ActivatedRoute){

 }

  ngOnInit(): void {
    this.form= this.FormgroupService.logineForm();
    console.log(this.form);
    
  }

  onSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
    }
  }


  clickRegistration() {
    this.openRegistration = !this.openRegistration;

    // console.log(this.openRegistration);
    
  }

  newCustomerResgistraion(){
    console.log(this.form);
    // console.log(this.form.value.valid);
    
    if(this.form.invalid){  // Correct way to check if the form is invalid
      console.log('The form is invalid, please fill in all required fields.');
    } else {
      console.log('Form is valid and ready to submit.');
      console.log('Form Submitted', this.form.value);
      // Your logic to handle the valid form submission here
    }

    
  }
}


