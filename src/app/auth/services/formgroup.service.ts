import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, PasswordValidator } from '../models/validators';


@Injectable({
  providedIn: 'root'
})
export class FormgroupService {

  constructor(private fb: FormBuilder) {}

  logineForm(): FormGroup {
    return this.fb.group({
      loginGroup: this.fb.group({
        login: [''],
        memberisedpassword: ['']
      }),
      registrationGroup: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, emailValidator()]],
        password: ['', [Validators.required, PasswordValidator()]]
      })
    });
  }


}
