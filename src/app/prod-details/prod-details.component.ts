import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../product/product';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  p_id:number;
  p_name:string;
  cid:number;
  similar:product[]=[];
  constructor(public ar:ActivatedRoute,public _router:Router, public _data:ProductService) { }

  onSimilarClick(item:product){
    this._router.navigate(['/product_details',item.p_id]);
  }
  ngOnInit() {
    //this.p_id=this.ar.snapshot.params['id'];
    this.ar.params.subscribe(
      (x:Params)=>{
        this.p_id=x['id'];
        console.log(x);
        console.log(this.p_id);
        this._data.getProductByProductId(this.p_id).subscribe(
          (data:product[])=>{
            this.p_name=data[0].p_name;
            this.cid=data[0].cid;
            this._data.getProductByCatId(this.cid,this.p_id).subscribe(
              (data:product[])=>{
                this.similar=data;
                // for(var i=0;i<data.length;i++){
                //   if(data[i].p_id!=this.p_id){
                //     this.similar.push(data[i]);
                //   }
                // }
              }
            );
          }
        );
      }
    );


  }

}
