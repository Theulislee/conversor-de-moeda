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

  private moedas: Moeda[]; //lista de moeda para o bloco Html
  private conversao: Conversao; //Onde colocaremos o valor de moeda para
  private possuiErro: boolean; //Para exibir mensagem de erro
  private conversaoResponse: ConversaoResponse; //será retorno da nossa consulta com valores da conversão

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService,
  ) { }

  ngOnInit(): void {
  }

}
