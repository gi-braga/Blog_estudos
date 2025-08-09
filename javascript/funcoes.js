/*

//1. Vamos criar outro tipo de função, com argumentos de entrada, criaremos uma função que vai receber quatro notas de um aluno e imprimir se o aluno foi aprovado ou não.

//Declaramos nossos arrays e a variável para servir de índice no FOR que irá percorrer nosso array alunos.
var alunos = new Array()
var aluno = new Array()
var i, nota

function notas(n1, n2, n3, n4) {
    var soma = n1+ n2 + n3 + n4
    if(soma >= 60) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
    return soma
}

//Os próximos comandos são para preenchimento do array alunos com as informações dos alunos, nome e quatro notas.

aluno = ["Godofredo", 20, 10, 15, 5]
alunos[0]=aluno
aluno = ["Lindalva", 20, 20, 10, 30]
alunos[1]=aluno
aluno=["Claudison", 5, 5, 7, 2]
alunos[2]=aluno

for (i=0; i<alunos.length; i++) {
    console.log("Aluno: " + alunos[i][0] + " = ")
    nota=notas(alunos[i][1],alunos[i][2],alunos[i][3],alunos[i][4])
    console.log(" - Nota: " + nota) //nossa função retorna o valor da soma no final, ou seja, funcionará da mesma forma que anteriormente, porém, ao final retorna o valor da soma.
}

//Usamos um loop FOR que imprime o nome do aluno na posição alunos[i][0], e passamos as notas do aluno “i” para a função notas, que faz a devida verificação e imprime “Aprovado” ou “Reprovado”.



//2. Vamos criar um novo programa com uma função que irá receber uma série de números através de um array, calcular e retornar a média destes números.

var numeros=new Array()
var resultado

function media(nums) { //Criamos a função com um parâmetro de entrada que irá receber um array.
    var tam=nums.length //Obtivemos o tamanho do array (quantidade de números) passado e armazenamos na variável tam.
    var soma=0 //Criamos e iniciamos a variável soma com valor zero, conterá a soma dos números do array.
    for (i=0;i<tam;i++) { //Loop FOR para percorrer o array e somar todos os elementos guardando a soma na variável soma.
        soma+=nums[i]
    }

    return Math.floor(soma/tam) //Retorna o valor da média arredondado.
}

resultado = media([10,2,5,30,25,19])

console.log("A média é: " + resultado)

*/