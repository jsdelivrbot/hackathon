import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    base_url = 'http://192.168.1.9:3000';
    constructor(private _http: Http) { }

    postUserDetils(userDetails) {
        return this._http.post(this.base_url + '/checkLogin', userDetails).toPromise();
    }
}