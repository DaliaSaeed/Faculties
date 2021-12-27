import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private commonUrlLink ='http://localhost:3000/Sadmin/'
  constructor(private _http:HttpClient) { }

  // register(data:any): Observable<any>{
  //   return this._http.post('http://localhost:3000/Sadmin/register', data)
    
  // }
  register(userData: User):Observable<any>{
    return this._http.post(`${this.commonUrlLink}register`, userData)
  }
  loginUser(userData: any):Observable<any>{
    return this._http.post(`${this.commonUrlLink}login`, userData)
  }
}

