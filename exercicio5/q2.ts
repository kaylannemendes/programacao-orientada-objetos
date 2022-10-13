class Hora{
    private horas : number;
    private minutos : number;
    private segundos : number;

    constructor(horas : number, minutos : number, segundos : number){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public consultarHoras(): number{
        return this.horas;
    }

    public consultarMinutos(): number{
        return this.minutos;
    }

    public consultarSegundos(): number{
        return this.segundos;
    }

    public ehHora(): void{
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`);
        
    }
}
    const hora : Hora = new Hora(10,24,14);
    hora.ehHora();