/*
let amigo = {nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p){ //Funções dentro de variáveis!
        console.log('Engordou')
        this.peso += p
    }}




console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`) //amigo.nome exibe somente o atributo selecionado no objeto

amigo.engordar(2) //Adiciona parametro para função engordar
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)



//HERANÇAS EM CLASSES

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

const c2=new Militar("Lutador", 1, 100, 50)
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-----------------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`) //Metodo atirar() vai reduzindo numero de munições
console.log(`Cor: ${c2.cor}`)
console.log("-----------------------------------")

*/