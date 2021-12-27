import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowAllUsersService {
  public isAuth = false
  public userData: any = null

  constructor(private _http:HttpClient) { }

  getUsers():Observable<any>{
    return this._http.get('http://localhost:3000/Sadmin/AllUsers')
  }

  getSingleUser():Observable<any>{
    return this._http.get('http://localhost:3000/Sadmin/profile')
  }
}
