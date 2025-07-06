function tabuada() {
    var txtn = document.getElementById('txtn')
    var num = Number(txtn.value)
    var res = document.getElementById('res')
    res.innerHTML = `Tabuada do ${num}:<br>`

    if (txtn.value.length == 0) {
        window.alert('Por favor, digite um número!')
        res.innerHTML = 'Impossível calcular!'
        return
    }

    for (var c = 1; c <= 10; c++) {
        res.innerHTML += `${num} x ${c} = ${num * c}<br>`
    }
    
}
