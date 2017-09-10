import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hideForm: boolean;
  hideErr: boolean;
  constructor(private _router: Router, private _register: RegisterService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      password: new FormControl(''),
      tag1: new FormControl(''),
      tag2: new FormControl(''),
      tag3: new FormControl(''),
    });
  }

  onSubmit(formValue) {
    formValue.tag = [];
    let $this = this;
    if (formValue.tag1 === true && formValue.tag2 === true && formValue.tag3 === true) {
      formValue.tag.push('HTML', 'CSS', 'Javascript');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag1 === true && formValue.tag2 === true) {
      formValue.tag.push('HTML', 'CSS');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag1 === true && formValue.tag3 === true) {
      formValue.tag.push('HTML', 'Javascript');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag2 === true && formValue.tag3 === true) {
      formValue.tag.push('CSS', 'Javascript');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag1 === true) {
      formValue.tag.push('HTML');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag2 === true) {
      formValue.tag.push('CSS');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag3 === true) {
      formValue.tag.push('Javascript');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    } else if (formValue.tag1 === "" && formValue.tag2 === "" && formValue.tag3 === "") {
      formValue.tag.push();
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    }
    formValue.questions = [];
    var regUser = this._register.postUserData(formValue);

    regUser.then(function (a) {
      return a.json();
    })
      .then(function (json) {
        if (json.status === 201) {
          $this.hideForm = true;

        }
        else if (json.status === 403) {
          $this.hideErr = true;
        }
      })
    $this.hideForm = false;
    $this.hideErr = false;
    this.registerForm.reset();
  }

  redirectToLogin() {
    this._router.navigate(['/login']);
  }
}
