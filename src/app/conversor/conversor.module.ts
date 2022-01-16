import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // importando Para HttpClienteModule
import { FormsModule } from '@angular/forms'; //Add import para ficar disponinivel forms na aplicação

import { ConversorComponent } from './components'; //add import na pasta components
import { MoedaService, ConversorService } from './services'; //add import na pasta service arquivos de Moeda e conversor Service
import { NumeroDirective } from './directives'; //Foi add automatico diretiva
import { ModalCotacaoComponent } from './utils'; //Foi add automatico utils
import { DataBrPipe } from './pipes'; //Foi add automatico pipe

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
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
    HttpClientModule,
    FormsModule
  ]
})
export class ConversorModule { }
