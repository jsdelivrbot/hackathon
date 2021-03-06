import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from '../../services/questions.service';
declare var require:Function;
const localforage = require('localforage');

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {

  observableQuestions: Observable<any>
  questions: any;
  input: any;
  url: any;
  errorMessage: String;
  hideAnsBlock: boolean = false;
  constructor(private _questionService: QuestionsService) { }

  searchContent(value) {
    this.input = value;
    console.log(this.input);
  }
  ngOnInit() {
    let $this = this;
    localforage.getItem('questionsList', function (err, value) {
      $this.questions = { questions: value };
    });
    this.url = "https://digigyan.herokuapp.com/getQuestions";
    this.observableQuestions = this._questionService.getDataWithObservable(this.url);
    this.observableQuestions.subscribe(
      questions => this.questions = questions,
      error => this.errorMessage = <any>error);
    console.log(this.questions);
  }
}
