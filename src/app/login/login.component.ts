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
  showError: boolean = true;
  constructor(private _router: Router, private _login: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(name) {
    let $this = this;
    let user = this._login.postUserDetils(name);
    user.then(function(a) {
      return a.json();
    })
    .then(function(json) {
      if(json.status === 201) {
         $this._router.navigate(['/dashboard']);
      }
      else if(json.status === 403) {
        $this.showError = false;
      }
    })

  }

  redirectToRegister() {
    this._router.navigate(['/register']);
  }
}
