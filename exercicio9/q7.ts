interface FiguraGeometrica {
    base: number;
    altura: number;
    base_menor?: number;
     
    
    getCalcularArea(base: number, altura: number, base_menor?: number): number;

}

class Triangulo implements FiguraGeometrica{
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    } 

    getCalcularArea(base: number, altura: number): number {
        return (this.base * this.altura) / 2;
        
    }
}

class Quadrado implements FiguraGeometrica{
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    getCalcularArea(base: number, altura: number): number {
        return this.base *this.altura;
    }
}

class Trapezio implements FiguraGeometrica{
    base_menor: number;
    base: number;
    altura: number;

    constructor(base: number, altura: number, base_menor: number){
        this.base = base;
        this.altura = altura;
        this.base_menor = base_menor;
    }

    getCalcularArea(base: number, base_menor: number, altura: number): number {
        return ((this.base + this.base_menor) * this.altura) / 2;
    }
}

let triangulo: Triangulo = new Triangulo(3,4);
let quadrado: Quadrado = new Quadrado(6,6);
let trapezio: Trapezio = new Trapezio(4,5,2);


console.log(triangulo.getCalcularArea(3,4));
console.log(quadrado.getCalcularArea(6,6));
console.log(trapezio.getCalcularArea(4,5,2));



