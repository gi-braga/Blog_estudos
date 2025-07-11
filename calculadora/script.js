//receber valores digitados no input
//variavel para armazenar valor 1
//variavel para armazenar valor 2
//funções para realizar operações aritméticas (soma, subt, mult, divi, modu, raiz, del, zero)
//imprimir na tela o resultado

const numeros = document.querySelectorAll("input")
const telaResultado = document.querySelector("result")
let conta

function botao(value) {
    conta = telaResultado.value += value
}