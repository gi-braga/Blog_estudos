const palco = documento.getElementById("palco")
const num_objetos = document.getElementById("n_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_adicionar = document.getElementById("adicionar")
const btn_remover = document.getElementById("remover")

//precisamos saber o tamanho da área disponivel em que será trabalhado

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

window.addEventListener("resize",(evt)=>{
    console.log("Redimensionou")
})