class Conta{
    nome: string;
    saldo: number;

    constructor(nome: string, saldo: number){
        this.nome = nome;
        this.saldo = saldo;
    }

    getNome(): string{
        return this.nome;
    }

    setNome(): void{
        this.nome;
    }

    getSaldo(): number{
        return this.saldo;
    }

    setSaldo(): void{
        this.saldo;
    }
}

interface Tributavel{
    saldo: number;

    calculaTributos(saldo: number): number;
}

class ContaCorrente extends Conta{

    calculaTributos(saldo: number): number{
        return (this.saldo +(saldo * 0.1));
    }
}

class SeguroDeVida implements Tributavel{
    saldo: number;

    calculaTributos(saldo: number): number{
        return this.saldo - 50.00;
    }
}

let c: ContaCorrente = new ContaCorrente("Joao", 500);
let sv: SeguroDeVida = new SeguroDeVida();

console.log(c.calculaTributos(500));
console.log(sv.calculaTributos(500));


