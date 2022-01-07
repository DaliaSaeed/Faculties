import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService {
  public isAuth = false
  public myData: any = null
    constructor(private _http:HttpClient) {}

    loginUser(userData: any):Observable<any>{
        return this._http.post('http://localhost:3000/general/login', userData)
      }

      profile():Observable<any>{
        return this._http.get('http://localhost:3000/general/profile')
      }
      logout():Observable<any>{
        return this._http.post(`http://localhost:3000/general/logout`, {})
      }
}
