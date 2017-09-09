import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subquestions',
  templateUrl: './subquestions.component.html',
  styleUrls: ['./subquestions.component.css']
})
export class SubquestionsComponent implements OnInit {
  answerPost:boolean = false;
  constructor() { }
  answerPostMethod() {
    this.answerPost = true;
  }
  ngOnInit() {
  }

}
