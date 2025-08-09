const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")


btn_url.addEventListener("click",(evt)=>{
    //window.location="https://www.google.com.br" //Caso eu precise redirecionar para uma outra página que eu tenha já definida
    //window.location.replace("https://www.google.com.br") //deleta a URL corrente do histórico
    //window.location.assign("https://www.google.com.br") //NÃO deleta a URL corrente do histórico
    //window.location.reload //recarrega a página
    //window.history.back()
    //window.history.forward()
    //console.log(window.history.length)
    //window.history.go(1)
    window.location = url.value
})