import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router:Router){}
    canActivate():boolean{
          if(!localStorage.getItem("userToken")){
            this._router.navigate(["/auth/login"])
            return false;
          }
          return true
      }
}
