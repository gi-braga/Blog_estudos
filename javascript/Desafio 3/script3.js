function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value 
    var res = document.getElementById('res')

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)
    res.innerHTML = 'Contando: <br>'

    if (inicio == 0 && fim == 0 && passo == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (inicio < fim) {
        // contagem crescente
        for (var c = inicio; c <= fim; c+= passo) {
            res.innerHTML += `${c} `
        }        
    } else if (inicio > fim) {
        // contagem decrescente
        for (var c = inicio; c >= fim; c-= passo) {
            res.innerHTML += `${c} `
        }
    }

}
