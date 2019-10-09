listaSpan = document.getElementsByClassName("palavrasatrabalhar")

function botaoFunc(){
    let botao = document.querySelector(".botao")
    botao.addEventListener('click', function(){
        criarTagSpan(capturarTexto())
    }
)}

function capturarTexto(){
    let valorEscrito = document.querySelector(".jscaptura").value
    let arraySepPalavras = valorEscrito.split(" ")
    console.log(arraySepPalavras)
    return arraySepPalavras;
}

function criarTagSpan(text){
     for(let i = 0; i < text.length; i++){
        let palavraSeparada = document.createElement("span");
        palavraSeparada.classList.add("palavrasatrabalhar")
        palavraSeparada.innerHTML = text[i];
        let capturarDiv = document.querySelector(".receberpalavras");
        capturarDiv.appendChild(palavraSeparada);
        determinarEstilo()
    }

}

function determinarEstilo(){
    for(let i = 0; i < listaSpan.length; i++){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let backgroundColorArray = "rgb(" + r +", " + g + ", " + b +")";
        let fontColor = "rgb(" + g +", " + b + ", " + r +")";
        let wordSize = Math.floor((Math.random()+20) * 3)+"px";
        listaSpan[i].style.backgroundColor = backgroundColorArray;
        listaSpan[i].style.color = fontColor
        listaSpan[i].font_Size = wordSize
    }
}

    botaoFunc()
    



