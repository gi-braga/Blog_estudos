const telaResultado = document.querySelector("#result")

let conta

//ADICIONANDO NUMEROS NA TELA
function botao(value) {
    conta = telaResultado.value += value
} 

//LIMPANDO TELA (C)
function limpar() {
  telaResultado.value = ""
}

//APAGANDO ULTIMO NUMERO(DEL)
function retirar() {
    const palavraCompleta = telaResultado.value
    const ultimaLetra = palavraCompleta.substring(0, telaResultado.value.length - 1)
    console.log(ultimaLetra)
    
    telaResultado.value = ultimaLetra
}

//FUNÇÃO DE CALCULO
function calc() {

  const resultado = eval(conta)
  telaResultado.value = resultado
}