/*const botao_soma=document.querySelector("#btn_soma")
const botao_div=document.querySelector("#btn_divi")
const botao_mult=document.querySelector("#btn_mult")
const botao_subt=document.querySelector("#btn_subt")*/

const telaResultado = document.querySelector("#result")
const numero = document.querySelector(".num")

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