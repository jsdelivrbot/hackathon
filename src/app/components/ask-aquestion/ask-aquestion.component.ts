import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AskQuestion } from '../../services/ask-question.service';
declare var require: Function;
const localforage = require('localforage');

@Component({
  selector: 'app-ask-aquestion',
  templateUrl: './ask-aquestion.component.html',
  styleUrls: ['./ask-aquestion.component.css']
})
export class AskAQuestionComponent implements OnInit {

  askQuestionForm: FormGroup;
  showSuccess: boolean;
  constructor(private _askQuestionService: AskQuestion) { }

  ngOnInit() {
    this.askQuestionForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      tag1: new FormControl(''),
      tag2: new FormControl(''),
      tag3: new FormControl(''),
    });
  }

  onSubmit(question) {
    question.tag = [];
    let $this = this;
    if (question.tag1 === true && question.tag2 === true && question.tag3 === true) {
      question.tag.push('HTML', 'CSS', 'Javascript');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag1 === true && question.tag2 === true) {
      question.tag.push('HTML', 'CSS');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag1 === true && question.tag3 === true) {
      question.tag.push('HTML', 'Javascript');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag2 === true && question.tag3 === true) {
      question.tag.push('CSS', 'Javascript');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag1 === true) {
      question.tag.push('HTML');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag2 === true) {
      question.tag.push('CSS');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag3 === true) {
      question.tag.push('Javascript');
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    } else if (question.tag1 === "" && question.tag2 === "" && question.tag3 === "") {
      question.tag.push();
      delete question.tag1;
      delete question.tag2;
      delete question.tag3;
    }
    question.answers = [];
    localforage.getItem('userDetails', function (err, value) {
      question.username = value.username;
      var questPost = $this._askQuestionService.postQuestion(question);
      questPost.then(function (a) {
        return a.json();
      })
        .then(function (json) {
          if (json.status === 201) {
            console.log("success");
            $this.showSuccess = true;
          }
          else if (json.status === 403) {
            $this.showSuccess = false;
          }
        })
    });
    this.askQuestionForm.reset();
  }
}
