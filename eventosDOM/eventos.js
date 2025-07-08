const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const botao1 = document.querySelector("#botao")
const todosCursos = [...document.querySelectorAll(".curso1")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado") //Elemento quando acionado vai mudar para a classe selecionado se nao a tiver, se já estiver selecionado vai remover
    })
})

botao1.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoselecionados = [...document.querySelectorAll(".curso1:not(.selecionado)")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
}) //Movimenta os itens selecionados da caixa1 para a caixa2 e os não selecionados da caixa2 para a caixa1
