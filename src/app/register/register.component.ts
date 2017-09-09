import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hideForm:boolean = false;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      password: new FormControl(''),
      tag1: new FormControl(''),
      tag2: new FormControl(''),
      tag3: new FormControl('')
    });
  }
  onSubmit(formValue) {
    if(formValue.tag1 === true && formValue.tag2 === true && formValue.tag3 === true){
      formValue.skills = []; 
      formValue.skills.push('HTML','CSS', 'Javascript');
    }
    console.log(formValue);
    this.hideForm = true;
  }
  redirectToLogin() {
    this._router.navigate(['/login']);
  }

}
