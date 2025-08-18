const btn_imp = document.getElementById("btn_imprimir")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo=document.getElementById('tabela').innerHTML //pegar o conteudo de TABELA do html

    //criar variavel estilo para definir como os elementos serão na impressão
    let estilo = 'body {display: flex; flex-direction: column; justify-content: center; align-items: center;}'
    estilo += 'table {margin: auto; width: 500px; height: 100px; border-collapse: collapse;}'
    estilo += 'td, th {border: 1px solid black; padding: 8px; text-align: center; vertical-align: middle;}'
    estilo += 'thead {background-color: gray; color: white;}'
    estilo += 'thead > tr > th {position: sticky; top: -1px; background-color: gray;}'
    estilo += 'tfoot {background-color: gray; color: white;}'
    estilo += 'tbody > tr:nth-child(2n) {background-color: lightgray;}'
    estilo += 'caption {font-size: 1.5em; font-weight: bold; background-color: lightgray; padding: 10px;}'

    const win = window.open('','','height=700, width=700') //Criar nova janela e colocar conteudo definido acima nessa nova página criada

    win.document.writeln('<html><head>')
    win.document.writeln('<title>Tabela</title>')
    win.document.writeln('<style>')
    win.document.writeln(estilo)
    win.document.writeln('</style>')
    win.document.writeln('</head><body>')
    win.document.writeln(conteudo)
    win.document.writeln('</body></html>')

    win.print() //imprimir conteudo da janela
    //win.close() //fechar a janela quando botao cancelar for clicado
})