/*4. Crie uma função que retorne os números de um array passados por parâmetro separados
por traço (-) no formato string. Para isso, use o método forEach dos arrays.*/

let numbers = [1,2,3,4,5];

numbers.forEach(function(numeros) {
    console.log("- " + numeros);
});