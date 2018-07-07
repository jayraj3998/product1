import { Component, OnInit } from '@angular/core';
import { User } from '../signup/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
email_id:string;
password:string;
arr:User[]=[]

  constructor(private _log:UserService,private _abc:Router) { }

  ngOnInit() {
  }

  onforget(){
      this._log.login(new User(this.email_id,this.password)).subscribe(
        (data:any)=>{
          console.log(data);
          if(data.length>=1)
          {
            this._abc.navigate(['forgetpass',this.email_id]);
          }
          else
          {
            alert("your email id or password is incorrect");
          }
        }
      )
  }

}
