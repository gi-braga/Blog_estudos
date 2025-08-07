//cria referência ao form e aos elementos h3 e h4 (resposta)
const form= document.querySelector('form')
const resp1= document.querySelector('h3')
const resp2= document.querySelector('h4')

//criar um "ouvinte de evento, acionado quando o botao submit for clicado

form.addEventListener("submit", (evt)=>{
    const titulo = form.filme.value //obtem conteudo do input
    const duracao = Number(form.duracao.value)

    const horas = Math.floor(duracao/60) //calcula horas arredondando para baixo o resultado
    const minutos = duracao % 60 //calcula minutos com o resto da divisão

    resp1.innerHTML = `Filme: ${titulo}`
    resp2.innerHTML = `Duração: ${horas} horas e ${minutos} minutos`

    evt.preventDefault() //previne o comportamento padrão do form
    form.reset() //limpa o form
})

//cria referencia ao form e aos elementos h3 e h4 (resposta)
const form2 = document.getElementById('form2')
const resp3 = document.querySelector('h3#resp3')
const resp4 = document.querySelector('h4#resp4')

form2.addEventListener("submit",(evt)=>{
    const veiculo = form2.veiculo.value //obtem conteudo do input
    const preco = Number(form2.preco.value)

    const entrada = preco*0.50 //calcula entrada como 50% do preço
    const parcelas = (preco*0.50) / 12 //calcula parcelas como o restante dividido por 12

    resp3.innerHTML = `Veículo: ${veiculo}`
    resp4.innerHTML = `Entrada: R$ ${entrada.toFixed(2)}`
    resp4.innerHTML += `<br>12 Parcelas de: R$ ${parcelas.toFixed(2)} por mês`

    evt.preventDefault() //previne o comportamento padrão do form
    form2.reset() //limpa o form
})