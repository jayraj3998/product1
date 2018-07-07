import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../signup/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:string;
  password:string;
  arr:User[]=[];
  constructor(private _xyz:UserService,private _route:Router) { }


  login1(){

    this._xyz.login(new User(this.email_id,this.password)).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length ===1){

          localStorage.setItem('email_id',this.email_id);
          this._route.navigate(['product']);
        }
        else{
          alert('please enter correct data');
        }
      }
    );
  }

  ngOnInit() {
  }

 onforget(){
     this._route.navigate(['check']);
   }
}
