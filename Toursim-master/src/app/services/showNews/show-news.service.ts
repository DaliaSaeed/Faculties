import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowNewsService {

  constructor(private _ser:HttpClient) { }
  getNewsData(): Observable<any>{
    return this._ser.get('http://luxor.edu.eg:8999/general/showToursimNews')
  }

  getToursimSingleNews(id:string):Observable<any>{
    return this._ser.get(`http://luxor.edu.eg:8999/general/showToursimSingleNews/${id}`)
  }
}
