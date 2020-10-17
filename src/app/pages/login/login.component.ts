import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.form.valid) {
      this.router.navigate(['dashboard']);
    }
  }

}
