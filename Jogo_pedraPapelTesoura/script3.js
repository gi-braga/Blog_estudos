function jogar() {
    var escolha = document.getElementsByName('escolha')
    var escolhaUsuario = ''
    var escolhaComputador = (Math.floor(Math.random()*3)+1)
    var res = window.document.querySelector('div#res')
    
    if (escolha[0].checked) {
        escolhaUsuario = 'pedra'
    } else if (escolha[1].checked) {
        escolhaUsuario = 'papel'
    } else if (escolha[2].checked) {
        escolhaUsuario = 'tesoura'
    }


    //JOGO

    if (escolhaUsuario == escolhaComputador) {
         // Jogador Pedra, Computador Pedra --> empate
         // Jogador Tesoura, Computador Tesoura --> empate
         // Jogador Papel, Computador Papel --> empate
         res.innerHTML = ('Empate!!')

    } else if (escolha[0].checked) {
        escolhaUsuario = 'pedra'
        if (escolhaComputador == 2) {
        // Jogador Pedra, Computador Papel --> Computador vence
        res.innerHTML = ('Computador venceu, escolheu papel')
        } else if (escolhaComputador == 3) {
        // Jogador Pedra, Computador Tesoura --> Jogador vence
        res.innerHTML = ('Você venceu, computador escolheu tesoura')
        }
    } else if (escolha[2].checked) {
        escolhaUsuario = 'tesoura'
        if (escolhaComputador == 2) {
        // Jogador Tesoura, Computador Papel --> Jogador vence
        res.innerHTML = ('Você venceu, computador escolheu papel')
        } else if (escolhaComputador == 1) {
        // Jogador Tesoura, Computador Pedra --> Computador vence
        res.innerHTML = ('Computador venceu, escolheu pedra')
        }
    } else if (escolha[1].checked) {
        escolhaUsuario = 'papel'
        if (escolhaComputador == 3) {
        // Jogador Papel, Computador Tesoura --> Computador vence
        res.innerHTML = ('Computador venceu, escolheu tesoura')
        } else if (escolhaComputador == 1) {
         // Jogador Papel, Computador pedra --> Jogador Vence
        res.innerHTML = ('Você venceu, computador escolheu pedra')
        }
    }

}