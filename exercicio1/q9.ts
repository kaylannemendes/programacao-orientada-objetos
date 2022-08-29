/*Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado  saldo()que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().*/

class SituacaoFinanceira {
	valorCreditos : number;
	valorDebitos: number;
  
	constructor(valorCreditos: number, valorDebitos: number){
		this.valorCreditos = valorCreditos;
		this.valorDebitos = valorDebitos;
	}
  saldo(): number{
		return (this.valorCreditos - this.valorDebitos);
	}
}
let situacaofinanceira = new SituacaoFinanceira(120,100);
	
  console.log(`Valor do saldo ${situacaofinanceira.saldo()}`);
