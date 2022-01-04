import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorModule } from './conversor'; //add import do conversor.module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConversorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
