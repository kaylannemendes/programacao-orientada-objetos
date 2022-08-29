/*Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.*/

class Circulo{
	raio : number;
  
	constructor(raio: number){
		this.raio = raio;
  }
	calcular_area() : number {
		return (3.14 *(this.raio ** 2));
	}
  calcular_perimetro() : number{
    return (2 * 3.14 * this.raio);
  }
}
  let circulo = new Circulo(6);
  console.log(`Valor da area do circulo ${circulo.calcular_area()}`);
  console.log(`Valor do perimetro ${circulo.calcular_perimetro()}`);
