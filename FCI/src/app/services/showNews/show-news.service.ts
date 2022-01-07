import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowNewsService {

  constructor(private _ser:HttpClient) { }

  getNewsData(): Observable<any>{
    return this._ser.get('http://localhost:3000/general/showFciNews')
  }

  getSingleNews(id:string):Observable<any>{
    return this._ser.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
}
