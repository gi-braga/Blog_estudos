/* var vel = 60.5
console.log(`A velocidade do seu carro é ${vel} Km/h.`)
if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Diriga usando sempre cinto de segurança!`)

var país = 'Brasil'
console.log(`Vivendo em ${país}`)
if (país == 'Brasil') {
    console.log(`Você é brasileiro!`)
} else {
    console.log(`Você é estrangeiro!`)
}

var idade = 18
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}



var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}

// Estruturas de repetição 

//Teste logico no inicio (while)
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ // incrementa c em 1
}

//Teste logico no final (do...while)
var c = 1
do {
    console.log(`Passo ${c}`)
    c++ // incrementa c em 1
} while (c <= 6)


// Estruturas de repetição com for

for (var c=1; c<=6; c++) {
    console.log(`Passo ${c}`)
}



console.log('Vai começar...')
for (var c=1; c<=6; c++) {
    console.log(c)
}
console.log('FIM!')


let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(num) //acrescenta colchetes e espaços na visualização

num[5] = 7 //adiciona o numero 7 na posição 5
console.log(num)

num.push(4) //adiciona o numero 4 na ultima posição
console.log(num)

num.length //mostra o tamanho do vetor
num.sort() //ordena os valores do vetor
console.log(num)

let num = [8, 1, 7, 4, 2, 9]

for (let pos=0; pos < num.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}


let num = [8, 1, 7, 4, 2, 9]
num.sort()
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let num = [8, 1, 7, 4, 2, 9]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7) //busca o valor 7 no vetor

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else { 
    console.log(`O valor 8 está na posição ${pos}`)
}


function parimpar(n) {
    if (n%2 == 0 ) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(5)
console.log(`O número é ${res}`)



function soma(n1=0, n2=0) {
    return n1 + n2
}

let res = soma(7, 2)
console.log(`A soma é ${res}`)


let v = function(x) {
    return x*2
}

console.log(v(5))


// fatorial de um numero 

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c // fat = fat * c
    }
    return fat
}

console.log(fatorial(5))

// RECURSIVIDADE
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!

// n! = n x (n-1)!
1! = 1


function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))



let n = 8

n **= 2

console.log(n)

//break e continue

let n=0
let max=100
let pares=0

for (let i=n; i<max; i++) {
    if(i%2 != 0) {
        continue
    }
    console.log('Testando loops - ' + i)
    pares++
}

console.log('Quantidade de pares: ' + pares)
console.log('Fim do programa')

// PARAMETRO REST

function soma(...valores) {
    let tam = valores.length
    let res = 0
    for(let i=0; i < tam; i++) {
        res += valores[i]
    }
    return res
}

console.log(soma(10, 5, 2, 8))



//FUNÇÃO ANONIMA

const f = function(v1,v2) {
    return v1 + v2
}

console.log(f(10,5))


//ARROW FUNCTION

const soma = (n1, n2) => {return n1 + n2}
console.log(soma(10,5))

const nome = n => {return n} //Não precisa de parenteses se for somente um parametro
console.log(nome("Gisele"))

const add = n => n + 10 //não precisa do return
console.log(add(10))


//FUNÇÕES DENTRO DE FUNÇÕES

const soma = (...valores) => {
    const somar = val => {
        let res=0
        for(v of val)
            res += v
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,8,2))


// FUNÇÕES GERADORAS

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc) //retornou a função
console.log(itc.next().value) //executa o primeiro valor da função
console.log(itc.next().value) //executa o segundo valor da função
console.log(itc.next().value) //executa o terceiro valor da função



function* perguntas() {
    const nome = yield 'Qual seu nome? '
    const esporte = yield 'Qual seu esporte favorito? '
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Gisele').value)
console.log(itp.next('Volei').value)



function* contador() {
    let i = 0
    while (true) { //loop infinito 
        yield i++
    }
}

const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)


function* contador() {
    let i = 0
    while (true) { //loop infinito
        yield i++
        if (i > 5)
            break //controle que quebrará o loop infinito
    }
}

const itc = contador()
for (let c of itc) {
    console.log(c)
}

// METODO MAP

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

cursos.map((el, i) => { //Primeiro parametro é o elemento da coleção a cada iteração e o segundo parametro é o indice
    console.log("Curso: " + el + " - Posição do curso: " + i)

}) 


const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

let c = cursos.map((el, i) => { 
    return el //Quando quiser retornar o elemento de forma simples
}) 

console.log(c)

//UTILIZANDO OPERADOR THIS EM FUNÇÕES

function aluno(nome,nota) {
    this.nome=nome
    this.nota=nota

    this.dados_anonimo = function() { //RESULTADO UNDEFINED PORQUE NO SetTimeOut O THIS É GERADO NUMA NOVA INSTANCIA
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000) //setTimeout é o 'aguarde' do Portugol
    }
    this.dados_arrow = function() {
        setTimeout(() => { //ARROW FUNCTION CONTORNA O THIS GERADO EM NOVA INSTANCIA
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1 = new aluno('Gisele', 100)
al1.dados_anonimo()
al1.dados_arrow()

// METODO FILTER

const idade=[15, 21, 30, 17, 18, 44, 12, 50]

//const filtroMaior18=(valor,incice,arr)=>{
//const filtroMaior18=(valor)=>{
//    if(valor >= 18)
//        return valor
//}

const maior=idade.filter((val,ind,arr)=>{
    if(val >= 18)
        return val
})

const menor=idade.filter((val,ind,arr)=>{
    if(val <= 18)
        return val
})


console.log(idade)
console.log(maior)
console.log(menor)


//ITERADORES - 
//Coleção: Arrays, String, Map, Sets

const valores=[10,8,9,2,]
const iterador_val=valores[Symbol.iterator] ()

console.log(valores)
console.log(iterador_val.next().value)
console.log(iterador_val.next().value)
console.log(iterador_val.next().value)
console.log(iterador_val.next().value)
console.log(iterador_val.next().value)


*/


let mapa = new Map()

mapa.