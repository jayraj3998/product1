import { Injectable } from '@angular/core';
import { product } from '../product/product';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public _http:HttpClient) { }
  url:string="http://localhost:3000/product/";
  prodUrl:string="http://localhost:3000/prod/";
  similarUrl:string="http://localhost:3000/prod_Catid/";
  productview(){
    return this._http.get(this.url);

  }
  getProductByCatName(cat_name:string){
    return this._http.get(this.url+cat_name);
  }
  getProductByProductId(id:number){
    return this._http.get(this.prodUrl+id);
  }

  getProductByCatId(id:number,pid:number){
    return this._http.get(this.similarUrl+id+"/"+pid);
  }
}
