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

  ngOnInit(): void {
  }

}
