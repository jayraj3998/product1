import { Component, OnInit } from '@angular/core';
import { User } from '../signup/user';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chpass',
  templateUrl: './chpass.component.html',
  styleUrls: ['./chpass.component.css']
})
export class ChpassComponent implements OnInit {
 old_password:string;
 new_password:string;
 conform_password:string;
 email_id:string;
  constructor(private _abc:UserService,private _route:Router,public rout:ActivatedRoute) { }
  ngOnInit() {
    this.email_id=this.rout.snapshot.params['email_id'];


  }
  chpass(){
    this._abc.databypass(this.old_password).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>=1)
        {
          if(this.new_password==this.conform_password)
          {
            this._abc.updatepassword(new User(this.email_id,this.new_password)).subscribe(
              (data:any)=>{
                console.log(data);
                this._route.navigate(['']);
              }
            );

        }
        else
        {
          alert("check new password and conform new password");
        }
      };
    }


  )
}
  onback(){
    this._route.navigate(['']);

  }
}




