import { Component } from '@angular/core';
import { TransactionComponent } from '../transaction.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

 amount:number=0;

 constructor(private http:HttpClient,public transaction:TransactionComponent){

 }
  
  deposit(){

    const user = {
      "account_id": this.transaction.account_id,
      "pin": 0,
      "amount": this.amount,
      "name": ''
    };


    this.http.put(this.transaction.url+'deposit',user).subscribe((data:any)=>
        {
         
          let temp=data;
          if(temp){
            alert(` RS ${this.amount} Deposited seccessfully`);
          }
          else{
            alert("Failed Deposition");
          }
            
        }
        )
  }

}
