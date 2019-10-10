listaSpan = document.getElementsByClassName("palavrasatrabalhar")

function botaoFunc() {
    let botao = document.querySelector(".botao")
    botao.addEventListener('click', function () {
        criarTagSpan(capturarTexto())
    }
    )
}

function capturarTexto() {
    let valorEscrito = document.querySelector(".jscaptura").value
    let arraySepPalavras = valorEscrito.split(" ")
    console.log(arraySepPalavras)
    return arraySepPalavras;
}

function criarTagSpan(text) {
    for (let i = 0; i < text.length; i++) {
        let palavraSeparada = document.createElement("span");
        palavraSeparada.classList.add("palavrasatrabalhar")
        palavraSeparada.innerHTML = text[i];
        let capturarDiv = document.querySelector(".receberpalavras");
        capturarDiv.appendChild(palavraSeparada);
        determinarEstilo()
    }
}

function determinarEstilo() {
    for (let i = 0; i < listaSpan.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let fontColor = "rgb(" + g + ", " + b + ", " + r + ")";
        let wordSize = Math.floor((Math.random(1)+2) * 50) + "px";
        let backgroundColorArray = "rgb(" + r + ", " + g + ", " + b + ")";
        let imgBg = "url('imagesAndMusic/" + Math.floor(Math.random() * i) + ".png')"
        console.log(imgBg)
        if (i % 2 == 0) {
            listaSpan[i].style.backgroundImage = imgBg;
            listaSpan[i].style.color = fontColor;
            listaSpan[i].style.fontSize = wordSize;
        } else {
            listaSpan[i].style.backgroundColor = backgroundColorArray;
            listaSpan[i].style.color = fontColor;
            listaSpan[i].style.fontSize = wordSize;
        }
        }
}


function apagaTags() {
    let qtdSpan = document.getElementsByClassName("receberpalavras");
    let qtdTagsSpan = document.getElementsByTagName("span");
    let tamanhoSpan = qtdTagsSpan.length
    let rmPrimeiroFilho = qtdSpan.firstElementChild()
    for (let i = 0; i < tamanhoSpan ; i++) {
        qtdSpan[0].removeChild(rmPrimeiroFilho)
    }
}

botaoFunc()




