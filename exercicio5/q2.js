var Hora = /** @class */ (function () {
    function Hora(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.consultarHoras = function () {
        return this.horas;
    };
    Hora.prototype.consultarMinutos = function () {
        return this.minutos;
    };
    Hora.prototype.consultarSegundos = function () {
        return this.segundos;
    };
    Hora.prototype.ehHora = function () {
        console.log("".concat(this.horas, ":").concat(this.minutos, ":").concat(this.segundos));
    };
    return Hora;
}());
var hora = new Hora(10, 24, 14);
hora.ehHora();
