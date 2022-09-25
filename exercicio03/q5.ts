/*5. Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os eventuais
resultados:
function soma(x: number, y?: any): number {
return x + y
}
a. console.log(soma(1, 2));
b. console.log(soma(1, "2"));
c. console.log(soma(1));*/

function soma(x: number, y?: any): number {
    return x + y
    }
    console.log(soma(1, 2)); //3
    console.log(soma(1, "2")); //12
    console.log(soma(1)); //NaN