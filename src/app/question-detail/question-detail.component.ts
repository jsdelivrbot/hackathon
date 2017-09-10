import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  constructor() { }

  toggleModal: boolean;
  answerPost:boolean;
  @Input() selectedQuestion;

  ngOnInit() {
    console.log("dada",this.selectedQuestion);
  }
  closeModal() {
    this.toggleModal = true;
  }
  answerPostMethod() {
    this.answerPost = true
  }

}
