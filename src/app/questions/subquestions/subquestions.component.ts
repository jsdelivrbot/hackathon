import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-subquestions',
  templateUrl: './subquestions.component.html',
  styleUrls: ['./subquestions.component.css']
})
export class SubquestionsComponent implements OnInit {
  answerPost:boolean = false;
  
  @Input() questions;
  constructor() { }
  answerPostMethod() {
    this.answerPost = true;
  }
  ngOnInit() {
    console.log(this.questions);
  }

}
