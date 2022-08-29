1. Qual a diferença entre objetos e classes? Exemplifique.
Classe seria um planejamento do objeto, como a planta de uma casa e o objeto seria materialização 
desse dessa classe como uma casa pronta.

2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um
exemplo de objeto que possua atributos e métodos (notação livre).
Atributos são as propriedades de um objeto e metodo é a acão que esse objeto realiza. 
Ex: Impressora 
Atributos --> Marca, modelo, tipo
Métodos --> Imprimir, escanear, xerocopiar

3. A abstração visa focar no que é importante para um sistema. Você concorda que
um atributo de uma pessoa pode ser importante ou não dependendo do contexto
do sistema. Enumere na tabela abaixo contextos/sistemas distintos em que os
atributos abaixo seriam relevantes:

Atributo Sistema em que é           importante
Peso                                Massa corporal
Tipo de CNH                         Categoria
Tipo Sanguíneo                      Antigenos 
Habilidade destra                   Mão direita
Percentual de gordura               IMC
Saldo em conta                      Entradas e saídas 
Etinia                              Religião

4. Considerando os objetos Pessoa e Conta:
a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
"pessoa" como um atributo interno representando o titular da conta? 
Para saber se a conta é de uma pessoa física ou jurídica.

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?
Seria interessante ela possuir uma unica conta tendo como metodos que cada uma 
realiza. Seu elemento na programação estruturada seria a seleção.

5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.
Professores, Campus, Curso, Notas, Gestores.

6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais
características (atributos) e comportamentos (métodos) que os mesmos poderiam
ter.
Objeto --> Personagem
Atributos --> altura, habilidades, nivel de inteligencia
Metodos --> correr, saltar, caminhar, lutar                                                 

7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.

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


8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

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

9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado  saldo()que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().

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
