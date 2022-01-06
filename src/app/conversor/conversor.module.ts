import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';



@NgModule({
  declarations: [
    ConversorComponent
  ],
  //Add o exports Conversor para poder conseguir acessar as informações
  exports: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConversorModule { }
