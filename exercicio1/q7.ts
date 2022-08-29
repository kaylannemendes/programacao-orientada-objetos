/*Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.*/

class Retangulo {
	base : number;
	altura: number;
  
	constructor(base: number, altura: number){
		this.base = base;
		this.altura = altura;
	}
  calcular_perimetro(): number{
		return ((this.base + this.altura) * 2);
	}
}
let retangulo = new Retangulo(6,10);
	
  console.log(`Area do perimetro do retangulo ${retangulo.calcular_perimetro()}`);
