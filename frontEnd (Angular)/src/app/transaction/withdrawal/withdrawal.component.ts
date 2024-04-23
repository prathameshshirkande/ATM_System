import { Component } from '@angular/core';
import { TransactionComponent } from '../transaction.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {

  amount:number=0;
  isSufficient:boolean=false;

  constructor(private http:HttpClient,public transaction:TransactionComponent){

  }

  withdrawal(){

    const user = {
      "account_id": this.transaction.account_id,
      "pin": 0,
      "amount": this.amount,
      "name": ''
    };
      
    this.http.put(this.transaction.url+'withdrawal',user).subscribe((data:any)=>
    {
     
        let temp=data;
        if(temp){
          alert(` RS ${this.amount} wathdrawal seccussfully`);
        }
        else{
          alert(`Your Balance is Insufficient`);
        }
        
    }
    )
  }


}
