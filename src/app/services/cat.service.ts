import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatService {

  url:string="http://localhost:3000/cat";
  constructor(public _http:HttpClient) { }

  getAllCat(){
    return this._http.get(this.url);
  }
}
