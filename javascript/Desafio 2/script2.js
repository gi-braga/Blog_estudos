function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criar elemento img
        img.setAttribute('id', 'foto') //setar o id do elemento img pelo js
        if (fsex[0].checked) {
            genero = 'homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adicionar o elemento img dentro do div res
    }

}