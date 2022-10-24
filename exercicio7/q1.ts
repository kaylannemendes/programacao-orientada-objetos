class Veiculo {
    placa : string;
    ano : number;

    constructor (placa: string, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }

}

class Carro extends Veiculo {
    modelo : string;

    constructor (_modelo: string) {
        super(placa, ano);
        this.modelo = modelo;
        
    }
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;

    constructor (autonomiaBateria: number ){
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
    
}
