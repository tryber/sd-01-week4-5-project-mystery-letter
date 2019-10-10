var frase = document.getElementById("frase-carta-adicionada-pelo-usuario")
var receber = document.getElementById("recebe-frase-gerada")
var gerador = document.getElementById("gerar-carta")
var teste = document.querySelector(".teste")
let criar = document.createElement("div")
let titulo = document.getElementsByTagName("h1")

let corFundo = ["red","yellow","green","blue"];
let tamanhoDeFonte = ["5mm","8mm","12mm","15mm"];
let imagemDeFundo = ['background1.png','background2.png','background3.png']
let efeitosNaFonte = ["normal","italic","oblique","initial"];
let corDeFundo = ["red","yellow","green","blue"];

function criatorio(envia) {
    let tags = document.createElement("span")
    tags.setAttribute("class","classe-criada-pelo-usuario")
    receber.appendChild(tags)
    tags.insertAdjacentHTML('afterbegin', envia)
}
function ativarCarta() {
    
    palavras = frase.value.split(" ")
    console.log(palavras)
    for (const armazena of palavras) {
        criatorio(armazena)
    }   
    var tagsCriadas = document.getElementsByClassName("classe-criada-pelo-usuario")
    for(let i = 0; i < tagsCriadas.length; i++){
        let indiceAleatorio1 = Math.floor(Math.random()*3);
        let indiceAleatorio2 = Math.floor(Math.random()*3);
        let indiceAleatorio3 = Math.floor(Math.random()*3);
        let indiceAleatorio4 = Math.floor(Math.random()*3);
        let indiceAleatorio5 = Math.floor(Math.random()*3);
        tagsCriadas[i].style.backgroundImage = "url('" + imagemDeFundo[indiceAleatorio1] + "')";
        tagsCriadas[i].style.fontSize = tamanhoDeFonte[indiceAleatorio2];
        tagsCriadas[i].style.color = corFundo[indiceAleatorio3];
        tagsCriadas[i].style.fontStyle = efeitosNaFonte[indiceAleatorio4];
        tagsCriadas[i].style.backgroundColor = corDeFundo[indiceAleatorio5];
    }
}










