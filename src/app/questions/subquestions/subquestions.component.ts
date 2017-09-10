import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-subquestions',
  templateUrl: './subquestions.component.html',
  styleUrls: ['./subquestions.component.css']
})
export class SubquestionsComponent implements OnInit {
  answerPost:boolean = false;
  
  filterargs =  '1.How to add service worker in PWA?';
  @Input() questions;
  @Input() hideAnswerBlock;
  @Input() searchInput;
  constructor() { }
  answerPostMethod() {
    this.answerPost = true;
  }
  ngOnInit() {
    console.log(this.questions);
  }

}

/* serach filter */


@Pipe({
    name: 'searchfilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
          console.log(items);
          console.log(filter);
       //  filter items array, items which match and return true will be kept, false will be filtered out
       return items.filter(item => item.title.indexOf(filter) !== -1);
    }
}
