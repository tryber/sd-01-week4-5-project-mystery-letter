var imgs = ["img1.png", "img2.png", "img3.png", "img4.png"];
function teste() {
    var cartaMisteriosa = document.getElementsByClassName("cartamisteriosa")[0];

    var numCartas = document.getElementsByTagName('div');
    var numCartasLength = numCartas.length - 2;

    var textoDigitado = document.getElementById("inputtxt");
    var textoDigitadoValue = textoDigitado.value;
    var textoDigitadoSplit = textoDigitadoValue.split(" ");

    var simbolos = "0123456789ABCDEF";
    var colorBackground = "#";
    var colorBackground2 = "#";

    //apagando cartas anteriores
    for (let j = 0; j < numCartasLength; j++) {
        let primeiroFilho = cartaMisteriosa.firstElementChild;
        cartaMisteriosa.removeChild(primeiroFilho);
    }

    //gerando o numero de cartas
    for (let i = 0; i < textoDigitadoSplit.length; i++) {
        var carta = document.createElement('div');
        carta.setAttribute("class", "cartas");
        cartaMisteriosa.appendChild(carta);

        //adicionando fonte por indice às cartas
        var texto = textoDigitadoSplit[i];
        carta.innerHTML = texto;

        //gerando backgroundcolor
        for (let n = 0; n < 6; n++) {
            let simboloSorteado = simbolos[Math.floor(Math.random() * 16)];
            colorBackground = colorBackground + simboloSorteado;
        }
        carta.style.backgroundColor = colorBackground;
        colorBackground = "#";

        //gerando cor da fonte
        for (let n = 0; n < 6; n++) {
            let simboloSorteado2 = simbolos[Math.floor(Math.random() * 16)];
            colorBackground2 = colorBackground2 + simboloSorteado2;
        }
        carta.style.color = colorBackground2;
        colorBackground2 = "#";

        //gerando tamanho da fonte
        var tamanhoFonte = Math.floor(Math.random() * (70 - 20) + 20);
        carta.style.fontSize = tamanhoFonte + 'px';

        //buscando background img
        // let sorteioImagem = Math.floor(Math.random() * 4);
        // carta.style.backgroundImage = url(imgs[sorteioImagem]);




        carta.style.width = '200px'
        carta.style.height = '100px'

    }



}