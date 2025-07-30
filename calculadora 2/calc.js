const teclasNum=[...document.querySelectorAll(".tecla")]
const teclasOp=[...document.querySelectorAll(".teclaOp")]
const teclaRes=document.querySelector(".teclaRes")
const visor=document.querySelector(".visor")
const teclaOn=document.getElementById("tligar")
const teclaLimpar=document.getElementById("tlimpar")

//Função para adicionar numeros no visor
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        visor.innerHTML+=evt.target.innerHTML //Valores no botao
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        visor.innerHTML+=evt.target.innerHTML //Valores no botao
    })
})

teclaLimpar.addEventListener("click",(evt)=>{
    visor.innerHTML="0" //Limpa o visor
})