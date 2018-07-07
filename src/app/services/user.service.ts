import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../signup/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private url:string="http://localhost:3000/"
  constructor(public _http:HttpClient) { }
  signup(item:User){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"signup/",x,{headers:h});
  }
  login(item:User){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"login/",x,{headers:h});
  }

  updateuser(item:User){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+"login/"+item.email_id,body,{headers:h});
  }

  updatepassword(item:User){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+"signup/"+item.email_id,body,{headers:h});
  }

  getdatabyid(id){
    return this._http.get(this.url+"login/"+id);
  }

  getalldata(){
    return this._http.get(this.url);

  }
  databypass(id){
    return this._http.get(this.url+"signup/"+id)
  }
}


