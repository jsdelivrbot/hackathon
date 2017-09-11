import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private _answer: AnswerService) { }

  toggleModal: boolean;
  answerPost: boolean;
  answerForm: FormGroup;
  answers: any;
  @Input() selectedQuestion;

  ngOnInit() {
    console.log("dada", this.selectedQuestion);
    this.answerForm = new FormGroup({
      answerField: new FormControl(''),
    });
    let $this = this;
    let getAnswer = this._answer.getAnswers(this.selectedQuestion);
    getAnswer.then(function (a) {
      console.log("get", a);
      return a.json();
    })
    .then(function (json) {
      if (json.status === 201) {
        $this.answers = json.answers;
        console.log("success", json);
      }
      else if (json.status === 403) {
        console.log("failure");
      }
    })
    console.log("get", getAnswer);
  }
  closeModal() {
    this.toggleModal = true;
  }
  answerPostMethod() {
    this.answerPost = true
  }
  onSubmit(answer) {
    let $this = this;
    answer.description = answer.answerField;
    answer.like = 3;
    answer.questionid = this.selectedQuestion._id;
    delete answer.answerField;
    var answerResp = this._answer.postAnswer(answer);
    answerResp.then(function (a) {
      return a.json();
    })
      .then(function (json) {
        if (json.status === 201) {
          console.log("success");
        }
        else if (json.status === 403) {
          console.log("failure");
        }
      })

    this.answerForm.reset();
  }


}
