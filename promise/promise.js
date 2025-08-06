/* CODIGO INICIAL

const numero=document.getElementById("numero")

let resultado=false
let tempo=3000

setTimeout(()=>{ //depois do tempo de 3000 ele mudará o valor do resultado para true, somente depois de 3 segundos
    resultado=true
},tempo)

if(resultado){ //verifica o valor do resultado formatando a classe de acordo com o mesmo
    numero.innerHTML="Deu tudo certo"
    numero.classList.remove("erro")
    numero.classList.add("ok")
} else { //formatação que acontece uma vez que resultado=false
    numero.innerHTML="Deu tudo errado"
    numero.classList.add("erro")
    numero.classList.remove("ok")
}


numero.innerHTML="Processando..."

*/

/*
//CRIANDO UMA PROMISE

const numero=document.getElementById("numero")

let promise=new Promise((resolve, reject)=>{ //Promessa de retorno foi feita aqui
    let resultado=true
    let tempo=3000

    setTimeout(()=>{
        if(resultado){
            resolve("Deu tudo certo")
            
        }else{
            reject("Deu tudo errado")
        }
    },tempo)
})


// Quando terminada a execução da promise, ela pode retornar um valor de sucesso ou de erro:
// promise.then() //se der certo
// promise.catch() //se der errado


promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})


promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})

numero.innerHTML="Processando..."

//Logo após os 3 segundos, o valor de numero.innerHTML será atualizado com o retorno da promisse, seja de sucesso ou de erro.
*/

// COLOCANDO A PROMISSE DENTRO DE UMA FUNÇÃO PARA EXECUTA-LA NUM MOMENTO DETERMINADO OU REPETIDAS VEZES


const numero=document.getElementById("numero")
const btn_promessa=document.getElementById("btn_promessa")

//Evento que mudará o valor do innerHTML para "Processando..." e chamará a função criarPromessa. Que por sua vez retornará a promise após 3 segundos!

btn_promessa.addEventListener("click", (evt)=>{ 
    numero.innerHTML="Processando..."
    promessa()
    .then((retorno)=>{ //associado diretamente a função promessa
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })

    .catch((retorno)=>{
       numero.innerHTML=retorno
       numero.classList.add("erro")
       numero.classList.remove("ok")
    })
})

//promise dentro de uma função que poderá ser chamada quando necessário
const promessa=()=>{
    let p=new Promise((resolve, reject)=>{ 
        let resultado=true
        let tempo=3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo")
            
            }else{
                reject("Deu tudo errado")
            }
        },tempo)
    })
    return p //função retorna a promise
}

numero.innerHTML="Esperando..."