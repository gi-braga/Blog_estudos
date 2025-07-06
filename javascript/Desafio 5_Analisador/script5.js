let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
// Verifica se o número é valido
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lis) {
// Verifica se o número já apareceu na lista
    if (lis.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Funcão para adicionar numeros à lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adiciona o numero ao vetor
        valores.push(Number(num.value)) 

        // cria um novo item na lista (elemento option)
        let item = document.createElement('option')
        // Adiciona o valor do numero ao item
        item.text = `Valor ${num.value} adicionado.`
        // Adiciona o item à lista
        lista.appendChild(item)
        
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    
    // Limpa o campo de entrada
    num.value = ''
     // Foca novamente no campo de entrada
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos] //somar cada valor adicionado aos anteriores
            // verifica o maior e o menor valor
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML = '' //zera o valor de res

        // Analisa a quantidade de numeros
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`

    }
}