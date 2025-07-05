function verificar() {
    var data = new Date() // data atual
    var ano = data.getFullYear() // ano atual
    var fano = window.document.getElementById("txtano") //pegar o ano digitado
    var res = window.document.querySelector('div#res') // pegar a div res

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex") // pegar os radios sex
        var idade = ano - Number(fano.value) //calcular a idade
        var genero = '' //variavel para armazenar o genero
        var img = document.createElement('img') //criar elemento img
        img.setAttribute('id', 'foto') //setar o id do elemento img pelo js
        if (fsex[0].checked) { // se o radio homem estiver selecionado
            genero = 'homem'
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
        } else if (fsex[1].checked) { // se o radio mulher estiver selecionado
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
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //mostrar o genero e a idade
        res.appendChild(img) //adicionar o elemento img dentro do div res
    }

}