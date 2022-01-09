import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpModule } from '@angular/common/http';

import { ConversorComponent } from './components'; //add import na pasta components
import { MoedaService, ConversorService } from './services'; //add import na pasta service arquivos de Moeda e conversor Service



@NgModule({
  declarations: [
    ConversorComponent
  ],
  //Add o exports Conversor para poder conseguir acessar as informações
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ],
  imports: [
    CommonModule,

  ]
})
export class ConversorModule { }
