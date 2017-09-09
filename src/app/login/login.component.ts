import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')),
      password: new FormControl('')
    });
  }
  onSubmit(name) {
    if (this.loginForm.value.email === 'admin@test.com' && this.loginForm.value.password === 'admin') {
      this._router.navigate(['/dashboard']);
    }
  }
  redirectToRegister() {
    this._router.navigate(['/register']);
  }

}
