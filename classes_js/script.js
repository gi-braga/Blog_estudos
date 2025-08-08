const palco = document.getElementById("palco")
const num_objetos = document.getElementById("n_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_adicionar")
const btn_del = document.getElementById("btn_remover")

//precisamos saber o tamanho da área disponivel em que será trabalhado

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

//criação do objeto Bola com todas as propriedades(tamanho, cor, posição, velocidade e direção) e métodos (controle de movimento e colisão, por exemplo)

class Bola{ //a criação desse objeto não exibirá a bolinha, voce precisará instanciar a classe bola, ao instanciar voce criará a bolinha no DOM e relacionar aquela bolinha do DOM com esse objeto instanciado.
    constructor(arrayBolas,palco){
        this.tam = Math.floor(Math.random()*15)+10 //tamanho minimo será 10 e o máximo será 19
        this.r =  Math.floor(Math.random()*255) //sortear em R
        this.g =  Math.floor(Math.random()*255) //sortear em G
        this.b =  Math.floor(Math.random()*255) //sortar em B
        this.posX = Math.floor(Math.random()*(larguraPalco-this.tam)) //definir a posição de onde a bolinha ficará no eixo x
        this.posY = Math.floor(Math.random()*(alturaPalco-this.tam)) //definir a posição de onde a bolinha ficará no eixo y
        this.velX = Math.floor(Math.random()*2)+0.5 //velocidade minima será 0.5 e a máxima será 2.5
        this.velY = Math.floor(Math.random()*2)+0.5
        this.dirX = (Math.random()*10)>5?1:-1 //Sortear um número, se ele for maior do que 5 (random > 5) ele me retorna a direção 1, se o numero for menor, retornará -1
        this.dirY = (Math.random()*10)>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        //é preciso garantir que toda bolinha criada tenha um ID diferente. Esse ID será o Timestamp (contagem no momento da criação) + um numero sorteado
        this.id = Date.now()+ "_" + Math.floor(Math.random()*100000000000000) //sortar um numero entre 0 e 100 trilhoes, e a chance desse numero ser igual é muito remota!
        this.desenhar() //chamada de função para desenhar a bolinha no DOM

        this.controle = setInterval(this.controlar,10) //variavel para definir o controle

        this.eu = document.getElementById(this.id) //variavel que vai relacionar a bolinha que foi instanciada no DOM com esse objeto instanciado no arrayBolas
        numBola++ //adicionar a cada construção do objeto uma bolinha no array 
        num_objetos.innerHTML = numBola //preencher o numero de objetos (num_objeto) no paragrafo com o valor da variavel Bola (numBola)
    }
    //Criação dos métodos que a bolinha terá
    //função para definir posição no arrayBolas
    minhaPos=()=>{
        return this.arrayBolas.indexOf(this) //retorna a posição da bola criada dentro do array Bolas
    }

    //função para remover uma bolinha (limpar o intervalo de controle de movimento, remover do array Bola e remover do DOM)
    remover=()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if (b.id != this.id) {
                return b
            } //Se o id da bolinha que ele ta comparando for diferente do id dessa bola, ele retorna para o array. Ou seja, quando ele chegar nessa bolinha especificamente (do id), ela nao será retornada para o array, sendo excluida da composição
        })
        this.eu.remove() //remover elemento do DOM
        numBola-- //atualizar o valor de bola com uma a menor
        num_objetos.innerHTML = numBola //atualizar o paragrafo onde mostrará o numero de bolas no palco
    }

    //função para desenhar as bolinhas
    desenhar=()=>{
        const div = document.createElement("div") //criar div para a bolinha
        div.setAttribute("id",this.id) //adicionar o id especifico para cada uma
        div.setAttribute("class","bola") //indicar a classe bola que já consta no CSS
        div.setAttribute("style", `left:${this.posX}px; top:${this.posY}px; width:${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`) //todas as propriedades que definimos como variaveis (posição (left e top), width, height e cor)
        this.palco.appendChild(div) //adicionar no DOM dentro do palco
    }

    //isolar controle de colisão com as bordas
    controle_colisao=()=>{
        //Posição X e Y será na extremidade esquerda/cima da bolinha, é preciso alterar essa extremidade para identificar quando ela encostar na borda.
        if(this.posX + this.tam > larguraPalco) {
            this.dirX = -1
        } else if(this.posX <=0){
            this.dirX = 1
        }

        if(this.posY + this.tam > alturaPalco) {
            this.dirY = -1
        } else if(this.posY <=0){
            this.dirY = 1
        }
    }

    //função para controlar a movimentação da bolinha
    controlar=()=>{
        this.controle_colisao()
        //atualizar a posiçao da bolinha:
        this.posX += this.dirX * this.velX //Pegar a posição atual e incrementar com a nova posição definida através da direção e velocidade
        this.posY += this.dirY * this.velY
        //atualizar a bolinha no DOM:
        this.eu.setAttribute("style",`left:${this.posX}px; top:${this.posY}px; width:${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`)
        //controle para remover bolinhas fora da tela em casos de redução de tamanho da janela
        if((this.posX >larguraPalco)||(this.posY>alturaPalco)){
            this.remover()
        }
    }

}

window.addEventListener("resize",(evt)=>{
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click",(evt)=>{
    const quantidade = txt_qtde.value
    for(let i=0;i<quantidade;i++){
        //Instânciar novos objetos de bolinhas: rotina para criação das bolinhas
        bolas.push(new Bola(bolas,palco)) //Dar um push no array bolas com a nova bolinha instanciada
    }
})

btn_del.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        //remover a bolinha (uma de cada vez)
        b.remover()
    })
})