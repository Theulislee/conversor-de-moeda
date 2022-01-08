import { Injectable } from '@angular/core';

import { Moeda } from '../models' //Add import pasta models

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

private moedasObj = [ //http://fixer.io
	{ "sigla": "AUD", "descricao": "Dólar australiano" },
	{ "sigla": "BGN", "descricao": "Lev búlgaro" },
	{ "sigla": "BRL", "descricao": "Real brasileiro" },
	{ "sigla": "CAD", "descricao": "Dólar canadense" },
	{ "sigla": "CHF", "descricao": "Franco suíço" },
	{ "sigla": "CNY", "descricao": "Yuan Chinês" },
	{ "sigla": "CZK", "descricao": "Coroa República Tcheca" },
	{ "sigla": "DKK", "descricao": "Coroa dinamarquesa" },
	{ "sigla": "EUR", "descricao": "Euro" },
	{ "sigla": "GBP", "descricao": "Libra Esterlina" },
	{ "sigla": "HKD", "descricao": "Dólar de Hong Kong" },
	{ "sigla": "HRK", "descricao": "Coroa Croácia" },
	{ "sigla": "HUF", "descricao": "Florim húngaro" },
	{ "sigla": "IDR", "descricao": "Rupia indonésia" },
	{ "sigla": "ILS", "descricao": "Novo shekel israelense" },
	{ "sigla": "INR", "descricao": "Rupia indiana" },
	{ "sigla": "JPY", "descricao": "Iene japonês" },
	{ "sigla": "KRW", "descricao": "Won sul-coreano" },
	{ "sigla": "MXN", "descricao": "Peso mexicano" },
	{ "sigla": "MYR", "descricao": "Malásia Ringgit" },
	{ "sigla": "NOK", "descricao": "Coroa Noruega" },
	{ "sigla": "NZD", "descricao": "Dólar da Nova Zelândia" },
	{ "sigla": "PHP", "descricao": "Peso filipino" },
	{ "sigla": "PLN", "descricao": "Złoty Polónia" },
	{ "sigla": "RON", "descricao": "Leu romeno" },
	{ "sigla": "RUB", "descricao": "Belarus Ruble" },
	{ "sigla": "SEK", "descricao": "Coroa Suécia" },
	{ "sigla": "SGD", "descricao": "Dólar de Singapura" },
	{ "sigla": "THB", "descricao": "Baht Tailândia" },
	{ "sigla": "TRY", "descricao": "Lira turca" },
	{ "sigla": "USD", "descricao": "Dólar dos Estados Unidos" },
	{ "sigla": "ZAR", "descricao": "Rand África do Sul" }
  ];

  //irá converter os base de dados acima para uma listagem de moeda
  listarTodas(): Moeda[] {
  	if (this.moedas) {
  		return this.moedas;
  	}
    /*
    - Caso seja executado pela primeira vez ele inicializa o this.moeda = []
     */
  	this.moedas = [];

    /*
    Para cada objeta da base de dado acima, ele pega o objeto e estancia uma nova moeda.
    Utilizando recurso js Object.assign: ele pega o objeto de origem(estancia vazia) e pega
    outra estancia de objeto popular.
    */
  	for (let moedaObj of this.moedasObj) {
  		let moeda: Moeda = new Moeda();
  		Object.assign(moeda, moedaObj);
  		this.moedas.push(moeda);
  	}

  	return this.moedas;
  }

}

