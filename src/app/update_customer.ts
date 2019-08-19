import {Component} from "@angular/core";
import { Router } from "@angular/router";
import { user } from "./customer";
import { DataService } from "./dataservice";

@Component({
    selector:'update',
    templateUrl:'update_customer.html'
})

export class UpdateCustomerComponent
{
    model:user
   // constructor(private router:Router){}
  constructor(private service:DataService,private router:Router){}

    user1:user
     select()
     {
    //     alert(this.model.userId,this.model.emailid,this.model.firstName,this.model.lastName,this.model.password,this.model.mobileNo,this.model.address,this.model.photo);
         this.router.navigate(['update'])
     }

    update()
    {
       this.service.update(this.model,this.model.userId).subscribe(
        res=>{this.user1=res
       },
       err=>{
           //alert("an error has occured")
       }

       )
       alert("Account Updated !");
    }
    us=false;
    change(){
        this.us=true;
    }


}