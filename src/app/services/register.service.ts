import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
    base_url = 'http://192.168.1.8:3000';
    constructor(private _http: Http) { }

    postUserData(userDetails) {
        console.log("userData", userDetails);
        return this._http.post(this.base_url + '/register', userDetails).toPromise();
    }
}