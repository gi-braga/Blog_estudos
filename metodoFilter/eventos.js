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

//CRIANDO ELEMENTOS NO HTML
const criarNovoCurso = (curso) => {
    const novoElemento=document.createElement("div") 
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb) //INSERIR BOTAO RADIO

    novoElemento.appendChild(comandos) //INSERIR COMANDO
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el) //CRIAR NOVO ELEMENTO CHAMANDO A FUNÇÃO CriarNovoCurso
    caixaCursos.appendChild(novoElemento) //INSERIR ELEMENTOS NOVOS NO HTML
    indice++
})


//Função para curso selecionado
const radioSelecionado=()=>{
    const todosRadios= [...document.querySelectorAll("input[type=radio]")] //lista com todos os radios
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{ //Encontrar radio selecionado com o metodo filter
        return ele.checked
    })
    return radioSelecionado[0] //Mostrar somente o radio selecionado, e não a coleção dela
}

//EVENTO PARA PEGAR SOMENTE OS RADIOS MARCADOS NO BOTAO
botaoCursoSelecionado.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    } else {
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
    const rs=radioSelecionado()
    try { //MESMA FUNÇÃO DO IF
        const cursoSelecionado=rs.parentNode.parentNode //RETORNA A DIV COMPLETA
        cursoSelecionado.remove()
    } catch(ex) { //ex = EXCEÇÃO
        alert("Selecione um curso!")
    }
})

//INSERINDO NOVOS ELEMENTOS EM POSIÇÕES ESPECIFICAS

botaoAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    try {
        if(nomeCurso.value!="") {
            const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado) //METODO PARA ADICIONAR ANTES
        } else {
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})

botaoAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    try {
        if(nomeCurso.value!="") {
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})