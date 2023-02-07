var zero = document.getElementById('0')
var um = document.getElementById('1')
var dois = document.getElementById('2')
var tres = document.getElementById('3')
var quatro = document.getElementById('4')
var cinco = document.getElementById('5')
var seis = document.getElementById('6')
var sete = document.getElementById('7')
var oito = document.getElementById('8')
var nove = document.getElementById('9')
var limpar = document.getElementById('limpar')
var mais = document.getElementById('mais')
var menos = document.getElementById('menos')
var vezes = document.getElementById('vezes')
var divisao = document.getElementById('divisao')
var igual = document.getElementById('igual')
var resultado = document.getElementById('resultado')

zero.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 0
})
um.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 1
})
dois.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 2
})
tres.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 3
})
quatro.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 4
})
cinco.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 5
})
seis.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 6
})
sete.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 7
})
oito.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 8
})
nove.addEventListener(`click`,  ()=>{
   resultado.innerHTML += 9
})
limpar.addEventListener(`click`,  ()=>{
   var resultado = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
})

mais.addEventListener(`click`, ()=>{
    resultado.innerHTML += "+"
})
menos.addEventListener(`click`, ()=>{
    resultado.innerHTML += "-"
})
vezes.addEventListener(`click`, ()=>{
    resultado.innerHTML += "*"
})
divisao.addEventListener(`click`, ()=>{
    resultado.innerHTML += "/"
})

igual.addEventListener(`click`, ()=>{
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = 'Nada Aqui !'
    }
    console.log(resultado)
})