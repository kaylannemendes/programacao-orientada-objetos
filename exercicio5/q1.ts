class Calculadora {
    private operando1 : number;
    private operando2 : number;

    constructor(operando1 : number, operando2 : number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    
   public ehSoma(operando1 : number, operando2 : number) : number{
    return this.operando1 + this.operando2;
   }

   public ehSubtracao(operando1 : number, operando2 : number): number {
    return this.operando1 - this.operando2;
   }
}
    const  calculadora : Calculadora = new Calculadora(8, 4);

    console.log(calculadora.ehSoma(8, 4));
    console.log(calculadora.ehSubtracao(8, 4));
    //console.log(calculadora.operando1); MENSAGEM CORRESPONDENTE: A propriedade 'operando1' é particular e somente é acessível na classe 'Calculadora'
    
