import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class QuestionsService {
    
    url = "http://192.168.1.9:3000/getQuestions";
    constructor(private http: Http) { }
    getDataWithObservable(url): Observable<any> {
        return this.http.get(url)
            .map(this.FetchData)
            .catch(this.handleErrorObservable);
    }
    private FetchData(res: Response) {
        let body = res.json();
        console.log(body);
        return body;
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
} 