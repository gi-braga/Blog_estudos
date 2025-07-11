/**MESMO PROGRAMA DO EXERCICIO METODO FILTER MAS COM O USO DO TOGGLE NO LUGAR DO RADIO PARA CURSOS SELECIONADOS*/

const caixaCursos=document.getElementById("caixaCursos")
const botao_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const botaoCursoSelecionado=document.getElementById("btnCursoSelecionado")
const botaoRemoverCurso=document.getElementById("btnRemoverCurso")
const botaoAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoA")
const botaoAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoD")
const nomeCurso=document.getElementById("nomeCurso")

let indice=0 //POSIÇÃO DO ELEMENTO

//FUNÇÃO PARA TIRAR CLASSE SELECIONADA NO TOGGLE
const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}
//CRIANDO ELEMENTOS NO HTML
const criarNovoCurso = (curso) => {
    const novoElemento=document.createElement("div") 
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=curso

    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el) //CRIAR NOVO ELEMENTO CHAMANDO A FUNÇÃO CriarNovoCurso
    caixaCursos.appendChild(novoElemento) //INSERIR ELEMENTOS NOVOS NO HTML
    indice++
})


//Função para curso selecionado
const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")] //Elemento selecionado
    return cursosSelecionados[0]
    }

//EVENTO PARA PEGAR SOMENTE OS RADIOS MARCADOS NO BOTAO
botaoCursoSelecionado.addEventListener("click",(evt)=>{
    try {
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch(ex) {
        alert("Selecione um curso!")
    }
    

    //OPÇÕES PARA PEGAR SOMENTE O CONTEUDO DE TEXTO DA DIV
    //PRIMEIRA:
    //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent 
    //SEGUNDA:
    //const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent

    // parentNode
    // childNodes[nodenumber]
    // firstChild
    // lastChild
    // nextSibling
    // previousSibling

    //console.log(todosRadios) //exibe todos os inputs
    //console.log(radioSelecionado) //exibe somente o selecionado
    //console.log(cursoSelecionado)
})

//EVENTO PARA REMOVER CURSO SELECIONADO DA LISTA
botaoRemoverCurso.addEventListener("click",(evt)=>{
    const cs = cursoSelecionado()
    if(cs!=undefined) {
        cs.remove()
    } else {
        alert("Selecione um curso!")
    }
})

//INSERINDO NOVOS ELEMENTOS EM POSIÇÕES ESPECIFICAS

botaoAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    try {
        if(nomeCurso.value!="") {
           const novoCurso=criarNovoCurso(nomeCurso.value)
           caixaCursos.insertBefore(novoCurso, cursoSelecionado()) //METODO PARA ADICIONAR ANTES
        } else {
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})

botaoAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    try {
        if(nomeCurso.value!="") {
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})