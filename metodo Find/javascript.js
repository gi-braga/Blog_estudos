const p_array=document.getElementById("array")
const txt_pesquisar=document.getElementById("txt_pesquisar")
const btnPesquisar=document.getElementById("btnPesquisar")
const resultado=document.getElementById("resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML="[" + elementos_array + "]"


btnPesquisar.addEventListener("click", (evt)=> {
    resultado.innerHTML="Valor não encontrado" //SE ELE NAO ENCONTRAR, A MENSAGEM SERÁ ESSA
    const ret=elementos_array.find((el, ind)=>{
        if(el==txt_pesquisar.value){
            resultado.innerHTML="Valor pesquisado " + el + " na posição " + ind
            return el
        }
    })
})