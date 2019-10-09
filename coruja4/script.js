var frase = document.getElementById("frase-carta")
var receber = document.getElementById("recebe-frase-gerada")
var gerador = document.getElementById("gerar-carta")
var palavras;

let criar = document.createElement("div")

gerador.addEventListener('click', function(){
    criar.className = "gerador-de-mensagem";
    document.getElementById("recebe-frase-gerada").appendChild(criar)
    console.log(palavras)
})
frase.addEventListener('keyup', function(){
    criar.innerHTML = this.value;
    palavras = criar.innerHTML.split(" ")
})



