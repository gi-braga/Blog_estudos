const teclasNum=[...document.querySelectorAll(".tecla")]
const teclasOp=[...document.querySelectorAll(".teclaOp")]
const teclaRes=document.querySelector(".teclaRes")
const visor=document.querySelector(".visor")
const teclaOn=document.getElementById("tligar")
const teclaLimpar=document.getElementById("tlimpar")
const teclaIgual=document.getElementById("tigual")

let sinal=false //variavel para verificar se o ultimo caracter é um operador
let decimal=false //variavel para controlar a virgula

//Função para adicionar numeros no visor
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        
        if(evt.target.innerHTML==="."){
            if(!decimal){
                decimal=true
                if(visor.innerHTML==="0"){
                    visor.innerHTML="0."
                } else {
                    visor.innerHTML+=evt.target.innerHTML
                }
            }
        } else {
            if(visor.innerHTML==="0"){ //limpar o 0 do visor
              visor.innerHTML=""
            }
            visor.innerHTML+=evt.target.innerHTML //Valores no botao
        }    
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(visor.innerHTML==="0"){ //limpar o 0 do visor
                visor.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){ //substitui o x por *
                visor.innerHTML+="*"
            } else {
                visor.innerHTML+=evt.target.innerHTML //Valores no botao
            }
        }
    })
})

teclaLimpar.addEventListener("click",(evt)=>{
    sinal=true //resetar a variavel sinal
    decimal=false
    visor.innerHTML="0" //Limpa o visor
})

teclaIgual.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res= eval(visor.innerHTML)
    visor.innerHTML=res //exibe o resultado
})

