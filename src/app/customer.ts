import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './dataservice';

export class user
{
    constructor(
       
    ){}
     userId:number
     emailid:string
     firstName:String
     lastName:string
     password:string
     mobileNo:number
     address:string
     photo:string
    
}

@Component({
    selector: 'customer',
    templateUrl: 'customer.html'
})
export class CustomerComponent { 
    constructor(private router:Router, private service:DataService){
        this.refreshData(this.uid)
    
    }

    
    uid:number
    customerDetails:user = new user()
    
    refreshData(uid)
    {
        this.service.display(this.uid).subscribe(
            data=>{
                console.log(data)
                this.customerDetails = data
            }
        )
    }


    // customer()
    // {
    //     this.router.navigate(['customer'])
    // }
}