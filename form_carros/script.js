const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")


let a_carros=[]

f_tipoMilitar.addEventListener("click", (evt)=>{
    f_nome.value=""
    f_portas.value=""
    f_blindagem.value=0
    f_municao.value=0
    f_municao.removeAttribute("disabled")
    f_blindagem.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click", (evt)=>{ //DESABILITAR OPÇÃO DE MUNICAO E BLINDAGEM PARA OS CARROS NORMAIS, ALEM DE ZERAR OS VALORES
    f_nome.value=""
    f_portas.value=""
    f_blindagem.value=0
    f_municao.value=0
    f_municao.setAttribute("disabled", "disabled")
    f_blindagem.setAttribute("disabled", "disabled")
})

const gerenciarExibicaoCarros=()=>{ //FUNCAO PARA MOSTRAR TODOS OS CARROS QUE ESTAO NO ARRAY a_carros NA DIV DO HTML
    carros.innerHTML=""
    a_carros.forEach((c) => {
        if(f_tipoMilitar.checked){
            const div = document.createElement("div") //CRIAR DIV
            div.setAttribute("class", "carro") //ATRIBUIR CLASSE
            div.innerHTML=`Nome: ${c.nome}<br>` //EXIBIR NOME
            div.innerHTML+=`Portas: ${c.portas}<br>`
            div.innerHTML+=`Cor: ${c.cor}<br>`
            div.innerHTML+=`Blindagem: ${c.blindagem}<br>`
            div.innerHTML+=`Munição: ${c.municao}<br>`
            carros.appendChild(div)
        } else {
            const div = document.createElement("div") //CRIAR DIV
            div.setAttribute("class", "carro") //ATRIBUIR CLASSE
            div.innerHTML=`Nome: ${c.nome}<br>` //EXIBIR NOME
            div.innerHTML+=`Portas: ${c.portas}<br>`
            carros.appendChild(div)
        }
    });   
}

btn_addCarro.addEventListener("click", ()=>{ //EVENTO NO BOTAO PARA ADD CARROS
    //verificar qual carro está selecionado
    if (f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

class Carro{ //CLASSE PAI OU BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ //CLASSE FILHO HERDANDO PROPRIEDADES E METODOS DO PAI
    constructor(nome,portas,blindagem,municao){
        super(nome, portas) //INVOCAR ALGO DA CLASSE PAI
        this.blindagem=blindagem 
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

const c1=new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

