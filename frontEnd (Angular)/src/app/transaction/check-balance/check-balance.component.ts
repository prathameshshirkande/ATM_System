import { Component } from '@angular/core';
import { TransactionComponent } from '../transaction.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent {
  amount:number=0;
  

  constructor(private http:HttpClient,public transaction:TransactionComponent){

  }
  check(){
       
        this.http.get(this.transaction.url+'check'+this.transaction.account_id).subscribe((data:any)=>
        {
         
          this.amount=data;
            
        }
        )
  }

}
