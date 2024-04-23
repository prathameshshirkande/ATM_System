import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  trans=0;
  isLogin=0;
  account_id=0;
  pin=0;
  name="";
  url='http://localhost:8080/';
  //url='http://43.204.236.26:8080/atm_system/';


  constructor(private http:HttpClient){

  }
  back(){
    this.trans=0;
  }
  deposit(){
    this.trans=1;
  }
  withdrawal(){
    this.trans=2;
  }
  balance(){
    this.trans=3;
  }
  procced(){

    const user = {
      "account_id": this.account_id,
      "pin": this.pin,
      "amount": 0,
      "name": ''
    };

    this.http.post(this.url+'procced',user).subscribe((data:any)=>
    {
      let temp=data;
      
      if(temp.account_id==0 ){
        this.isLogin=0;
        alert("Please Enter Valid Data");
      }else{
        this.isLogin=1;
        this.name=temp.name;
        alert(`Login Seccessfully`);
      }   
        
    }
    )

  }

}
