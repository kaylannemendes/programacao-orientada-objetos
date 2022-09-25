/*3. Crie uma função que receba como parâmetros um nome e um pronome de tratamento
opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
imprima uma saudação semelhante a “Sra. Sávia”*/

function saudacao(nome: string, 
    pronome_tratamento? : string): string { 
        if (pronome_tratamento) { 
            return pronome_tratamento + nome;
        }else{
            return "Sr(a) " + nome;
        }
}
   console.log(saudacao("Maria"));
   console.log(saudacao("Maria" , "Senhorita "));
   console.log(saudacao("José"));
   console.log(saudacao("José", "Dr. "));