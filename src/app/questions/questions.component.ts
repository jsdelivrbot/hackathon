import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {
  
   observableQuestions: Observable<any>
   questions:any;
   errorMessage: String;
  constructor(private _questionService: QuestionsService) {

}
  ngOnInit() {
    this.observableQuestions = this._questionService.getDataWithObservable();
    this.observableQuestions.subscribe(
    questions => this.questions = questions,
            error =>  this.errorMessage = <any>error);
  }
}
