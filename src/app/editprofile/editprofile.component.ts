import { Component, OnInit } from '@angular/core';
import { User } from '../signup/user';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(public _upt:UserService,private _router:Router,public rout:ActivatedRoute) { }
  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  city:string;
  gender:string='male';
  address:string;
  arr:User[]=[]



  ngOnInit() {
    this.email_id=localStorage.getItem('email_id');
    this._upt.getdatabyid(this.email_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr=data;
        this.password=data[0].password;
        this.user_name=data[0].user_name;
        this.mobile_no=data[0].mobile_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
      }
    );
  }

  onsave(){
    this._upt.updateuser(new User(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/product']);
      }
    );
  }

  }


