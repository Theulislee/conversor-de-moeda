import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components'; //add import na pasta components
import { MoedaService } from './services'; //add import na pasta service



@NgModule({
  declarations: [
    ConversorComponent
  ],
  //Add o exports Conversor para poder conseguir acessar as informações
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService
  ],
  imports: [
    CommonModule
  ]
})
export class ConversorModule { }
