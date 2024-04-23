import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './transaction/deposit/deposit.component';
import { WithdrawalComponent } from './transaction/withdrawal/withdrawal.component';
import { CheckBalanceComponent } from './transaction/check-balance/check-balance.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    CreateAccountComponent,
    DepositComponent,
    WithdrawalComponent,
    CheckBalanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
