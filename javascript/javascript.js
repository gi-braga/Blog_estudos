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

*/
