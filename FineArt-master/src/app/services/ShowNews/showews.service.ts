import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowewsService {

  constructor(private _ser:HttpClient) { }
  getNewsData(): Observable<any>{
    return this._ser.get('http://localhost:3000/general/showFineArtNews')
  }
  getFineArtSingleNews(id:string):Observable<any>{
    return this._ser.get(`http://localhost:3000/general/showFineArtSingleNews/${id}`)
  }
}
