/*Crie uma função que recebe como parâmetro um número e retorna true se o número for
par e false se for ímpar.*/

function imparPar(num: number ) : boolean{
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
 
console.log(imparPar(17));
