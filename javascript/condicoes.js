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

*/

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
