import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
declare var require:Function;
const localforage = require('localforage');

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
    user.then(function (response) {
      return response.json();
    })
      .then(function (json) {
        if (json.status === 201) {
          console.log(json);
          localforage.setItem('userDetails', json.user, function (err) {
            localforage.getItem('userDetails', function (err, value) {
              console.log(value);
              $this._router.navigate(['/dashboard']);
            });
          });
        }
        else if (json.status === 403) {
          localforage.setItem('userDetails', undefined, function (err) { });
          $this.showError = false;
        }
      })

  }

  redirectToRegister() {
    this._router.navigate(['/register']);
  }
}
