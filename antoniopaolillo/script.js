var imgs = ["img0.png", "img1.png", "img2.png", "img3.png"];
var fonts = ["initial", "italic", "inherit", "normal", "oblique", "unset"]

var cartaMisteriosa = document.getElementsByClassName("cartamisteriosa")[0];

var simbolos = "0123456789ABCDEF";
var colorBackground = "#";
var colorBackground2 = "#";

var carta;

function gerarcartas() {

    var textoDigitado = document.getElementById("inputtxt");
    var textoDigitadoValue = textoDigitado.value;
    var textoDigitadoSplit = textoDigitadoValue.split(" ");

    var numCartas = document.getElementsByTagName('div');
    var numCartasLength = numCartas.length - 2;

    //apagando cartas anteriores
    for (let j = 0; j < numCartasLength; j++) {
        let primeiroFilho = cartaMisteriosa.firstElementChild;
        cartaMisteriosa.removeChild(primeiroFilho);
    }

    //gerando o numero de cartas
    for (let i = 0; i < textoDigitadoSplit.length; i++) {
        carta = document.createElement('div');
        carta.setAttribute("class", "cartas");
        cartaMisteriosa.appendChild(carta);

        //adicionando fonte por indice às cartas
        var texto = textoDigitadoSplit[i];
        carta.innerHTML = texto;
        corbackground();
        geracor();
        tamanhofonte();
        buscandoimg();
        stylefonte();
    }

}

//gerando backgroundcolor
function corbackground() {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado = simbolos[Math.floor(Math.random() * 16)];
        colorBackground = colorBackground + simboloSorteado;
    }
    carta.style.backgroundColor = colorBackground;
    colorBackground = "#";
}

//gerando cor da fonte
function geracor() {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado2 = simbolos[Math.floor(Math.random() * 16)];
        colorBackground2 = colorBackground2 + simboloSorteado2;
    }
    carta.style.color = colorBackground2;
    colorBackground2 = "#";
}

//gerando tamanho da fonte
function tamanhofonte() {
    var tamanhoFonte = Math.floor(Math.random() * (70 - 20) + 20);
    carta.style.fontSize = tamanhoFonte + 'px';
}

//buscando background img
function buscandoimg() {
    let sorteioImagem = Math.floor(Math.random() * 4);
    carta.style.backgroundImage = "url('img" + [sorteioImagem] + ".png')"
}

//gerando style da fonte
function stylefonte() {
    let sorteioStyle = Math.floor(Math.random() * 6);
    carta.style.fontStyle = fonts[sorteioStyle];
}

//alterando fontes mediante clique
function testando(){
var numeroCartas = document.getElementsByTagName('div')
let teste2 = numeroCartas.length;
console.log(numeroCartas)
console.log(teste2);

for(let u = 0; u < teste2; u++){
    var cartasMudando = document.getElementsByClassName("cartas")[u];
    console.log(cartasMudando)
    cartasMudando.addEventListener('click', function(){
        corbackground();
        geracor();
        tamanhofonte();
        buscandoimg();
        stylefonte();
    })
}
}
testando();