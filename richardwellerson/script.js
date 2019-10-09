function botaoFunc(){
    let botao = document.querySelector(".botao")
    botao.addEventListener('click', function(){
        capturarTexto()
    }
)}

function capturarTexto(){
    let valorEscrito = document.querySelector(".jscaptura").value
    let arraySepPalavras = valorEscrito.split(" ")
    return arraySepPalavras;
}

function criarTagSpan(){
     for(i = 0; i < capturarTexto().lenght; i++)
        let divFeita = document.createElement("div");
        divFeita.innerHTML= arraySepPalavras[x];
        document.div.appendChild(divFeita);
        divFeita.classList.add("divjsfeita");
}

function determinarEstilo(){
    for(i = 0; i < arraySepPalavras.length; i++){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let backgroundColorArray = "rgb(" + r +", " + g + ", " + b +")";
        let fontColor = "rgb(" + g +", " + b + ", " + r +")";
        let wordSize = Math.floor((Math.random()+20) * 3)+"px";
    }
}

    botaoFunc()
    




