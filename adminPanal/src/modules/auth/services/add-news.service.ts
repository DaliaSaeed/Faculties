import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewsService {

  newData:any = null
  constructor(private _http:HttpClient) { }

  addNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/general/addNews', data)
  }
  addFciNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/general/addFciNews', data)
  }
  addToursimNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/general/addToursimNews', data)
  }
  addFineArtNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/general/addFineArtNews', data)
  }
  addArchaeologyNews(data:any): Observable<any>{
    return this._http.post('http://localhost:3000/general/addArchaeologyNews', data)
  }
  showNews():Observable<any>{
    return this._http.get('http://localhost:3000/general/showNews')
  }

  getSingleNew(id:any):Observable<any>{
    return this._http.post('http://localhost:3000/general/showSingleNews', id)
  }
  editNew(data:any):Observable<any>{
    return this._http.patch('http://localhost:3000/general/editNew', data)
  }

  deleteNew(data:any):Observable<any>{
    return this._http.delete('http://localhost:3000/general/delet', data)
  }
}
