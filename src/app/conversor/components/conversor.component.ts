import { Component, OnInit, ViewChild } from '@angular/core'; //Add import para @viewChild
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models'; //Add import para os atributos da class
import { MoedaService, ConversorService } from '../services'; //Add import no constructor

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[]; //lista de moeda para o bloco Html
  conversao: Conversao; //Onde colocaremos o valor de moeda para
  possuiErro: boolean; //Para exibir mensagem de erro
  conversaoResponse: ConversaoResponse; //será retorno da nossa consulta com valores da conversão

  //Anotação @ViewChild vai fazer a ligação entre html para o atributo de class.
  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService,
  ) { }

  ngOnInit(): void {
    //irá pegar e processar aquela array com todas as moedas
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void{
    if (this.conversaoForm.form.valid) {
      this.conversorService
      .converter(this.conversao)
      .subscribe(
        response => this.conversaoResponse = response,
        error => this.possuiErro = true
      );
    }
  }
}
