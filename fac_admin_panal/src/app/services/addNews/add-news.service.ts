import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddNewsService {

  constructor(private _http:HttpClient) { }

  addNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/Sadmin/addNews', data)
  }
}
