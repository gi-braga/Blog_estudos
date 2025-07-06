let amigo = {nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p){ //Funções dentro de variáveis!
        console.log('Engordou')
        this.peso += p
    }}




console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`) //amigo.nome exibe somente o atributo selecionado no objeto

amigo.engordar(2) //Adiciona parametro para função engordar
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
