const caixaCursos=document.querySelector("#caixaCursos")
const botao_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const botaoCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb) //INSERIR BOTAO RADIO

    novoElemento.appendChild(comandos) //INSERIR COMANDO

    caixaCursos.appendChild(novoElemento) //INSERIR ELEMENTOS NOVOS NO HTML
})

//evento para pegar somente os radios marcados
botaoCursoSelecionado.addEventListener("click",(evt)=>{
    //lista com todos os radios
    const todosRadios= [...document.querySelectorAll("input[type=radio]")]

    const radioSelecionado=todosRadios.filter((el,ind,arr)=>{
        return el.checked
    })
    console.log(radioSelecionado)
})