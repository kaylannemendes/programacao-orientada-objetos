import prompt from 'prompt-sync'
const input = prompt()

function main(){
  const valor1 = Number(input("Valor 1: "))
  const valor2 = Number(input("Valor 2: "))
  const valor3 = Number(input("Valor 3: "))
  
  const resultado_maior = maior_valor(valor1,valor2,valor3)
  const resultado_menor = menor_valor(valor1,valor2,valor3)
  
  console.log(`Maior valor ${resultado_maior}, menor valor ${resultado_menor}`)
}
main()

function maior_valor(v1,v2,v3){
  if (valor1 > valor2 && valor1 > valor3){
    return `O valor 1 é o maior valor`
  }else if (valor2 > valor1 && valor2 > valor3){
    return`O valor 2 é o maior`
  }else {
    return `O valor 3 é o maior`
  }
}
function menor_valor(v1,v2,v3){
  if (valor1 < valor2 && valor1 < valor3){
    return `O valor 1 é o menor valor`
  }else if (valor2 < valor1 && valor2 < valor3){
    return `O valor 2 é o menor`
  }else {
    return `O valor 3 é o menor`
  }
}
