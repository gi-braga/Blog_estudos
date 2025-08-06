const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")

//alarme 

const btn_ativar=document.getElementById("btn_ativar")
const btn_parar=document.getElementById("btn_parar")
const tmp_alarme=document.getElementById("tmp_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const timer=document.getElementById("timer")

let som_alarme= new Audio("Scott Joplin The Entertainer.mp3") //colocar o caminho do som do alarme aqui
som_alarme.loop=-1 //repetir o som do alarme
som_alarme.volume=0.5 //volume do som do alarme

let ts_atual=null //timestamp atual
let ts_alarme=null //timestamp do alarme 
let alarme_ativo=false //variável para verificar se o alarme está ativo
let alarme_tocando=false //variável para verificar se o alarme está tocando

btn_ativar.addEventListener("click",()=>{
    ts_atual=Date.now() //timestamp atual
    ts_alarme= ts_atual+(tmp_alarme.value*1000) //timestamp atual + timestamp do alarme em milisegundos
    alarme_ativo=true
    timer.classList.add("alarme") //adiciona a classe alarme ao timer
    const dt_alarme=new Date(ts_alarme) //data do alarme
    hora_alarme.innerHTML="Hora do Alarme:"+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click",()=>{
    alarme_ativo=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause() //pausa o som do alarme
    som_alarme.currentTime=0 //volta o som do alarme para o início
})


//data e hora atual

const data=new Date()

//const dia_m=data.getDate()<10?"0"+data.getDate():data.getDate()
//ou
let dia=data.getDate() //incluir o 0 antes dos dias de um digito só
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data_r

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundo=data.getSeconds()
    segundo=segundo<10?"0"+segundo:segundo
    const hora_completa=hora+":"+minuto+":"+segundo
    div_relogio.innerHTML=hora_completa
   
    if(alarme_ativo && !alarme_tocando){ //verifica se o alarme está ativo e não está tocando
        if(data.getTime() >= ts_alarme){ //verifica se o horário atual é maior ou igual ao horário do alarme
            alarme_tocando=true
            som_alarme.play() //toca o som do alarme
            timer.classList.add("alarme") //adiciona a classe alarme ao timer
        }
    }
}

const intervalo=setInterval(relogio,1000) //atualiza o relogio a cada 1 segundo





/*métodos que contem na classe Date

getDate() //dia do mês
getDay() //dia da semana (0-6)
getFullYear() //ano
getHours() //hora
getMilliseconds() //milissegundos
getMinutes() //minutos
getMonth() //mês (0-11)
getSeconds() //segundos
getTime() //data em milissegundos desde 1 de janeiro de 1970
Date.now() //retorna a data atual em milissegundos desde 1 de janeiro de 1970
getTimezoneOffset() //diferença em minutos entre UTC e o horário local
setDate() //define o dia do mês
setFullYear() //define o ano
setHours() //define a hora
setMinutes() //define os minutos
setMonth() //define o mês
setSeconds() //define os segundos
setMilliseconds() //define os milissegundos
toDateString() //retorna a data como uma string legível
toLocaleDateString() //retorna a data formatada de acordo com as configurações locais
*/