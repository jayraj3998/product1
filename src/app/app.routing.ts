import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChpassComponent } from './chpass/chpass.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ProductComponent } from './product/product.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
const arr:Routes=[

  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'check',component:ForgetpassComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'chpass',component:ChpassComponent},
  {path:'product',component:ProductComponent},
  {path:'product_details/:id',component:ProdDetailsComponent}


];

export const routing=RouterModule.forRoot(arr);
