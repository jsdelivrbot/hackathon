import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from '../services/questions.service';
declare var require: Function;
const localforage = require('localforage');

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['../questions/questions.component.css', './my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {

  observableQuestions: Observable<any>
  questions: any;
  input: any;
  url: any;
  errorMessage: String;
  hideAnsBlock: boolean = false;
  constructor(private _questionService: QuestionsService) {

  }
  searchContent(value) {
    this.input = value;
    console.log(this.input);
  }
  ngOnInit() {
    this.url = "http://localhost:3000/getMyQuestions";
    let $this = this;
    localforage.getItem('userDetails', function (err, value) {
      console.log(value);
      $this.observableQuestions = $this._questionService.getMyQuestions($this.url, value);
      $this.observableQuestions.subscribe(
        questions => $this.questions = questions,
        error => $this.errorMessage = <any>error);
      console.log($this.questions);
    });
  }

}