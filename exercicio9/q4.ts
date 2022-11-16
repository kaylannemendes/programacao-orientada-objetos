/*4. Imagine que você deve modelar várias figuras geométricas em TypeScript e que
cada uma tem sua forma específica de calcular área e perímetro. Proponha e
implemente uma hierarquia de classes usando uma classe abstrata chamada
FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.*/

abstract class FiguraGeometrica {
    base: number;
    altura: number;
        
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    abstract getCalcularArea(): number;

}

class Triangulo extends FiguraGeometrica{
   
    constructor(altura: number, base: number){
        super(altura, base);
    }

    getCalcularArea(): number {
        return (this.base * this.altura) / 2;
        
    }
}

class Quadrado extends FiguraGeometrica{

    constructor(base: number, altura: number){
        super(base, altura);
    }

    getCalcularArea(): number {
        return this.base *this.altura;
    }
}

class Trapezio extends FiguraGeometrica{
    base_menor: number;

    constructor(base: number, altura: number, base_menor: number){
        super(base, altura);
        this.base_menor = base_menor;
    }

    getCalcularArea(): number {
        return ((this.base + this.base_menor) * this.altura) / 2;
    }
}

let triangulo: Triangulo = new Triangulo(3,4);
let quadrado: Quadrado = new Quadrado(6,6);
let trapezio: Trapezio = new Trapezio(4,5,2);


console.log(triangulo.getCalcularArea());
console.log(quadrado.getCalcularArea());
console.log(trapezio.getCalcularArea());



