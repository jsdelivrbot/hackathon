import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hideForm:boolean = false;
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
    if(formValue.tag1 === true && formValue.tag2 === true && formValue.tag3 === true){
      formValue.tag = []; 
      // formValue.tag.push('HTML','CSS', 'Javascript');
      delete formValue.tag1;
      delete formValue.tag2;
      delete formValue.tag3;
    }
    formValue.questions = [];
    console.log(formValue);
    this._register.postUserData(formValue);
    this.hideForm = true; 
  }

  redirectToLogin() {
    this._router.navigate(['/login']);
  }
}
