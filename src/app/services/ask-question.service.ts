import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AskQuestion {
    base_url = 'http://localhost:3000';
    constructor(private _http: Http) { }

    postQuestion(question) {
        return this._http.post(this.base_url + '/addQuestion', question).toPromise();
    }
}