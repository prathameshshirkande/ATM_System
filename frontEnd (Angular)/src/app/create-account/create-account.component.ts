import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  account_id:number=0;
  pin:number=0;
  amount:number=0;
  name:string="";
  url='http://localhost:8080/';
  //url='http://43.204.236.26:8080/atm_system/';
  iscreate:boolean=false;

  

  constructor(private http:HttpClient){

  }

  create(){
          const user = {
            "account_id": this.account_id,
            "pin": this.pin,
            "amount": this.amount,
            "name": this.name
          };


          this.http.post(this.url+'create',user).subscribe((data:any)=>
            {
              
                this.iscreate=data;
                if(this.iscreate){
                  alert("Account created successfully");
                }
                else{
                  alert("something went wrong");
                }
                console.log(user);
                
            }
            )

  }

}
