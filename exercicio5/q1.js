var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.ehSoma = function (operando1, operando2) {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.ehSubtracao = function (operando1, operando2) {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(8, 4);
console.log(calculadora.ehSoma(8, 4));
console.log(calculadora.ehSubtracao(8, 4));
//console.log(calculadora.operando1);
