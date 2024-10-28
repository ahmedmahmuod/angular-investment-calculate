import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { InvestmentService } from './services/investment.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormComponent, ResultComponent],
  imports: [CommonModule, FormsModule,BrowserModule],
  providers: [InvestmentService],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
  