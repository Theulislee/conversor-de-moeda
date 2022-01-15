import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { ConversaoResponse, Conversao } from '../models'; //Add import models
import { ConversorService } from '../services'; //Add import services

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  /* Essa anotação @Input permite receber parametros que vem externamente
  passado por outro componente */

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  //@Input() onConfirm: EventEmitter<any> = new EventEmitter</any>

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {}


  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }

    return (this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara])
       .toFixed(2);
  }

  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(
      this.conversaoResponse, this.conversao);
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(
      this.conversaoResponse, this.conversao);

  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(
      this.conversaoResponse);
  }
}


