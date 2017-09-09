import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _router: Router, private _login: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.pattern('')),
      password: new FormControl('')
    });
  }
  onSubmit(name) {
    // if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
    //   this._router.navigate(['/dashboard']);
    // }
    this._login.postUserDetils(name);
  }
  redirectToRegister() {
    this._router.navigate(['/register']);
  }

}
