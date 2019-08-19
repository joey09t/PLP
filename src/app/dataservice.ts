import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {HttpHeaders} from '@angular/common/http'
//import { wishlist } from "./wishlist.component";
import { user } from "./customer";

let baseUrl = "http://localhost:5000/";

@Injectable({
    providedIn:'root'
})
export class DataService{
    constructor(private http:HttpClient){}

        // getWishList(userId)
        // {
        //     this.http.get<wishlist>(`baseUrl+"/wishlist/${userId}"`)
        // }
        update(user1:user,userId:number)
        {
            let options = { "headers":
            new HttpHeaders({"Content-Type": "application/json" }) };
            return this.http.put<user>(baseUrl+"/update/"+userId,user1,options);
        }
        
    display(userId:number)
    {
        return this.http.get<user>(baseUrl+"/customer/"+4);
    }

    }


