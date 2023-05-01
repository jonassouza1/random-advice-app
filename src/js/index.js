const botao = document.getElementById('btm')
const texto=document.getElementById('text')
const descriçao=document.getElementById('descriçao')

async function ConselhosAleatorio(){
    const url ="https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json() 
}

async function pegarConselhoPorclick(){
const conselhosAleatorios = await ConselhosAleatorio()
const conselho = conselhosAleatorios.slip.advice
const descriçoes= conselhosAleatorios.slip.id
descriçao.innerText=`ADEVICE # ${descriçoes}`
texto.innerText=conselho
}
 pegarConselhoPorclick()

 botao.addEventListener('click',()=>{
    pegarConselhoPorclick()
 })