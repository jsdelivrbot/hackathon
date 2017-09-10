import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
declare var require:Function;
const localforage = require('localforage');

@Injectable()

export class QuestionsService {
    constructor(private http: Http) { }
    getDataWithObservable(url): Observable<any> {
        return this.http.get(url)
            .map(this.FetchData)
            .catch(this.handleErrorObservable);
    }

    getMyQuestions(url, data): Observable<any> {
        return this.http.post(url, data)
            .map(this.FetchData)
            .catch(this.handleErrorObservable);
    }
    
    private FetchData(res: Response) {
        let body = res.json();
        localforage.setItem('myQuestionsList', body.questions.slice(0, 3), function (err) {});
        return body;
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
} 