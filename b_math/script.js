const mat=document.getElementById("mat")

//a biblioteca math.js é uma classe estática. Logo, ela não precisa ser instanciada, é só usar.

/*
mat.innerHTML = Math.E //constante de Euler (a base dos logaritmos naturais)

mat.innerHTML = Math.PI //constante Pi (relação entre a circunferência e o diâmetro)

mat.innerHTML = Math.abs(-5) //valor absoluto

mat.innerHTML = Math.random() //número aleatório entre 0 e 1 (exclusivo)
mat.innerHTML = Math.random()*10 //número aleatório entre 0 e 10 (exclusivo)
mat.innerHTML = Math.floor(Math.random()*11) //número arredondado aleatório entre 0 e 10 (inclusivo)

mat.innerHTML = Math.round(5.4) //arredonda para o inteiro mais próximo

mat.innerHTML = Math.pow(2, 3) //2 elevado a 3 (2^3)

mat.innerHTML = Math.sqrt(64) //raiz quadrada de 64
*/

//pegar a referencia dos elementos dos olhos
const olhos = [...document.getElementsByClassName("olho")]

let posX_mouse = 0
let posY_mouse = 0

//pegar a coordenada do mouse
window.addEventListener("mousemove", (evt) => {
    posX_mouse = evt.clientX //retorna um number com a posição X do mouse
    posY_mouse = evt.clientY

    const rot = Math.atan2(posY_mouse,posX_mouse) //retorna o arco tangente de dois coeficientes EM RADIANOS

    olhos.forEach((olho)=>{
        olho.style.transform = "rotate("+(rot*180/Math.PI)+"deg)" //converte radianos para graus (*180/Pi)
    })


})
