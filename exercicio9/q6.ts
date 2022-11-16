abstract class Funcionario{
    salario: number;


    constructor(salario: number){
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario{

    constructor(salario: number){
        super(salario);
    }

    getBonificacao(): number {
        
        return this.salario * 1.4;
    }
}

class Diretor extends Gerente{

    constructor(salario: number){
        super(salario);
    }

    getBonificacao(): number {
        return this.salario * 1.6;
    }
}

class Presidente extends Funcionario{

    constructor(salario: number){
        super(salario);
    }

    getBonificacao(): number {
        return this.salario + 1000;
    }
}

let gerente: Gerente = new Gerente(1400);
let diretor: Diretor = new Diretor(1400);
let presidente: Presidente = new Presidente(3000);

console.log(gerente.getBonificacao().toFixed(2));
console.log(diretor.getBonificacao().toFixed(2));;
console.log(presidente.getBonificacao().toFixed(2));



