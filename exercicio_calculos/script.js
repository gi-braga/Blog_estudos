const botao_soma=document.querySelector("#btn_soma")
const botao_subt=document.querySelector("#btn_subt")
const botao_mult=document.querySelector("#btn_mult")
const botao_divi=document.querySelector("#btn_divi")
const res=document.querySelector("#result")

//POPULANDO ARRAYS COM FUNÇÕES
const operacoes=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0])/Number(val[1])
    },
]

botao_soma.addEventListener("click",()=>{operacoes[0]()})
botao_subt.addEventListener("click",()=>{operacoes[1]()})
botao_mult.addEventListener("click",()=>{operacoes[2]()})
botao_divi.addEventListener("click",()=>{operacoes[3]()})

function limpar() {
    document.getElementById("valor1").value = ""
    document.getElementById("valor2").value = ""
    res.value = ""
}