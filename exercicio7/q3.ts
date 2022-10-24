class Calculadora {
    _operando1 : number;
    _operando2 : number;

     constructor(_operando1 : number, _operando2 : number) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    
   ehSoma (_operando1 : number, _operando2 : number) : number{
    return this._operando1 + this._operando2;
   }
}

class CalculadoraCientifica extends Calculadora{
    constructor() {
        super(_operando1, _operando2);
    }

    public exponenciar(_operando1: number, _operando2: number): number{
        return this._operando1 ** this._operando2;
    }

}

const cc : CalculadoraCientifica = new CalculadoraCientifica();
console.log(cc.ehSoma(8, 4));