const mat=document.getElementById("mat")

//a biblioteca math.js é uma classe estática. Logo, ela não precisa ser instanciada, é só usar.

/*
mat.innerHTML = Math.E //constante de Euler (a base dos logaritmos naturais)

mat.innerHTML = Math.PI //constante Pi (relação entre a circunferência e o diâmetro)

mat.innerHTML = Math.abs(-5) //valor absoluto

*/

mat.innerHTML = Math.random() //número aleatório entre 0 e 1 (exclusivo)
mat.innerHTML = Math.random()*10 //número aleatório entre 0 e 10 (exclusivo)
mat.innerHTML = Math.floor(Math.random()*11) //número arredondado aleatório entre 0 e 10 (inclusivo)