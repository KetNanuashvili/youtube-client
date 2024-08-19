import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, PasswordValidator } from '../models/validators';

@Injectable({
  providedIn: 'root'
})
export class FormgroupService {

  constructor(private fb: FormBuilder) {}

  createLoginForm(): FormGroup {
    return this.fb.group({
      login: ['', [Validators.required, Validators.email, emailValidator()]],
      memberisedpassword: ['', Validators.required]
    });
  }

  createRegistrationForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailValidator()]],
      password: ['', [Validators.required, PasswordValidator()]]
    });
  }
}
