 /**
  * Criado o export da conversão de resposta com 3 atributos: base / date / rates
  */
 export class ConversaoResponse {

  constructor(
    public base: string,
    public date: string,
    public rates: any) {}
}
/**
 * Resposta de como funciona:
 *
 * {"base":"USD", "date":"2017-03-08, "rates":{"BRL":3.1405}}
 */
