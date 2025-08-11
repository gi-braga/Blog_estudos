const btn_imp = document.getElementById("btn_imprimir")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo=document.getElementById('tabela') //pegar o conteudo de TABELA do html

    let estilo = "<style>" //criar variavel estilo para definir como os elementos serão na impressão
    estilo += "table {margin: auto; width: 500%; height: 100px; border-collapse: collapse;}"
    estilo += "th, td {border: solid 1px black; vertical-align: middle;"
    estilo += "padding: 8px; text-align: center;}"
    estilo += "<style>"

    const win = window.open('','','height=700, width=700') //Criar nova janela e colocar conteudo definido acima nessa nova página criada

    win.document.writeln('<html><head>')
    win.document.writeln('<title>Tabela</title>')
    win.document.writeln(estilo)
    win.document.writeln('</head><body>')
    win.document.writeln(conteudo.innerHTML)
    win.document.writeln('</body></html>')

    win.print() //imprimir conteudo da janela
    //win.close() //fechar a janela quando botao cancelar for clicado
})