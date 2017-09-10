import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import * as localforage from "localforage";

@Injectable()
export class LoginActivate implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        let $this = this
        localforage.getItem('userDetails', function (err, value) {
            if(value) {
                console.log(value, "Login Activate");
                $this._router.navigate([url]);
            } else {
                $this._router.navigate(['/login']);
            }
        });
        return true;
      }
}