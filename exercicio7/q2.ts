class _Calculadora {
    private operando1 : number;
    private operando2 : number;

    constructor(operando1 : number, operando2 : number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    
    public ehSoma (operando1 : number, operando2 : number) : number {
    return this.operando1 + this.operando2;
   }
}
   
   const c : _Calculadora = new _Calculadora(8, 4);
   console.log(c.ehSoma(8,4));