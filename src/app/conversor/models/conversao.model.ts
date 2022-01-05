/**
 * Add export de conversão com 3 parametros que gera 3 atributos: moeda de origem /
 * moeda de destino / valor da conversao da moeda
 */
export class Conversao {

  constructor(
    public moedaDe?: string,
    public moedaPara?: string,
    public valor?: number,
  ) {}
}
