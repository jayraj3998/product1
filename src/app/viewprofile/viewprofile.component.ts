import { Component, OnInit } from '@angular/core';
import { User } from '../signup/user';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  city:string;
  gender:string='male';
  address:string;
  arr:User[]=[]

  constructor(private _xyz:UserService,private _route:Router,public rout:ActivatedRoute) { }

  updateuser(){
    this._route.navigate(['editprofile',this.email_id]);
  }


  changepassword(){
    this._route.navigate(['chpass',this.email_id]);
  }
  ngOnInit() {
    this.email_id=localStorage.getItem('email_id');
    this._xyz.getdatabyid(this.email_id).subscribe(
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

}
