import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnswerService {
    base_url = 'http://localhost:3000';
    constructor(private _http: Http) { }

    postAnswer(answer) {
        return this._http.post(this.base_url + '/addAnswer', answer).toPromise();
    }
    getAnswers(args) {
        return this._http.post(this.base_url + '/getAnswers',args).toPromise();
    }
}