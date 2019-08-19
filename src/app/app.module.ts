import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {CustomerComponent} from './customer'
import {FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UpdateCustomerComponent} from './update_customer'
//import { wishlist } from './wishlist.component';


const routes:Routes=[
   {path:'',component:CustomerComponent},
    {path:'update',component:UpdateCustomerComponent},
    {path:'customer',component:CustomerComponent},
//   {path:'wishlist',component:wishlist}
   
];

@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
        
    ],
    declarations: [
        AppComponent,UpdateCustomerComponent,CustomerComponent,//wishlist
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }