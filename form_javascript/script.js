class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
    }
    getnome(){
       return this.nome
    }

    getidade(){
       return this.idade
    }

    setnome(nome){
       this.nome=nome
    }

    setidade(idade){
       this.idade=idade
    }

    info(){
       console.log(`Nome..: ${this.nome}`)
       console.log(`Idade.: ${this.idade}`)
       console.log("---------------------")
    }
}

let pessoas=[]

const btn_add=document.querySelector("#btn_add")
const res=document.querySelector(".res")

const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML=`Nome: ${p.getnome()}<br>Idade: ${p.getidade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",()=>{
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addPessoa()
})