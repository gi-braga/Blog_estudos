function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value 
    var res = document.getElementById('res')

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)
    res.innerHTML = 'Contando: <br>'
    
    if (passo <= 0) {
        passo = 1
    }

    if (inicio == 0 && fim == 0 && passo == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (inicio < fim) {
        // contagem crescente
        for (var c = inicio; c <= fim; c+= passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}` // bandeira de chegada
    } else if (inicio > fim) {
        // contagem decrescente
        for (var c = inicio; c >= fim; c-= passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}` // bandeira de chegada
    }
    

}
