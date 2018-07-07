import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from  '../product/product';
import { ProductService } from '../services/product.service';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat_model';
import { Cat_Product } from '../models/cat_product_model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public _abc:ProductService,public _Cat:CatService,public _route:ActivatedRoute,public _router:Router) { }
  arr:product[]=[];
  p_id:number;
  p_name:string;
  img:string;
  p_price:number;
  flag:string;
  flag1:string;
arr1:Cat[]=[];

onAllClick(){
  this._abc.productview().subscribe(
    (data:product[])=>{
      console.log(data);
      this.arr=data;

    }
  );
}
onProductView(item:product){
  this._router.navigate(['/product_details',item.p_id]);
}
onCatClick(item:Cat){

this._abc.getProductByCatName(item.c_name).subscribe(
  (data:Cat_Product[])=>{
    this.arr=data;
  }
);
}
  ngOnInit() {

    this._Cat.getAllCat().subscribe(
      (data:Cat[])=>{
        this.arr1=data;
      }
    );
    this._abc.productview().subscribe(
      (data:product[])=>{
        console.log(data);
        this.arr=data;

      }
    );
  }

  // cat(item:product){
  //   this._abc.join(new product(item.p_name)).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       this.join=data;
  //       this.flag=true;
  //       this.flag1=false;

  //     }
  //   )
  // }

}
