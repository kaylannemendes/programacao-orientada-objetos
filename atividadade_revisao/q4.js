import prompt from 'prompt-sync'
const input = prompt()

function main(){
  const valor = Number(input("Digite um número entre 1-12: "))
  const resultado = qual_mes(valor)
  console.log(`O mês é: ${resultado}`)
}
main()
function qual_mes(valor){
  if (valor === 1){
    return 'Janeiro'
  }else if (valor === 2){
    return 'Fevereiro'
  }else if (valor === 3){
    return 'Março'
  }else if (valor === 4){
    return 'Abril'
  }else if (valor === 5){
    return 'Maio'
  }else if (valor === 6){
    return 'Junho'
  }else if (valor === 7){
    return 'Julho'
  }else if (valor === 8){
    return 'Agosto'
  }else if (valor === 9){
    return 'Setembro'
  }else if (valor === 10){
    return 'Outubro'
  }else if (valor === 11){
    return 'Novembro'
  }else{
    return 'Dezembro'
  }
}
