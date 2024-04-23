import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATM_System';
  value=0;
  url='http://localhost:8080/';
  //url='http://43.204.236.26:8080/atm_system/';



  constructor(private http:HttpClient){

  }

  transaction(){
      this.value=1;
  }
  create(){
      this.value=2;
  }
  exit(){
    this.value=0;
  }

}
